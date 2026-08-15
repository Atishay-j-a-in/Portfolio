$path = 'app/ui/page.tsx'
$text = Get-Content $path -Raw

$replacements = @{
    '{label</>' = '{label</p>'
    '{children</>' = '{children</div>'
}

foreach ($key in $replacements.Keys) {
    $text = $text.Replace($key, $replacements[$key])
}

[System.IO.File]::WriteAllText($path, $text, [System.Text.UTF8Encoding]::new($false))
Write-Host 'Done'
