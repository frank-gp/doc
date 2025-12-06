output "ec2_public_ip" {
  value = aws_instance.my_ec2.public_ip
}
