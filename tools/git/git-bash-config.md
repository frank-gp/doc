

<!-- Para acortar el texto del prompt en Git Bash y que muestre solo el directorio actual -->

```sh
# Abre el archivo .bashrc o .bash_profile.
nano ~/.bashrc

# Agrega esta línea al final del archivo
PS1='\W\$ '

# Para aplicar los cambios de inmediato, ejecuta:
source ~/.bashrc
