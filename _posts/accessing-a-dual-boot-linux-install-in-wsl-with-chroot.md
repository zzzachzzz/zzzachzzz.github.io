---
title: Accessing a dual boot Linux install in WSL with chroot
date: '2024-10-11T14:49:56.465Z'
---

Got a Windows & Linux dual boot setup? Rather than setting up a new WSL install, wouldn't it be nice to be able to "import" your existing native Linux install into WSL? While this method is not exactly an import, it is functionally similar.

## Mounting the disk partition

Resources
- [WSL 2 - Mounting a partitioned disk](https://learn.microsoft.com/en-us/windows/wsl/wsl2-mount-disk#mounting-a-partitioned-disk)
- [EXT4 in Windows - Chris Titus Tech](https://www.youtube.com/watch?v=aX1vH1j7m7U)

The first step is mounting the partition containing your Linux install. If you only want to access the files of an ext4 partition from Windows, you'll only need this step.

I have defined a couple of PowerShell functions to making mounting and unmounting easier:

```powershell
# These WSL (un)mount commands must be run in PowerShell as administrator

# TODO: Replace the Model string with your own value: 'SHGS31-500GS-2'
# TODO: Replace the parition number with your own value: 4

Function linuxmnt { wsl --mount (gcim -query "SELECT * from Win32_DiskDrive WHERE Model = 'SHGS31-500GS-2'" | select -expandproperty DeviceID) --partition 4 }

Function linuxunmnt { wsl --unmount (gcim -query "SELECT * from Win32_DiskDrive WHERE Model = 'SHGS31-500GS-2'" | select -expandproperty DeviceID) }
```

The `linuxmnt` function will mount partition 4 of drive 0 in WSL at the mountpoint `/mnt/wsl/PHYSICALDRIVE0p4`. This path will vary based on the drive/device id and partition number you are targeting. The `linuxunmnt` will simply unmount all mountpoints for that drive.

You can include these in your PowerShell profile so they are always available. Your profile file path can be found with `echo $profile`, which will likely output one of the two following paths, depending on the version of PowerShell you are running:
- `C:\Users\<your-user>\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1`
- `C:\Users\<your-user>\Documents\PowerShell\Microsoft.PowerShell_profile.ps1`

You'll need to modify the `linuxmnt` and `linuxunmnt` functions, as I have hardcoded the model (to choose the correct disk) and partition number I need to target.

### Determining the device id

Begin by querying for this information in PowerShell:

```powershell
> gcim -query "SELECT * from Win32_DiskDrive"
DeviceID           Caption                 Partitions Size          Model
--------           -------                 ---------- ----          -----
\\.\PHYSICALDRIVE0 SHGS31-500GS-2          3          500105249280  SHGS31-500GS-2
\\.\PHYSICALDRIVE1 WDC WD1003FZEX-00K3CA0  1          1000202273280 WDC WD1003FZEX-00K3CA0
\\.\PHYSICALDRIVE2 ST2000DM008-2FR102      1          2000396321280 ST2000DM008-2FR102
\\.\PHYSICALDRIVE3 Samsung SSD 990 EVO 1TB 3          1000202273280 Samsung SSD 990 EVO 1TB
```

We target the `Model` attribute rather than `DeviceID`, since the physical drive number can change if hardware is added or removed. Although, in the bash function below we hardcode the path `/mnt/wsl/PHYSICALDRIVE0p4`, physical drive 0. Something to be aware of, which could technically be made dynamic.

### Determining the partition number

To determine the partition number containing the Linux filesystem, we can start with a bare mount, which will make all the drive's partitions visible in WSL, but without a mount point.

```powershell
# Run in PowerShell as administrator
wsl --mount \\.\PHYSICALDRIVEX --bare # Specify correct id instead of X
```

After the WSL bare mount, run `lsblk` from WSL.

```
$ lsblk
NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
sda      8:0    0 388.4M  1 disk
sdb      8:16   0     2G  0 disk [SWAP]
sdc      8:32   0 465.8G  0 disk
├─sdc1   8:33   0   512M  0 part
├─sdc3   8:35   0   3.7G  0 part
└─sdc4   8:36   0 461.5G  0 part
sdd      8:48   0     1T  0 disk /mnt/wslg/distro
                                 /
```

Based on the partition sizes, I can see that `sdc4` is what I'm looking for, the main ext4 filesystem. If you want to inspect a partition further to verify, you can use `mount` in the usual way to mount its contents to a directory.

## Chroot-ing into the Linux install

The helper function (named walter because that's the hostname that was chosen for the original native install):

```bash
# TODO: Replace PHYSICALDRIVE0p4 with the correct value based on the device id and partition number mounted
# TODO: Replace zach with the user you wish to switch to

function walter() {
  if [[ ! -e /mnt/wsl/PHYSICALDRIVE0p4 ]]; then
    echo "'/mnt/wsl/PHYSICALDRIVE0p4' does not exist. Did you call linuxmnt?"
    return 1
  fi
  sudo mount -t proc /proc /mnt/wsl/PHYSICALDRIVE0p4/proc
  sudo mount -t sysfs /sys /mnt/wsl/PHYSICALDRIVE0p4/sys 2> /dev/null

  sudo mount --rbind /dev /mnt/wsl/PHYSICALDRIVE0p4/dev
  sudo mount --rbind /mnt /mnt/wsl/PHYSICALDRIVE0p4/mnt
  sudo chroot /mnt/wsl/PHYSICALDRIVE0p4/ su zach
}
```

Add the above function to your `.bashrc` or other config file in your WSL install.

Random note, in my Debian WSL install, when I added a function to the `.bashrc` file, running `which walter` did not find the function, but `type walter` did. More on that [here](https://unix.stackexchange.com/a/10529).

At a minimum, all that's really needed is this line, `sudo chroot /mnt/wsl/PHYSICALDRIVE0p4/ su zach`, to choot into the mountpoint and switch from the root user to your regular user.

`sudo mount --rbind /mnt /mnt/wsl/PHYSICALDRIVE0p4/mnt` - This is helpful so that the typical WSL mounts to access the Windows C:\ drive (`/mnt/c`) and any additional drives are accessible.

The `/proc`, `/sys`, and `/dev` mounts are necessary for certain programs to work. In my case for `tmux`.

## Bringing it all together: The Workflow

1. Open PowerShell as Administrator and run `linuxmnt`
2. Open a terminal for your WSL install, and run `walter` (or whatever you chose to name it).
3. You have now chroot'd into your non-WSL Linux install! You'll have access to that shell and your installed programs, kind of as if you had SSH'd into it.

