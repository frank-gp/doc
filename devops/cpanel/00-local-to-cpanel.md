```sh
# connect to cpanel
ssh user555@185.27.133.19
ssh -p 21098 etramztr@198.54.116.49
ssh -o ConnectTimeout=30 -p 21098 fgpone@198.54.116.49

# copy from cpanel to local
scp -P 21098 -r "user123@198.50.115.200:/home/user123/tutorial" "D:\tutorial"

# copy from local to cpanel
scp -P 21098 -r "D:\tutorial" "user123@198.50.115.200:/home/user123/tutorial"


# However, if you want to connect automatically without entering the password each time, 
# you can set up SSH key-based authentication instead of using a password.

# 1. Start the SSH agent
eval $(ssh-agent -s) 

# OR

# 1. Generate an SSH Key (if you don’t have one already)
ssh-keygen -t rsa -b 2048

# 2. Copy the Public Key to the Server
ssh-copy-id -p 21098 user123@198.50.115.200

# 3. Connect without a Password
ssh -p 21098 user123@198.50.115.200
```
