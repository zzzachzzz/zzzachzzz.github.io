---
title: 'How I Use Git Rebase'
---

Yeah so yeah ok sure yup emojo

Todo, get the rest of my aliases from work config

```
git diff
git diff --cached
git rebase -i origin/main
git diff

alias gs="git status"
alias gd="git diff"
alias gdc="git diff --cached"
# To include regex (--word-diff-regex=.), do `$gitwd=.`
gitwd="--color-words"
alias gl="git log"
alias gb="git branch --sort=committerdate | tac | head"
alias grevparsehead="git rev-parse --abbrev-ref HEAD"
alias ghead=grevparsehead
function gheador() {
  echo "origin/$(grevparsehead)"
}
```

Hypothetical alt configuration...

```
# .bashrc
alias g=git
alias gs="git status"

# .gitconfig
[alias]
  s = status
  d = diff
  dc = diff --cached
  head = !git rev-parse --abbrev-ref HEAD
  heador = !echo "origin/$(git head)"
```

