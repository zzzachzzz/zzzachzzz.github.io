---
title: 'Git Reference: Keep it Simple. Common Workflows'
date: '2019-09-03T19:28:34.000Z'
---

Anywhere you see `<remote>`, you should probably use `origin`. More on origin vs upstream below.

## Reference

`git status` : display current branch and information on file changes

`git branch` : view all local branches

`git checkout <branch>` : switch to the specified branch

`git branch -d <branch>` : delete a branch (may require `-D` to force if the branch has commits unique to it)

`git checkout -b <name>` : create a new branch based on the current branch, specifying a name

`git fetch` : download changes from remote

`git merge <remote>/<branch>` : merge another branch into current branch

`git pull` : fetch and merge the remote of the current branch into the local current branch

`git rebase <branch>` : like merge, but move the current branch's unique commits to be the newest commits in the commit history

`git push <remote> HEAD` : push current local branch to remote branch with the same name. If remote branch does not yet exist, requires `-u` flag to create it. If pushing to an existing branch after a rebase, `-f` flag to force will be required (be careful), as the commit history has been overwritten.

`git diff` : view line additions and deletions for tracked modified files not yet added to staging

`git diff --cached` : view line additions and deletions for files added to staging

`git log` : view commit history with commit hashes

`git reset` : remove all files from staging (implicit --soft)

`git checkout -- <file or directory>` : Undo changes made to the specified file(s) (tracked and unstaged files)

`git reset --hard <commit-hash>` or `git reset --hard <branch>` : reset current branch to match a specific commit or latest commit of a specified branch.  
Example:  
`git reset --hard 151fb5a134912aacec63969f479dd59e5057ff22`  
or `git reset --hard master`.

`git reflog` : view history of executed git commands. Undo Git actions with `git reset --hard <history-hash>` where history-hash is the hash shown in reflog of the state you want to go back to.

## Resolve Merge Conflicts

1.  `git status` to see files which contain conflicts
2.  Open conflicting files in your editor and make desired changes, remembering to delete the lines added by Git containing `>>>>>>>`, `=======`, `<<<<<<<`.
3.  `git add .` from top level directory of your git repo to add all files
4.  `git merge --continue` to continue or `git merge --abort` at any time to cancel the merge

## Reset my current branch to be exactly like remote master

1.  `git fetch` : download changes from remote
2.  `git reset --hard <remote>/master` : reset current branch to be identical to remote master branch

## Origin vs Upstream?

Upstream is only applicable in the context of GitHub Forks, as far as I know. There's a good explanation here: [Stack Overflow](https://stackoverflow.com/questions/9257533/what-is-the-difference-between-origin-and-upstream-on-github). You may want a workflow where you develop from your fork, get updates from the original repository, and push changes to your fork (perhaps to then open pull requests for the original repo). If that's the case, you want certain commands to specify upstream, and others origin:

`git pull upstream master` (on local master) to update your clean local copy of the original repo as changes get merged to master.

Then `git rebase master` or `git merge master` (on your feature branch) to update your feature branches.

`git push -u origin HEAD` to push your feature branch to your own forked repo.
