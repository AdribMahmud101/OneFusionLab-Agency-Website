# Git Commands Reference

Here is a list of common Git commands you might need for this project.

## 1. Checking Status
Check which files have been modified or are staged for commit.
```bash
git status
```

## 2. Staging Changes
Add specific files to the staging area:
```bash
git add filename
```
Add all changed files:
```bash
git add .
```

## 3. Committing Changes
Save your staged changes with a descriptive message.
```bash
git commit -m "Your commit message here"
```

## 4. Pushing to GitHub
Upload your commits to the remote repository.
```bash
git push
```
*(If it's the first time pushing a new branch, use `git push -u origin branch-name`)*

## 5. Pulling Updates
Download and merge changes from the remote repository.
```bash
git pull
```

## 6. Branching
Create a new branch:
```bash
git branch new-feature
```
Switch to a branch:
```bash
git checkout new-feature
```
Create and switch to a new branch in one command:
```bash
git checkout -b new-feature
```

## 7. Viewing History
See the commit history.
```bash
git log
```
See a condensed graph of history:
```bash
git log --oneline --graph --all
```
