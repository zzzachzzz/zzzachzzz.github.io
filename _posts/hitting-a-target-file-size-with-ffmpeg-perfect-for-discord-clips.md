---
title: Hitting a Target File Size With FFmpeg (Perfect for Discord Clips)
date: '2025-12-10T12:43:16.627Z'
---

If you've ever tried to send a gaming clip over Discord as a free user, you've run into the 10MB upload limit. My process before creating this script was to use a collection of other ffmpeg commands to trial-and-error trimming the clip, and lowering the quality until it finally went below the 10MB threshold.

I wanted a way to say: **"Here's my clip. Make it 10MB. Do what you must."**

So I wrote a Bash function that uses FFmpeg's 2‑pass encoding method to reliably target a specific file size. It also has quality‑of‑life options for trimming timestamps. As you'll see below, you can write other bash functions which call the main function to make this process happen by typing just a few characters into your terminal.

My setup:

- Gaming on Windows, running the script in WSL (Git Bash will work too)
- Shadowplay 1 minute instant replay saved videos
- Discord 10MB file upload limit (non-Nitro paid users)

## Requirements
- A Bash shell to run the script: Linux, WSL, or Git Bash
- FFmpeg (should include `ffmpeg` & `ffprobe`)

**NOTE** I have FFmpeg installed in my Linux distro mounted in WSL (more on that [here](/blog/accessing-a-dual-boot-linux-install-in-wsl-with-chroot)), but using WSL with FFmpeg installed in Windows, with the exe accessible in your `$PATH` should work too.

## The Scripts

Also available as a [GitHub Gist](https://gist.github.com/zzzachzzz/1a1e056160c5fd79262bf702022cfe59)

### `vidunderfilesize.sh`

```bash
#!/usr/bin/env bash

eval set -- "$(
  getopt \
    --options s:e:i:o:k:a: \
    --longoptions start:,end:,input:,output:,output-filesize-kb:,audio-bitrate-kbps: \
    -- "$@"
)"

while true; do
  case "$1" in
    -s|--start) start_arg="$2"; shift 2 ;;
    -e|--end) end_arg="$2"; shift 2 ;;
    -i|--input) input="$2"; shift 2 ;;
    -o|--output) output="$2"; shift 2 ;;
    -k|--output-filesize-kb) output_filesize_kb="$2"; shift 2 ;;
    -a|--audio-bitrate-kbps) audio_bitrate_kbps="$2"; shift 2 ;;
    --) shift; break ;;
  esac
done

IFS=":" read -ra start_array <<< "$start_arg"
IFS=":" read -ra end_array <<< "$end_arg"

# Prepend default zeros, filling arrays to 3 slots
while (( ${#start_array[@]} < 3 )); do
  start_array=(0 ${start_array[@]})
done
while (( ${#end_array[@]} < 3 )); do
  end_array=(0 ${end_array[@]})
done

# Pad left 2 digits for each slot
for i in "${!start_array[@]}"; do
  start_array[$i]=$(printf "%02d" ${start_array[$i]})
done
for i in "${!end_array[@]}"; do
  end_array[$i]=$(printf "%02d" ${end_array[$i]})
done

start_hours_part=${start_array[0]}
start_minutes_part=${start_array[1]}
start_seconds_part=${start_array[2]}
start_seconds=$(( $start_seconds_part + $start_minutes_part * 60 + $start_hours_part * 60 * 60 ))
start_time="$start_hours_part:$start_minutes_part:$start_seconds_part"

# If no end timestamp supplied (or user provided zeroes), get duration of video
if [[ "${end_array[@]}" == "00 00 00" ]]; then
  raw_duration_decimal="$(
    ffprobe -v error -select_streams v:0 -show_entries stream=duration \
    -of default=noprint_wrappers=1:nokey=1 "$input"
  )"
  end_seconds="$(awk -v d="$raw_duration_decimal" 'BEGIN {print int(d)}')"
  # `end_time` intentionally not set
else
  end_hours_part=${end_array[0]}
  end_minutes_part=${end_array[1]}
  end_seconds_part=${end_array[2]}
  end_seconds=$(( $end_seconds_part + $end_minutes_part * 60 + $end_hours_part * 60 * 60 ))
  end_time="$end_hours_part:$end_minutes_part:$end_seconds_part"
fi

duration_seconds=$(( $end_seconds - $start_seconds ))

default_audio_bitrate_kbps="128"
audio_bitrate_kbps="${audio_bitrate_kbps:-$default_audio_bitrate_kbps}"
audio_total_kb=$(( $audio_bitrate_kbps * $duration_seconds ))

_10MB_in_kb="80000" # 10 megabyte == 80,000 kilobits
output_filesize_kb=${output_filesize_kb:-$_10MB_in_kb}

video_bitrate_kbps=$(( ( $output_filesize_kb - $audio_total_kb ) / $duration_seconds ))

# tmp file written to in 1st pass and read in 2nd pass
ffmpeg_stats_file="$(mktemp --tmpdir --dry-run ffmpeg_stats_XXXXXX)"

maybe_to="$([[ -n $end_time ]] && echo "-to $end_time")"
ffmpeg_common_output_file_options="\
-ss $start_time $maybe_to \
-c:v libx264 -b:v ${video_bitrate_kbps}k \
-maxrate 5M -bufsize 10M \
-passlogfile $ffmpeg_stats_file \
$FFMPEG_OUTPUT_FILE_OPTIONS\
"

# 1st pass ffmpeg analyzes video and outputs stats file to `$ffmpeg_stats_file*`,
# to accurately target `$output_filesize_kb` based on specified bitrates.
ffmpeg -y -i "$input" \
  $ffmpeg_common_output_file_options \
  -pass 1 \
  -an -f mp4 \
  /dev/null

# 2nd pass produces actual video output, reading from stats files produced in 1st pass
ffmpeg -i "$input" \
  $ffmpeg_common_output_file_options \
  -pass 2 \
  -c:a aac -b:a "${audio_bitrate_kbps}k" \
  "$output"

# Clean up tmp files, mbtree file is ~20MB
rm "$ffmpeg_stats_file"*.log{,.mbtree}

```

Additionally, here is my own helper function I use for calling the main script. I suggest you create one too.

```bash
function meleeclip() {
  local start="$1"
  local end="$2"
  local input="$3"
  local output="$4"
  # Defaults for empty start & end options handled in `vidunderfilesize.sh`
  [[ "$start" == "-" ]] && start=""
  [[ "$end" == "-" ]] && end=""

  if [[ -z "$input" || "$input" == "-" ]]; then
    local input_dir="/mnt/d/storage/Videos/shadowplay/slippi dolphin.exe"
    local newest_file="$(ls -tp "$input_dir" | grep -v "/$" | head -n 1)"
    input="${input_dir}/${newest_file}"
  fi

  if [[ -z "$output" || "$output" == "-" ]]; then
    local output_dir="/mnt/d/storage/Videos/shadowplay/slippi dolphin.exe/cropped-clips"
    local output_filename="_NEW_CLIP_NAME_ME_$(basename "$input")"
    output="${output_dir}/${output_filename}"
  fi

  FFMPEG_OUTPUT_FILE_OPTIONS="-vf crop=in_h*4/3:in_h" \
    ~/bin/vidunderfilesize.sh \
    --start="$start" \
    --end="$end" \
    --input="$input" \
    --output="$output"
}
```

## Usage

`FFMPEG_OUTPUT_FILE_OPTIONS` is an option you probably don't need. Here I am cropping to 4:3 aspect ratio to closely match [Slippi Dolphin Melee's](https://melee.tv) internal resolution of 73:60.

The `--start` and `--end` options allow you to specify the timestamps you want to trim the clip to. The parsing is flexible and allows for these example inputs, converting to `hh:mm:ss`.

- `5` -> `00:00:05`
- `1:50` -> `00:01:50`
- `01:1:01` -> `01:01:01`

With the `meleeclip` helper function I have, this is how I would typically call it:

```bash
# Let's say we want to clip from 00:00:36 to the end of my 1 minute clip
meleeclip 36

# Or from 00:00:36 to 00:00:50
meleeclip 36 50
```

That's it, since I have the `meleeclip` function default to use the newest file in my shadowplay directory as input, and a fixed output directory with a generated filename that I just go and rename separately after.

## Explanation

Bitrate is predictable for producing a given filesize. File size is basically:

```
file_size_bits ≈ bitrate_bits_per_sec × duration_sec
```

So if you want a 10MB clip:

```
10 MB (Megabytes) = 80 Mb (megabits)
10 MB = 80000 Kb (kilobits)
target_bitrate_kbps = 80000 Kb / duration_seconds
```

In the script, we calculate the maximum video bitrate we can use:
```bash
video_bitrate_kbps=$(( ( $output_filesize_kb - $audio_total_kb ) / $duration_seconds ))
```

Once you know the exact bitrate needed, FFmpeg can aim for it, and using **2‑pass encoding**, it can hit that target very accurately.

