2024 https://youtu.be/4Yk4EKHxcR8
2025

# Create EC2 Instance

```sh
Name: ec2_my_instance
OS-Images: Ubuntu 22.04
Username: ubuntu
Type: t2.micro
Key-Pair: ec2_my_key_pair
Network-settings: Firewall (security groups)
    Allow SSH traffic from
    Allow HTTPS traffic from the internet
    Allow HTTP traffic from the internet

# Delete
instance
key-pair
security-group

# Connect
chmod 400 "ec2_my_key_pair.pem"
ssh -i "ec2_my_key_pair.pem" ubuntu@ec2-18-227-111-56.us-east-2.compute.amazonaws.com
ssh -i ~/.ssh/ec2_my_key_pair.pem ubuntu@3.17.156.69


```

## Server with Python

```sh
vim index.html
echo "hello world" > index.html
python3 --version
sudo python3 -m http.server 80
curl localhost
curl http://localhost:80
```

## Server with Apache

```sh
sudo apt install apache2 -y

cd /var/www/html

sudo rm index.html

sudo rm -r folder123/

sudo git clone https://github.com/fgp555/hml-todolist.git .

sudo systemctl status apache2
sudo systemctl stop apache2
sudo systemctl restart apache2


```

## Install Amazon CLI

https://aws.amazon.com/cli/

```sh

aws --version

chmod 400 "my-key-pair.pem"
ssh -i "my-key-pair.pem" ubuntu@ec2-0-123-45-67.us-east-2.compute.amazonaws.com

sudo apt update


git clone https://github.com/fgp555/hml-todolist todolist

```
