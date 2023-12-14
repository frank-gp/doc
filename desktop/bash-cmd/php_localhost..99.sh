#!/bin/bash

url=localhost:99
start http://$url

php -S $url
