## Linux Comands

https://fgp.one/linux

## Install Amazon CLI

https://aws.amazon.com/cli/

```sh

aws --version

chmod 400 "my-key-pair.pem"
ssh -i "my-key-pair.pem" ubuntu@ec2-0-123-45-67.us-east-2.compute.amazonaws.com

sudo apt update


git clone https://github.com/fgp555/hml-todolist todolist

```

## Server with Python

```sh
python3 --version

sudo python3 -m http.server 80
sudo lsof -i :80
sudo kill -9 12345
```

## Server with Apache

```sh
sudo apt install apache2 -y

cd /var/www/html

sudo rm index.html

sudo git clone https://github.com/fgp555/hml-todolist.git .

sudo systemctl status apache2
sudo systemctl stop apache2
sudo systemctl restart apache2


```