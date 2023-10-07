# AWS Lambda <img src="https://logowik.com/content/uploads/images/aws-lambda2296.jpg" width="38">
Collect the important things about AWS Lambda

## What is AWS Lambda:
https://aws.amazon.com/lambda/

- One of serverless services of AWS. (SAM - Serverless Application Model)
- Focus on Code and action methods only, instead of managing and maintaining the server.
- AWS manage the functions in their computers.
- Your defined code as methods, and they can be triggered by: Events (S3 object updated, new records in Dynamodb, Event message, ...) or Request/ Response (be received from AWS Gateway Integration)
- AWS Scaleable in our demands.
- Pay per what we uses. => Pricing: https://aws.amazon.com/lambda/pricing/
- Support (EDA) Event Driven Architecture. 
- Able to work with another AWS services (Dynamodb, API Gateway, S3, ...)
- We can organize the code into Lambda function and trigger them by event or Requests from AWS API Gateway.
- Each lambda function will be run in it's own containers. (We can configure the specifications (Allocated by specific value about RAM/CPU) of each containers for our lambda, it will be calculate the cost by these configurations)

## Supported Languages:
- Nodejs
- Python
- Java
- C#
- Ruby

## Handle the event
- Document Lambda with Python: https://aws-lambda-for-python-developers.readthedocs.io/en/latest/home/
- Example to handle event - Python:
```
    def handle_event(event, context):
        print(event)
        return {
        'statusCode': 200,
        'body': json.dumps(event)
    }
```

## Lambda Scenario:
Example sceanrios to use Lambda, we can trigger events:
- File change in AWS S3 Bucket.
- Update records in AWS Dynamodb tables
- Push Notification message
- Email sending event message



# References:
- https://aws.amazon.com/blogs/compute/developing-portable-aws-lambda-functions/
- https://www.youtube.com/watch?v=D5HsgNtqStk
