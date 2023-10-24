# AWS SAM 
Serverless Application Model. Open-source framework for building serverless application. It provides:
- Shorthand syntax to express function, APIs, databases, and event source mappings.
- AWS SAM as code base in YAML file. (emplate.yaml)
- [AWS SAM](https://github.com/aws/serverless-application-model) 
- [AWS SAM Cli](https://github.com/aws/aws-sam-cli)

AWS SAM Github: https://github.com/aws/serverless-application-model

The [AWS Serverless Application Model](https://aws.amazon.com/serverless/sam/) (AWS SAM) transform is a [AWS CloudFormation macro](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html) that transforms SAM templates into [CloudFormation templates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html).

Benefits of using the SAM transform include:

- Built-in best practices and sane defaults.
- Local testing and debugging with the AWS SAM CLI.
- Extension of the CloudFormation template syntax.

## AWS SAM Cli
The AWS Serverless Application Model (SAM) CLI is an open-source CLI tool that helps you develop serverless applications containing Lambda functions, Step Functions, API Gateway, EventBridge, SQS, SNS and more.

- Setup AWS SAM Cli: https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html
- Example commands:
```
# To verify whether sam is installed or not
$ which sam
/usr/local/bin/sam
$ sam --version
SAM CLI, version 1.94.0
```

# References:
- https://github.com/aws-samples/aws-serverless-ecommerce-platform
- https://github.com/beabetterdevv/lambda_local/blob/master/apigateway/apigateway_event.json