# Windows setup: installs dependencies, creates the GitHub repo and pushes.
# Requires: Git, Node.js 18+, GitHub CLI (gh). Run in PowerShell from this folder:
#   powershell -ExecutionPolicy Bypass -File .\setup.ps1
$ErrorActionPreference = "Stop"
$repo = "ahmed-baqir-portfolio"

foreach ($tool in "git", "node", "npm", "gh") {
  if (-not (Get-Command $tool -ErrorAction SilentlyContinue)) { Write-Error "$tool is not installed. See README.md > Prerequisites." }
}

Write-Host "Installing dependencies..."
npm install

gh auth status 2>$null
if ($LASTEXITCODE -ne 0) { gh auth login }

if (-not (Test-Path ".git")) {
  git init -b main
  git add .
  git commit -m "Initial commit: portfolio site"
}

Write-Host "Creating GitHub repository '$repo' and pushing..."
gh repo create $repo --public --source . --remote origin --push

Write-Host "Enabling GitHub Pages (GitHub Actions)..."
gh api -X POST "repos/{owner}/$repo/pages" -f build_type=workflow 2>$null

Write-Host "Done. Starting local dev server..."
npm run dev
