IAM > Users > Create user

```sh


User name: myuser_tutorial
Password: mypassword_tutorial
User-groups: mygroup_tutorial

Access-key:
Secret-access-key
Download .csv file
```

# AWS CLI

https://awscli.amazonaws.com/AWSCLIV2.msi

```sh
aws --version
aws configure

AWS Access Key ID [None]: xxx
AWS Secret Access Key [None]: xxx
Default region name [None]: us-east-2
Default output format [None]: json

# Esto genera un archivo de configuración en:
C:\Users\Frank\.aws\
C:\Users\Frank\.aws\credentials
C:\Users\Frank\.aws\config

# Verificar
aws sts get-caller-identity

# Logout: remove files from folder
C:\Users\Frank\.aws\


```
