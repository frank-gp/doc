# Instalar Terraform

https://developer.hashicorp.com/terraform/install#windows

# main.tf para crear una instancia EC2

```js
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
```

```sh
### agregar variables de entorno del sistema
C:\terraform

terraform -v

# crea un archivo llamado main.tf:

# Inicializar Terraform
terraform init
# Ver qué va a crear Terraform
terraform plan
# Crear la instancia EC2
terraform apply
# leerá (terraform.tfstate) y va a eliminar
terraform destroy
# Mostrar los outputs
terraform output
# Ver el estado actual
terraform show

```
