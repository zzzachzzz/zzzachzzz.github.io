---
title: 'How to Install Vim with +clipboard with Homebrew on Linux'
date: '2020-02-08T17:08:57.528Z'
---

>Note: Or just install NeoVim and this should be a non-issue.

Installing Vim with brew on OSX has worked flawlessly for me, and included +clipboard support. In my experience, working with Windows Subsystem for Linux specifically, a simple `brew install vim` didn't cut it, and `vim --version` displayed that sad `-clipboard`. I would prefer to use the same package manager between OSX and Linux, especially since I use a shell script for installing all my brew packages. In the past I've just resorted to installing vim-gtk to get a clipboard enabled build of vim on Linux. However, vim-gtk only yielded me version 8.0, while brew offered 8.2. I cared enough about this to open a GitHub issue and get a solution.

[Installing custom formula for Vim, options not present (+clipboard) - GitHub Issue](https://github.com/Homebrew/linuxbrew-core/issues/19505)

1.  Install dependencies  
    `sudo apt-get install libncurses5-dev libgnome2-dev libgnomeui-dev libgtk2.0-dev libatk1.0-dev libbonoboui2-dev libcairo2-dev libx11-dev libxpm-dev libxt-dev`
2.  Modify the vim formula  
    `brew edit vim`  
    Change the configure option `--without-x` to `--with-x` and add the option `--with-features=huge`. Save the changes.
3.  ```bash
    system "./configure", "--prefix=#{HOMEBREW_PREFIX}",
                          "--mandir=#{man}",
                          "--enable-multibyte",
                          # New options
                          "--with-x",
                          "--with-features=huge",
    ```
4.  Install the modified formula  
    `brew install --build-from-source vim`

It is crucial to have the necessary dependencies installed. I tried these steps with the same formula options, `--with-x` and `--with-features=huge`, and my Vim installation _silently failed to include clipboard support, prior to installing the dependencies_. This is a major nuisance, and I hope to have raised some awareness of this issue, for a use case as common as installing Vim with clipboard support with Homebrew on Linux.
