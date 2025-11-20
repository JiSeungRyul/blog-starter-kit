$tasksFile = "specs/001-agent-optimization/tasks.md"
$label = "agent-optimization"

# Check if gh is authenticated
try {
    gh auth status
    if ($LASTEXITCODE -ne 0) {
        Write-Error "GitHub CLI is not authenticated. Please run 'gh auth login' first."
        exit 1
    }
} catch {
    Write-Error "GitHub CLI is not installed or not found."
    exit 1
}

# Create label if it doesn't exist
Write-Host "Ensuring label '$label' exists..."
gh label create "$label" --color "0E8A16" --description "Agent Optimization Feature" 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Label might already exist or could not be created. Continuing..."
}

# Read tasks and create issues
$lines = Get-Content $tasksFile
foreach ($line in $lines) {
    if ($line -match '^- \[ \] (T\d+) (.*)') {
        $taskId = $matches[1]
        $desc = $matches[2]
        
        # Extract Story ID if present (e.g., [US1])
        $storyId = ""
        if ($desc -match '\[(US\d+)\]') {
            $storyId = $matches[1]
        }

        $title = "$taskId: $desc"
        # Clean up title for cleaner issue list if needed, but keeping full desc is fine.
        
        $body = "Task derived from $tasksFile`n`n**Task**: $desc"
        
        Write-Host "Creating issue: $title"
        gh issue create --title "$title" --body "$body" --label "$label"
    }
}

Write-Host "Done creating issues."
