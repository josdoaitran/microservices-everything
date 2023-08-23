# Step Function 
https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html
Step Function AWS: is one of Orchestration AWS service in Microservices.

# Testing for Step Function
We expect to run and double check the posible cases to make sure our application work properly with AWS Step Function and State.
Basically, we should consider to cover 2 levels or types of testing:
- Component testing with isolated view, run locally.
- E2E testing with state machine and real-integrated environment.

## Step Function and Component Testing:
Follow to [Microservice Testing](./../microservice-testing.md), we follow the low levels of testing to isolate our step-function component to do testing with virtual components and dependiencies.

## Step Function and E2E Automation Testing


# References:
- AWS Step Function: https://medium.com/theburningmonk-com/testing-strategies-for-step-functions-19cd087eae19
- UNIT TEST your Step Functions with the Mocked Service Integrations: https://www.youtube.com/watch?v=P3hEqxKxZe8