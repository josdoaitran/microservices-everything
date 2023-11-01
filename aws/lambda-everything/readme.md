# AWS Lambda <img src="https://logowik.com/content/uploads/images/aws-lambda2296.jpg" width="38">
Collect the important things about AWS Lambda

## What is AWS Lambda:
https://aws.amazon.com/lambda/

- One of serverless services of AWS. (SAM - Serverless Application Model)
- Focus on Code and action methods only, instead of managing and maintaining the server.
- AWS manage the functions in their computers.
- Your defined code as methods, and they can be triggered by: Events (S3 object updated, new records in Dynamodb, Event message, ...) or Request/ Response (be received from AWS Gateway Integration)
- AWS Scalable in our demands.
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


## Lambda Limitation:
https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html
**Highlight:**
- Function timeout: 15 mins.
- Function memory allocation: 128 MB to 10,240 MB, in 1-MB increments.
Note: Lambda allocates CPU power in proportion to the amount of memory configured. You can increase or decrease the memory and CPU power allocated to your function using the Memory (MB) setting. At 1,769 MB, a function has the equivalent of one vCPU.
- Concurrent executions: 1000
- Lambda API requests: 100 requests per second.


## Lambda Scenario:
Example scenarios to use Lambda, we can trigger events:
- File change in AWS S3 Bucket.
- Update records in AWS Dynamodb tables
- Push Notification message
- Email sending event message


## Lambda local for testing:
## Prerequisite: 
- Install SAM local, we can refer to [here](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html)
- Install Docker
## Example Lambda Locally Testing:

Prefer to [here](../example-projects/lambda-api-gateway-test-local-nodejs/) to have the example lambda local.

- Run to invoke test locally:
```
sam local invoke -e ./lambda/lambda_event.json LambdaDemoFunction  
```
Note:
To activate Python Virtual Environment, we need to run these commands:
```
python3 -m pip install --user virtualenv
python3 -m venv env
source env/bin/activate
python3 -m pip install -r requirements.txt
```
Refer to: https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/


# References:
- https://aws.amazon.com/blogs/compute/developing-portable-aws-lambda-functions/
- https://aws.amazon.com/blogs/compute/getting-started-with-testing-serverless-applications/ 
- https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-test-and-debug.html
- Document shared by AWS: https://pages.awscloud.com/rs/112-TZM-766/images/APMWQ3D4S4%20Solving%20testing%20challenges%20for%20serverless%20on%20AWS.pdf
- https://lifesciences-resources.awscloud.com/vidyard-all-players/apmwq3d4s4-solving-testing-challenges-for-serverless-on-aws-2
- AWS Moto: https://github.com/getmoto/moto
- https://www.youtube.com/watch?v=D5HsgNtqStk
- https://www.youtube.com/watch?v=6hQ5pJ5xqkU
