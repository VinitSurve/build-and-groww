$files = Get-ChildItem -Path "src" -Filter "*.tsx" -Recurse

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    # Fix src="filename" to src="/filename"
    $content = $content -replace 'src="([A-Za-z0-9%_ .-]+\.(png|jpg|jpeg|webp|mp4|JPG|PNG|svg))"', 'src="/$1"'
    # Fix image: "filename" to image: "/filename"
    $content = $content -replace 'image: "([A-Za-z0-9%_ .-]+\.(png|jpg|jpeg|webp|mp4|JPG|PNG|svg))"', 'image: "/$1"'
    # Fix { src: "filename" to { src: "/filename"
    $content = $content -replace '{ src: "([A-Za-z0-9%_ .-]+\.(png|jpg|jpeg|webp|mp4|JPG|PNG|svg))"', '{ src: "/$1"'
    # Fix url('filename') to url('/filename')
    $content = $content -replace 'url\(''([A-Za-z0-9%_ .-]+\.(png|jpg|jpeg|webp|mp4|JPG|PNG|svg))''\)', 'url(''/$1'')'
    # Fix icon: "filename" to icon: "/filename"
    $content = $content -replace 'icon: "([A-Za-z0-9%_ .-]+\.(png|jpg|jpeg|webp|mp4|JPG|PNG|svg))"', 'icon: "/$1"'
    $content = $content -replace 'shortcut: "([A-Za-z0-9%_ .-]+\.(png|jpg|jpeg|webp|mp4|JPG|PNG|svg))"', 'shortcut: "/$1"'
    $content = $content -replace 'apple: "([A-Za-z0-9%_ .-]+\.(png|jpg|jpeg|webp|mp4|JPG|PNG|svg))"', 'apple: "/$1"'
    
    Set-Content -Path $file.FullName -Value $content -NoNewline
    Write-Host "Updated: $($file.Name)"
}

Write-Host "`n✅ All files updated! All image paths now use local public folder."
