# Step Function 
https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html
Step Function AWS: is one of Orchestration AWS service in Microservices.

# Testing for Step Function
We expect to run and double check the posible cases to make sure our application work properly with AWS Step Function and State.
Basically, we should consider to cover 2 levels or types of testing:
- Component testing with isolated view, run locally.
We do component testing on the individual Lambda functions. 
- Unit Test: Encapsulate any business logic and unit test them. 
- Integration test: Test the handler functions locally with 
- E2E testing with state machine and real-integrated environment.
We expect that to cover as many of the execution paths as possible using end-to-end tests.

But this is not always possible, as these cases:
- when you are dealing with Wait states and Task timeouts.
- it's difficult to force the execution down the path that you need for your test case.
- Our third-party Dependiencies.

Then, We will use Step Functions Local and its mocks to fill the gaps in your end-to-end tests. With its limitations, it's often not feasible to use Step Functions Local to test your state machine without first deploying all the resources to AWS. But it's still a very useful tool that can help you test those hard-to-reach execution paths with mocks. 

## Step Function and Component Testing:
Follow to [Microservice Testing](./../microservice-testing.md), we follow the low levels of testing to isolate our step-function component to do testing with virtual components and dependiencies.

## Step Function and E2E Automation Testing


# References:
- AWS Step Function: https://medium.com/theburningmonk-com/testing-strategies-for-step-functions-19cd087eae19
- UNIT TEST your Step Functions with the Mocked Service Integrations: https://www.youtube.com/watch?v=P3hEqxKxZe8