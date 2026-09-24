#!/usr/bin/env bash
# macOS/Linux setup: installs dependencies, creates the GitHub repo and pushes.
# Requires: Git, Node.js 18+, GitHub CLI (gh). Run: bash setup.sh
set -euo pipefail
REPO="ahmed-baqir-portfolio"

for tool in git node npm gh; do
  command -v "$tool" >/dev/null || { echo "$tool is not installed. See README.md > Prerequisites."; exit 1; }
done

echo "Installing dependencies..."
npm install

gh auth status >/dev/null 2>&1 || gh auth login

if [ ! -d .git ]; then
  git init -b main
  git add .
  git commit -m "Initial commit: portfolio site"
fi

echo "Creating GitHub repository '$REPO' and pushing..."
gh repo create "$REPO" --public --source . --remote origin --push

echo "Enabling GitHub Pages (GitHub Actions)..."
gh api -X POST "repos/{owner}/$REPO/pages" -f build_type=workflow >/dev/null 2>&1 || true

echo "Done. Starting local dev server..."
npm run dev
