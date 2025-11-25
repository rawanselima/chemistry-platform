# Git Commands to Fix UserLayout Deployment Issue

## The Problem
Vercel can't find `UserLayout.tsx` because it's not properly tracked in Git (case sensitivity issue on Windows).

## Solution: Run These Commands

### Step 1: Check if file is in Git
```bash
git ls-files src/pages/ | findstr /i userlayout
```

### Step 2: Force Git to Track the File Correctly
```bash
# Remove from git cache (if exists)
git rm --cached src/pages/UserLayout.tsx

# Add the file
git add src/pages/UserLayout.tsx

# Verify it's added
git status src/pages/UserLayout.tsx
```

### Step 3: Commit and Push
```bash
git add src/App.tsx src/pages/UserLayout.tsx
git commit -m "Fix UserLayout import and ensure file is tracked in Git"
git push
```

## Alternative: If File Doesn't Exist in Git

### Step 1: Verify File Exists Locally
```bash
dir src\pages\UserLayout.tsx
```

### Step 2: Add to Git
```bash
git add src/pages/UserLayout.tsx
git commit -m "Add UserLayout component"
git push
```

## Verify on GitHub

After pushing, check on GitHub:
1. Go to: `https://github.com/YOUR_USERNAME/YOUR_REPO/tree/main/src/pages`
2. Verify `UserLayout.tsx` exists (capital U, capital L)
3. If it doesn't exist → file wasn't committed
4. If it has wrong casing → Git case sensitivity issue

## If Still Failing

### Option 1: Delete and Recreate
```bash
# Delete locally
rm src/pages/UserLayout.tsx

# Recreate the file (copy content from your editor)
# Then add to git
git add src/pages/UserLayout.tsx
git commit -m "Re-add UserLayout with correct casing"
git push
```

### Option 2: Use Git mv to Fix Case
```bash
git mv src/pages/userlayout.tsx src/pages/UserLayout.tsx
# OR if file doesn't exist in git:
git mv src/pages/UserLayout.tsx src/pages/UserLayout_temp.tsx
git mv src/pages/UserLayout_temp.tsx src/pages/UserLayout.tsx
git commit -m "Fix UserLayout filename case"
git push
```

## Quick All-in-One Fix

Run this sequence:
```bash
git rm --cached src/pages/UserLayout.tsx 2>nul
git add src/pages/UserLayout.tsx
git add src/App.tsx
git commit -m "Fix UserLayout for Vercel deployment"
git push
```

The `2>nul` suppresses errors if file isn't in cache.


