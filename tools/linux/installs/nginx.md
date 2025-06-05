```sh
# Advanced Package Tool
sudo apt update
sudo apt install nginx -y
nginx -v

sudo service nginx start
sudo service nginx enable
sudo service nginx status


sudo service nginx stop

#  hacer que Nginx arranque automáticamente cuando abres WSL
vim ~/.bashrc
# Al final del archivo, agrega esta línea para iniciar Nginx al abrir WSL
sudo service nginx start

```

Test

```md
curl http://localhost
```
