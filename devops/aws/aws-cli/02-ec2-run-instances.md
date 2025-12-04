```sh
# Create a default VPC
aws ec2 create-default-vpc

# Create the EC2 instance
aws ec2 run-instances \
 --image-id ami-0f5fcdfbd140e4ab7 \
--instance-type t2.micro \
--key-name ec2_my_key_pair \
--count 1 \
--tag-specifications 'ResourceType=instance,Tags=[{Key=Name,Value=ec2_my_instance}]'

# Confirm that the instance was created
aws ec2 describe-instances \
 --filters "Name=tag:Name,Values=ec2_my_instance" \
--query "Reservations[].Instances[].InstanceId" \
--output table

# Get the public IP address of the instance
aws ec2 describe-instances \
 --filters "Name=tag:Name,Values=ec2_my_instance" \
 --query "Reservations[].Instances[].PublicIpAddress" \
 --output table

# Get the Security Group associated with the instance using its public IP
aws ec2 describe-instances \
 --filters "Name=ip-address,Values=18.189.171.213" \
 --query "Reservations[].Instances[].SecurityGroups[].GroupId" \
 --output text

 # 🔓 Get all the rules for the Security Group
 aws ec2 describe-security-groups \
 --group-ids sg-0433b80be36a709ed \
 --query "SecurityGroups[].IpPermissions" \
 --output table

 # 🔓 Add SSH (port 22)
aws ec2 authorize-security-group-ingress \
 --group-id sg-0433b80be36a709ed \
 --protocol tcp \
 --port 22 \
 --cidr 38.250.157.33/32

# 🔓 Add an HTTP rule (port 80) to the Security Group
aws ec2 authorize-security-group-ingress \
 --group-id sg-0433b80be36a709ed \
 --protocol tcp \
 --port 80 \
 --cidr 0.0.0.0/0

# 🔓 Add an HTTPS rule (port 443)
aws ec2 authorize-security-group-ingress \
 --group-id sg-0433b80be36a709ed \
 --protocol tcp \
 --port 443 \
 --cidr 0.0.0.0/0

# 🔑 Connect to the instance via SSH
ssh -i ~/.ssh/ec2_my_key_pair.pem ubuntu@18.189.171.213

# Get the Instance ID by its Name tag
INSTANCE_ID=$(aws ec2 describe-instances \
 --filters "Name=tag:Name,Values=ec2_my_instance" \
 --query "Reservations[].Instances[].InstanceId" \
 --output text)
echo $INSTANCE_ID
# Terminate the instance
aws ec2 terminate-instances --instance-ids $INSTANCE_ID

# Confirm that the instance was terminated
aws ec2 describe-instances \
 --instance-ids $INSTANCE_ID \
 --query "Reservations[].Instances[].State.Name" \
 --output table
```
