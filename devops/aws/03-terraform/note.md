```
provider "aws" {
  region     = var.aws_region
  access_key = var.aws_access_key
  secret_key = var.aws_secret_key
}

# EC2
resource "aws_instance" "my_ec2" {
  ami           = "ami-0f5fcdfbd140e4ab7" # Ubuntu 24.04 LTS
  instance_type = "t2.micro"
  key_name      = var.ec2_key_name
  tags = {
    Name = "ec2_my_instance"
  }
}

# Security Group para RDS
resource "aws_security_group" "mysql_sg" {
  name        = "mysql_sg"
  description = "Allow MySQL inbound"
  vpc_id      = data.aws_vpc.default.id

  ingress {
    from_port   = 3306
    to_port     = 3306
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]  # Cambiar por tu IP para más seguridad
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "mysql_sg"
  }
}

# Obtener VPC y subnets default
data "aws_vpc" "default" {
  default = true
}

data "aws_subnet_ids" "default" {
  vpc_id = data.aws_vpc.default.id
}

# Subnet group para RDS
resource "aws_db_subnet_group" "default" {
  name       = "mysql-subnet-group"
  subnet_ids = data.aws_subnet_ids.default.ids

  tags = {
    Name = "mysql-subnet-group"
  }
}

# RDS MySQL Free Tier
resource "aws_db_instance" "mysql" {
  identifier             = "terraform-mysql-db"
  allocated_storage      = 20
  engine                 = "mysql"
  engine_version         = "8.0"
  instance_class         = "db.t3.micro"
  name                   = "testdb"
  username               = "admin"
  password               = var.db_password
  publicly_accessible    = true
  vpc_security_group_ids = [aws_security_group.mysql_sg.id]
  db_subnet_group_name   = aws_db_subnet_group.default.name
  skip_final_snapshot    = true
  tags = {
    Name = "terraform-mysql-db"
  }
}
```
