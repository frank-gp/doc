# AWS Command Line Interface

https://aws.amazon.com/cli/

# Install the AWS SAM CLI

https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html

```sh
docker --version
docker run hello-world

aws --version

sam --version

sam init

sam local start-api

curl http://localhost:3000/hello


```

# Deploy

```sh
aws configure

# Access Key ID
# Secret Access Key
# Región us-east-1

sam build

sam deploy --guided

# HelloWorldFunction has no authentication. Is this okay? [y/N]:y
# Deploy this changeset? [y/N]:y

# Revisar si los recursos realmente fueron creados
aws lambda list-functions --region us-east-1

aws apigateway get-rest-apis --region us-east-1

aws iam list-roles --region us-east-1

```

## AWS Lambda Console

https://console.aws.amazon.com/lambda/

## AWS API Gateway Console

https://console.aws.amazon.com/apigateway/

## AWS CloudFormation Console

https://console.aws.amazon.com/cloudformation

# Delete Resources

```sh
# Delete Con AWS CLI
aws cloudformation delete-stack --stack-name sam-app

# Delete Desde la Consola de AWS
# https://console.aws.amazon.com/cloudformation

# Verificar la eliminación
aws cloudformation describe-stacks --stack-name sam-app

# Especificar la región en el comando
aws cloudformation delete-stack --stack-name sam-app --region us-east-1
```
