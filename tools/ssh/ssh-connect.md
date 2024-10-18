```sh
# connect to cpanel
ssh -p 21098 josehcuf@198.54.115.207

# copy from cpanel to local
scp -P 21098 -r "josehcuf@198.54.115.207:/home/josehcuf/tutorial" "D:\tutorial"

# copy from local to cpanel
scp -P 21098 -r "D:\tutorial" "josehcuf@198.54.115.207:/home/josehcuf/tutorial"


# However, if you want to connect automatically without entering the password each time, 
# you can set up SSH key-based authentication instead of using a password.

# 1. Generate an SSH Key (if you don’t have one already)
ssh-keygen -t rsa -b 2048

# 2. Copy the Public Key to the Server
ssh-copy-id -p 21098 josehcuf@198.54.115.207

# 3. Connect without a Password
ssh -p 21098 josehcuf@198.54.115.207
```
