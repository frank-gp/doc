#!/bin/bash

aws ec2 run-instances \
  --region us-east-2 \
  --cli-input-json file://config.json \
  --tag-specifications file://tags.json
