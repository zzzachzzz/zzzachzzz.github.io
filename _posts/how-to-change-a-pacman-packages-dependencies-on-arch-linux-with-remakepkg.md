---
title: How to Change a Pacman Package's Dependencies on Arch Linux with remakepkg
date: '2022-10-22T20:13:29.318Z'
---

Recently I ran into a dependency conflict after an update of a particular package, [bitwarden-cli](https://archlinux.org/packages/community/any/bitwarden-cli/). Prior to version 2022.6.2-2, `bitwarden-cli` depended on `nodejs`. It was in version 2022.6.2-2 that the dependency was changed from `nodejs` to `nodejs-lts-gallium`.

Okay, so what's the big deal? The big deal is that `nodejs` and `nodejs-lts-gallium` cannot both be installed, as they're listed as conflicting packages of one another (see the **Conflicts** section of [nodejs-lts-gallium](https://archlinux.org/packages/community/x86_64/nodejs-lts-gallium/)). While I could have just gone ahead and removed `nodejs` in favor of `nodejs-lts-gallium`, I didn't really want to, as I had no issues with it and wanted the latest version of `nodejs`. And yes, alternatively I could have installed the latest version via [nvm](https://github.com/nvm-sh/nvm) or otherwise, and kept `nodejs-lts-gallium` (version 16.x at the time of this writing) as the system dependency.

For whatever your personal reasons are, you may wish to remove or alter the restrictions defined for a package by a package maintainer. In my case, I was able to figure out why the dependency change occurred in the first place. It was due to [this bug](https://bugs.archlinux.org/task/74929), a bug which affected a premium feature of Bitwarden that I didn't even have access to. With this in mind, I felt comfortable discarding the new requirement of using `nodejs-lts-gallium`.

**IMPORTANT NOTE**  
In writing this, I realized that `--assume-installed nodejs-lts-gallium` solves my problem, without the need for `remakepkg`. I just need to include that option during an upgrade, whenever there is a newer version of `bitwarden-cli` available. This works when dealing with the absence of a package. However, `remakepkg` may be needed for other scenarios. I'll proceed with how I used `remakepkg` to solve my problem.

So, how does one go about "changing" a package's dependency? It's done with the help of an AUR package, [remakepkg](https://aur.archlinux.org/packages/remakepkg). You can also find the git repo containing the script [here](https://gitlab.com/ayekat/pacman-hacks).

First off, credit to this comment from the forum post, [nodejs-lts-gallium and nodejs are in conflict](https://bbs.archlinux.org/viewtopic.php?pid=2030394#p2030394). I owe the entirety of my solution to this comment. However for the non pacman experts, I'll provide some more details on how I solved my problem.

Prior to discovering this solution, I had added the line `IgnorePkg = bitwarden-cli` to my `/etc/pacman.conf` file, preventing an upgrade of this package that introduced the `nodejs-lts-gallium` dependency. The problem is that upon removing this, and running `pacman -Syu`, I was prompted to remove the conflicting package `nodejs`, with the upgrade of `bitwarden-cli`. I needed to get the latest version of `bitwarden-cli`, but not actually install it until I had made the necessary dependency modifications. This is how I achieved that:

```bash
pacman -S --downloadonly --assume-installed nodejs-lts-gallium bitwarden-cli
```

There is another, less manual way to accomplish this. If you see the [author's guide to remakepkg](https://bbs.archlinux.org/viewtopic.php?id=234936), you'll see that the `remakepkg` command has the added convenience of downloading the latest version of a package from a mirror, independent of your system's main synced package database. More details on that [here](https://gitlab.com/ayekat/pacman-hacks/-/issues/43).

Moving on with how I did this the manual way, after running the above pacman command to download `bitwarden-cli`, I was then able to access the downloaded package file from `/var/cache/pacman/pkg/bitwarden-cli-2022.10.0-1-any.pkg.tar.zst`. I copied this to another location to prepare a modified copy. Next, I created a file `rulefile`:
```bash
remove-depend nodejs-lts-gallium
add-depend nodejs
```
and supplied it to the `repkg` command:
```bash
repkg -i ./bitwarden-cli-2022.10.0-1-any.pkg.tar.zst -r ./rulefile
```
The `repkg` command produced an output modified package file:  
`bitwarden-cli-2022.10.0-1.1-any.pkg.tar.xz`

Notice the appended `.1` to the version info, and the alternate `xz` extension for the compression format.

Running `pacman -Qpi ./bitwarden-cli-2022.10.0-1.1-any.pkg.tar.xz`, we see that the dependency was replaced in the "Depends On" section:
```
Name            : bitwarden-cli
Version         : 2022.10.0-1.1
Description     : The command line vault
Architecture    : any
URL             : https://github.com/bitwarden/cli
Licenses        : GPL3
Groups          : None
Provides        : bitwarden-cli=2022.10.0-1
Depends On      : nodejs
...
```

All that's left now is to install the modified package:
```bash
pacman -U ./bitwarden-cli-2022.10.0-1.1-any.pkg.tar.xz
```
You can verify the installed version once again with `pacman -Qi bitwarden-cli`

That's it! As I mentioned above, `remakepkg` isn't necessary for my scenario, as pacman's `--assume-installed` option does the trick. However for more advanced dependency scenarios, `remakepkg` can come in handy.

