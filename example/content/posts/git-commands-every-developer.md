---
title: "10 Git Commands Every Developer Should Know"
date: 2025-12-18T00:00:00Z
draft: false
tags: ["git", "version-control", "development", "productivity"]
categories: ["Development Tools", "Productivity"]
description: "Master essential Git commands for productive development. Learn interactive rebase, bisect, cherry-pick, worktrees, and more powerful Git workflows."
---

Git is essential for modern development, but many developers only scratch the surface. Here are 10 powerful Git commands that can dramatically improve your workflow.

## 1. Git Interactive Rebase

Stop using regular rebase for cleaning up commits. Interactive rebase is much more powerful:

```bash
git rebase -i HEAD~3
```

This opens an editor showing your last 3 commits with options:
- `pick` - use commit as-is
- `reword` - change commit message
- `edit` - amend commit content
- `squash` - combine with previous commit
- `fixup` - combine with previous, discarding message

**Perfect for:** Cleaning up feature branches before merging.

## 2. Git Stash with Message

Don't just `git stash` - add context:

```bash
git stash push -m "Work in progress: user authentication"
git stash list
git stash apply stash@{1}
```

**Pro tip:** Use `git stash --include-untracked` for new files.

## 3. Git Reflog: Your Time Machine

Lost commits? Git reflog saves everything:

```bash
git reflog
git checkout HEAD@{5}
git reset --hard HEAD@{2}
```

Reflog tracks every change to `HEAD`, including resets, checkouts, and rebases. It's your safety net when things go wrong.

## 4. Bisect: Find Breaking Commits

Track down when a bug was introduced:

```bash
git bisect start
git bisect bad  # current commit has bug
git bisect good v1.0.0  # known good version
# Git will checkout commits for testing
git bisect good  # if current commit works
git bisect bad   # if current commit has bug
# Continue until bug is found
git bisect reset  # return to original state
```

**Game changer:** Debugging mysterious regressions.

## 5. Cherry-Pick Specific Changes

Need just one commit from another branch?

```bash
git cherry-pick abc1234
git cherry-pick -x abc1234  # include original commit hash in message
git cherry-pick --no-commit abc1234  # apply changes without commit
```

**Use case:** Backporting hotfixes to release branches.

## 6. Worktree: Multiple Working Directories

Work on multiple branches simultaneously:

```bash
git worktree add ../feature-branch feature-branch
git worktree list
git worktree remove ../feature-branch
```

**Perfect for:** Context switching between branches without stashing.

## 7. Blame with Line History

Find who changed what and why:

```bash
git blame -L 50,70 file.js  # blame specific lines
git blame -M file.js        # detect moved/copied lines
git blame -C file.js        # detect copied lines from other files
```

**Pro tip:** Use `-w` to ignore whitespace changes.

## 8. Log Magic

Customize your git log for better visibility:

```bash
# Compact, graph view
git log --oneline --graph --decorate --all

# Detailed changes
git log -p --stat

# By author with time range
git log --since="2 weeks ago" --author="John"

# Search commit messages
git log --grep="fix" --oneline

# Show changes to specific file
git log --follow -p file.js
```

**Create aliases:**
```bash
git config --global alias.lg "log --oneline --graph --decorate --all"
git config --global alias.ls "log --stat"
```

## 9. Submodule Management

Include external repositories:

```bash
git submodule add https://github.com/user/library.git libs/library
git submodule update --init --recursive
git submodule foreach 'git pull origin main'
```

**Use case:** Managing dependencies, theme libraries, or shared components.

## 10. Clean Your Repository

Remove untracked files and optimize your repo:

```bash
# Remove untracked files
git clean -fd

# Remove large files from history
git filter-branch --tree-filter 'rm -rf large_file.zip' --prune-empty HEAD

# Optimize repository
git gc --prune=now
git repack -ad
```

**Critical for:** Reducing repository size, removing sensitive data.

## Bonus: Git Hooks for Automation

Automate workflows with Git hooks:

```bash
# Pre-commit hook example
#!/bin/sh
npm run lint
if [ $? -ne 0 ]; then
    echo "Linting failed - commit aborted"
    exit 1
fi

# Pre-push hook
#!/bin/sh
npm run test
if [ $? -ne 0 ]; then
    echo "Tests failed - push aborted"
    exit 1
fi
```

Place these in `.git/hooks/` directory.

## Pro Tips Summary

1. **Always pull before working** - `git pull --rebase` keeps history clean
2. **Write good commit messages** - Follow conventional commits format
3. **Use branches for everything** - Never commit to main directly
4. **Regular housekeeping** - `git gc` and `git prune` keep repository healthy
5. **Backup before big operations** - `git branch backup-branch` as insurance

## Integration with IDEs

Most IDEs have excellent Git integration:
- **VS Code:** Built-in Git panel, great for basic operations
- **IntelliJ:** Powerful Git integration, supports complex workflows
- **Sublime Text:** GitSavvy plugin for power users

However, understanding the command line gives you ultimate control and helps when IDE integration fails.

## Learning Resources

- **Pro Git Book** - Free comprehensive guide
- **Git Immersion** - Hands-on tutorial
- **GitHub Skills** - Interactive learning labs
- **Atlassian Git Tutorial** - Practical examples

Master these commands and you'll handle version control like a pro. Remember: Git is complex, but incredibly powerful once you understand its philosophy.

Happy coding! 🚀