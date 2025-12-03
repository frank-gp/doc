# Create the EC2 instance

```sh
aws ec2 run-instances \
  --image-id ami-0f5fcdfbd140e4ab7 \
  --instance-type t2.micro \
  --key-name ec2_my_key_pair \
  --count 1 \
  --tag-specifications 'ResourceType=instance,Tags=[{Key=Name,Value=ec2_my_instance}]'
```

# Confirm that the instance was created

```sh
aws ec2 describe-instances \
  --filters "Name=tag:Name,Values=ec2_my_instance" \
  --query "Reservations[].Instances[].InstanceId" \
  --output table
```

# Get the public IP address

```sh
aws ec2 describe-instances \
  --filters "Name=tag:Name,Values=ec2_my_instance" \
  --query "Reservations[].Instances[].PublicIpAddress" \
  --output table
```

# Connect via SSH

```sh
ssh -i ec2_my_key_pair.pem ubuntu@3.149.5.21
```

# Get the Instance ID by name

```sh
INSTANCE_ID=$(aws ec2 describe-instances \
  --filters "Name=tag:Name,Values=ec2_my_instance" \
  --query "Reservations[].Instances[].InstanceId" \
  --output text)

echo $INSTANCE_ID
```

# Terminate the instance

```sh
aws ec2 terminate-instances --instance-ids $INSTANCE_ID
```

# Confirm that the instance was terminated

```sh
aws ec2 describe-instances \
  --instance-ids $INSTANCE_ID \
  --query "Reservations[].Instances[].State.Name" \
  --output table
```

# All in one

```sh
INSTANCE_ID=$(aws ec2 describe-instances \
  --filters "Name=tag:Name,Values=ec2_my_instance" \
  --query "Reservations[].Instances[].InstanceId" \
  --output text)

aws ec2 terminate-instances --instance-ids $INSTANCE_ID
```

# 🔥 EXTRA PRO: eliminar TODAS las instancias con ese TAG

```sh
aws ec2 describe-instances \
  --filters "Name=tag:Name,Values=ec2_my_instance" \
  --query "Reservations[].Instances[].InstanceId" \
  --output text | \
xargs aws ec2 terminate-instances --instance-ids
```
