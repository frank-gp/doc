https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicRead",
      "Effect": "Allow",
      "Principal": "*",
      "Action": ["s3:GetObject", "s3:GetObjectVersion"],
      "Resource": "arn:aws:s3:::fgp555/*"
    }
  ]
}
```
