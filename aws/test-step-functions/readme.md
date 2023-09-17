# Step Function 
https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html
Step Function AWS: is one of Orchestration AWS service in Microservices.

Basic terms about StepFunctio:
- State Machine
- State
- Transitions
Amazon State Language (ASL)


# Testing for Step Function
We expect to run and double check the posible cases to make sure our application work properly with AWS Step Function and State.
Basically, we should consider to cover 2 levels or types of testing:
- Component testing with isolated view, run locally.
- E2E testing with state machine and real-integrated environment.

## Step Function in Local mode and Mocked Service Integration
https://docs.aws.amazon.com/step-functions/latest/dg/sfn-local.html

https://docs.aws.amazon.com/step-functions/latest/dg/sfn-local-test-sm-exec.html
https://github.com/codetheweb/serverless-step-functions-local

## Step Function and Component Testing:
Follow to [Microservice Testing](./../microservice-testing.md), we follow the low levels of testing to isolate our step-function component to do testing with virtual components and dependiencies.

## Step Function and E2E Automation Testing


# References:
- AWS Step Function: https://medium.com/theburningmonk-com/testing-strategies-for-step-functions-19cd087eae19
- Full tutorial - Step Function: https://docs.aws.amazon.com/step-functions/latest/dg/tutorials.html
- UNIT TEST your Step Functions with the Mocked Service Integrations: https://www.youtube.com/watch?v=P3hEqxKxZe8
- https://github.com/serverless-operations/serverless-step-functions
- https://github.com/codetheweb/serverless-step-functions-local
- Basic terms StepFunction: https://reflectoring.io/getting-started-with-aws-step-functions-tutorial/
