```bash

ssh-keygen -t ed25519 -C "fgp555@gmail.com" -f ~/.ssh/id_ed25519_github_personal

ssh-keygen -t ed25519 -C "enyeinnovation@gmail.com" -f ~/.ssh/id_ed25519_github_trabajo

code ~/.ssh/config

```

config
```bash
# Configuración para la cuenta personal de GitHub
Host github-personal
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_github_personal

# Configuración para la cuenta de trabajo de GitHub
Host github-trabajo
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_github_trabajo
```

```bash
ssh-add ~/.ssh/id_ed25519_github_personal
ssh-add ~/.ssh/id_ed25519_github_trabajo
