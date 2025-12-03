<!-- Para acortar el texto del prompt en Git Bash y que muestre solo el directorio actual -->

```sh
# Abre el archivo .bashrc o .bash_profile.
code ~/.bashrc

# Agrega esta línea al final del archivo
PS1='\W\$ '

# Para aplicar los cambios de inmediato, ejecuta:
source ~/.bashrc



```

```sh
# primer ejemplo
PS1='\W\$ '

# segundo ejemplo
PS1='\[\e[0;33m\]\W$(git rev-parse --is-inside-work-tree &>/dev/null && echo " \[\e[0;32m\]$(git branch 2>/dev/null | grep "*" | sed "s/* //") \[\e[0;35m\]$(git rev-list --count HEAD 2>/dev/null)") \[\e[0;36m\]\$\[\e[0m\] '
```
