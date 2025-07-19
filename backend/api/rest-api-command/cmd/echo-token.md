```sh
# en git bash
echo $TOKEN

# en powershell
echo $env:TOKEN
Write-Output $env:TOKEN

# en cmd
echo %TOKEN%


# ========== ==========
# En Git Bash
export TOKEN="valor_secreto"
echo $TOKEN

# En PowerShell
$env:TOKEN="valor_secreto"
echo $env:TOKEN
Write-Output $env:TOKEN

# En CMD
set TOKEN=valor_secreto
setx TOKEN /M "valor_secreto"
echo %TOKEN%

# /M, modificará a nivel de sistema
