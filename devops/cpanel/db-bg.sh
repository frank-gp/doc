#!/bin/bash
# Cierra túneles antiguos en 5522
pids=$(ps -ef | grep "ssh -f -N -L 5522:" | awk '{print $2}')
for pid in $pids; do kill -9 $pid; done

# Levanta túnel en segundo plano
ssh -f -N -L 5522:127.0.0.1:3306 etramztr@server226.web-hosting.com -p 21098
