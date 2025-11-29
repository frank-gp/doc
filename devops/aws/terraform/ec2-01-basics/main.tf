provider "aws" {
  region = "us-east-2"
}

resource "aws_instance" "my_ec2" {
  ami           = "ami-0f5fcdfbd140e4ab7" # Ubuntu 24.04 LTS en us-east-2
  instance_type = "t2.micro"
  key_name      = "ec2_my_key_pair" # Debes tener este key pair en AWS
  tags = {
    Name = "ec2_my_instance"
  }
}
