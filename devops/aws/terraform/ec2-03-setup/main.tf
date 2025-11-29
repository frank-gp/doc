provider "aws" {
  region     = var.aws_region
  access_key = var.aws_access_key
  secret_key = var.aws_secret_key
}

variable "aws_access_key" {}
variable "aws_secret_key" {}
variable "aws_region" {
  default = "us-east-2"
}
variable "ec2_key_name" {
  default = "ec2_my_key_pair"
}

resource "aws_security_group" "ec2_sg" {
  name        = "ec2_my_sg"
  description = "Allow SSH, HTTP, and HTTPS"

  # SSH
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # HTTP
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # HTTPS
  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Egress
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}


resource "aws_instance" "my_ec2" {
  ami                    = "ami-0f5fcdfbd140e4ab7" # Ubuntu 24.04
  instance_type          = "t2.micro"
  key_name               = var.ec2_key_name
  vpc_security_group_ids = [aws_security_group.ec2_sg.id]
  tags = {
    Name = "ec2_my_instance"
  }
  provisioner "remote-exec" {
    # script = "${path.module}/setup.sh"
    connection {
      type        = "ssh"
      user        = "ubuntu"
      private_key = file("~/.ssh/ec2_my_key_pair.pem")
      host        = self.public_ip
    }

    inline = [
      # Actualizar e instalar dependencias básicas
      "sudo apt update -y",
      "sudo apt upgrade -y",
      "sudo apt install -y nginx curl gnupg build-essential vim",

      # Instalar Node.js 20
      "curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -",
      "sudo apt install -y nodejs",

      # Crear carpeta de la app y el archivo JS
      "mkdir -p /home/ubuntu/app",
      "cat > /home/ubuntu/app/aws_rds.js << 'EOL'\nconst http = require('http');\nconst PORT = 3000;\nconst server = http.createServer((req, res) => {\n  if (req.url === '/users') {\n    res.writeHead(200, {'Content-Type': 'application/json'});\n    res.end(JSON.stringify([]));\n  } else {\n    res.writeHead(404);\n    res.end('Not Found');\n  }\n});\nserver.listen(PORT, () => console.log('Server running on port', PORT));\nEOL",

      # Instalar PM2 y configurar para arrancar al inicio
      "sudo npm install -g pm2",
      "pm2 start /home/ubuntu/app/aws_rds.js --name 'node_app'",
      "sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u ubuntu --hp /home/ubuntu",
      "pm2 save",

      # Configurar Nginx como reverse proxy
      "sudo bash -c 'cat > /etc/nginx/sites-available/aws_rds << \"NGX\"\nserver {\n  listen 80;\n  server_name _;\n\n  location / {\n    proxy_pass http://127.0.0.1:3000;\n    proxy_http_version 1.1;\n    proxy_set_header Upgrade $http_upgrade;\n    proxy_set_header Connection \"upgrade\";\n    proxy_set_header Host $host;\n    proxy_cache_bypass $http_upgrade;\n  }\n}\nNGX'",

      "sudo ln -s /etc/nginx/sites-available/aws_rds /etc/nginx/sites-enabled/",
      "sudo nginx -t",
      "sudo systemctl restart nginx"
    ]
  }
}

output "ec2_public_ip" {
  value = aws_instance.my_ec2.public_ip
}

output "ec2_public_dns" {
  value = aws_instance.my_ec2.public_dns
}
