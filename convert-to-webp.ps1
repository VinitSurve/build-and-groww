$files = Get-ChildItem -Path "src" -Filter "*.tsx" -Recurse

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    # Replace .jpg, .jpeg, .png, .JPG, .PNG, .JPEG extensions with .webp
    $content = $content -replace '\.jpg"', '.webp"'
    $content = $content -replace '\.jpeg"', '.webp"'
    $content = $content -replace '\.png"', '.webp"'
    $content = $content -replace '\.JPG"', '.webp"'
    $content = $content -replace '\.PNG"', '.webp"'
    $content = $content -replace '\.JPEG"', '.webp"'
    
    # Also handle single quotes
    $content = $content -replace "\.jpg'", ".webp'"
    $content = $content -replace "\.jpeg'", ".webp'"
    $content = $content -replace "\.png'", ".webp'"
    $content = $content -replace "\.JPG'", ".webp'"
    $content = $content -replace "\.PNG'", ".webp'"
    $content = $content -replace "\.JPEG'", ".webp'"
    
    Set-Content -Path $file.FullName -Value $content -NoNewline
    Write-Host "Updated: $($file.Name)"
}

Write-Host "`n✅ All image extensions converted to .webp!"
