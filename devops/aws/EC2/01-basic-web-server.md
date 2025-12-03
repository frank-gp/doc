2024 https://youtu.be/4Yk4EKHxcR8
2025 https://youtu.be/CHTU5WFo1Dg

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
ssh -i ~/.ssh/ec2_my_key_pair.pem ubuntu@18.222.21.11
```

## Test with Server with Python

```sh
python3 --version
echo "hello world" > index.html
# vim index.html
sudo python3 -m http.server 80
curl localhost
curl http://localhost:80
```

## Node JS

```sh
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs
node -v
npm -v
```

# test.js

```js
const http = require("http");

const server = http.createServer((req, res) => {
  const log = `${new Date().toISOString()} ${req.method} ${req.url}`;
  console.log(log);
  res.end("Hello world\n" + log);
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
```

## Nginx en tu EC2

```sh
sudo apt install -y nginx
sudo systemctl status nginx
sudo systemctl stop nginx
sudo systemctl restart nginx

sudo vim /etc/nginx/sites-available/aws_rds
```

```js
server {
    listen 80;

    server_name 18.222.21.11;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

# Activar la configuración

```sh
sudo ln -s /etc/nginx/sites-available/aws_rds /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
sudo systemctl status nginx
```

## EC2 usando PM2

```sh
sudo npm install -g pm2
pm2 -v
pm2 start aws_rds.js --name "main"
pm2 status

# Hacer que la API se inicie automáticamente al reiniciar EC2
pm2 startup
pm2 save
pm2 logs main
pm2 stop main
pm2 restart main
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
