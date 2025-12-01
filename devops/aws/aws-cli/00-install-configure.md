# Create user in IAM

```sh
# IAM > Users > Create user
User name: my_user_tutorial
Password: my_password_tutorial
User-groups: my_group_tutorial

Access-key:
Secret-access-key
Download .csv file
```

# AWS CLI configure

https://aws.amazon.com/es/cli/
https://awscli.amazonaws.com/AWSCLIV2.msi
https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html

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
aws configure list

# Logout: remove files from folder
C:\Users\Frank\.aws\
```

# Copy a local folder to EC2

```sh
# scp – Secure Copy (SSH)
scp -i ec2_my_key_pair.pem -r ./folder ubuntu@3.149.5.21:/home/ubuntu/

# rsync – Faster & resumable
rsync -avz \
  -e "ssh -i ec2_my_key_pair.pem" \
  ./folder/ ubuntu@3.149.5.21:/home/ubuntu/folder/

# tar + ssh (Very fast for large folders)
tar czf - folder | \
ssh -i ec2_my_key_pair.pem ubuntu@3.149.5.21 \
"mkdir -p ~/folder && tar xzf - -C ~/"

```

# S3

```sh
# Upload folder to S3
aws s3 sync ./folder s3://myawsbucket

# Download folder from S3
aws s3 sync s3://myawsbucket ./folder
```
