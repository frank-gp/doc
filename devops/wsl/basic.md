```sh
# Basic DNF Commands for Amazon Linux 2023

# 1. Update repositories and installed packages
sudo dnf update

# 2. Install a package
sudo dnf install package-name
# Example:
sudo dnf install vim

# 3. Search for packages
dnf search keyword
# Example:
dnf search python

# 4. Get package information
dnf info package-name
# Example:
dnf info vim

# 5. Remove (uninstall) a package
sudo dnf remove package-name

# 6. Clean dnf cache
sudo dnf clean all

# 7. List installed packages
dnf list installed

# Extra: Using yum as alias for dnf
sudo yum install package-name
sudo yum update
sudo yum remove package-name
```
# Intermediate 
```sh


