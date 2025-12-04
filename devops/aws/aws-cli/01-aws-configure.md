https://aws.amazon.com/es/cli/
https://docs.aws.amazon.com/cli/latest/userguide/getting-started-version.html

# Create user in IAM

```sh
# Create user group
User-group-name: my_user_group
# IAM > Users > Create user
User-name: my_user_iam_tutorial
# Create key pair
Name: ec2_my_key_pair
```

# AWS CLI configure

```sh
# https://awscli.amazonaws.com/AWSCLIV2.msi
aws --version
aws configure

AWS Access Key ID [None]: xxx
AWS Secret Access Key [None]: xxx+xxx
Default region name [None]: us-east-2
Default output format [None]: json

# Verificar
aws sts get-caller-identity
aws configure list

# Logout: remove files from folder
C:\Users\Frank\.aws\
```

# Copy a local folder to EC2

```sh
# scp – Secure Copy (Windows)
scp -i ~/.ssh/ec2_my_key_pair.pem -r folder ubuntu@18.222.21.11:/home/ubuntu/

# rsync – Faster & resumable (better | Ubuntu)
rsync -avz \
  -e "ssh -i ec2_my_key_pair.pem" \
  ./folder/ ubuntu@18.222.21.11:/home/ubuntu/folder/

# tar + ssh (Very fast for large folders) (Windows)
tar czf - folder | \
ssh -i ~/.ssh/ec2_my_key_pair.pem ubuntu@18.222.21.11 \
"mkdir -p ~/folder && tar xzf - -C ~/"
```

# S3

```sh
# Upload folder to S3
aws s3 sync ./folder s3://myawsbucket

# Download folder from S3
aws s3 sync s3://myawsbucket ./folder
```
