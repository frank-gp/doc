```bash
# Display all environment variables in Windows
set

# Set PORT variable for the current session
set PORT=3000

# Set PORT variable persistently for the current user
setx PORT 3000

# Set PORT variable globally for all users (requires administrator privileges)
setx PORT 3000 /M

# Echo the value of PORT variable
echo %PORT%

# Path manipulation: Modify the PATH variable.
setx PATH "%PATH%;C:\NewFolder" /M

mongosh %MONGO_URI%

```


# package.json

```json
{
  "name": "env-windows",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app.js",
    "devcmd": "env.cmd && node --watch app.js",
    "dev": "node --watch --env-file=.env app.js",
    "push": "git add . && git commit --amend --no-edit && git push --force"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "dotenv": "^16.3.1"
  }
}
```

# PowerShell

```powershell

# Display all environment variables
Get-ChildItem Env:
# OR
gci env:

# to set an environment variable
$env:NEW_PORT = 3455

# how you can delete the NEW_PORT environment variable
Remove-Item -Path Env:NEW_PORT

# To remove an environment variable from the system (making it a permanent change)
[System.Environment]::SetEnvironmentVariable("NEW_PORT", $null, [System.EnvironmentVariableTarget]::Machine)
[System.Environment]::SetEnvironmentVariable("xport", $null, [System.EnvironmentVariableTarget]::Machine)

```
