# Serverless ?
- AWS Serverless: 
- Microsoft Serverless: 

# Testing challenges for Serverless Architecture:
We can do testing types:
- Unit test
- Integration test
- Component test
- E2E Test

## E2E testing as End User, we can be:

### Manage resources, service in testing:  
Make sure all components (Including external service ready)
- We need to deploy (remote to deploy or using Pipeline to deploy), control the resource, how make them be ready before starting test, Run and Debug in Remote action
- Depend on the external services (Controlled by Third-party). Consider to test the logic when the service works with other services or external service.

### Testing the architecture of service works together as Distributed Architecture

In testing, we should have the view of Distributed services architecture. 
The couple of components / services of serverless works together.

# Tools for Serverless Testing:
- Integration Test with Moto: https://github.com/getmoto/moto
- AWS SAM: https://aws.amazon.com/serverless/sam/


# References:
- Testing AWS Serverless Application: https://aws.amazon.com/blogs/compute/getting-started-with-testing-serverless-applications/
- Serverless Test and Debug: https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-test-and-debug.html
- https://aws.amazon.com/blogs/compute/getting-started-with-testing-serverless-applications/
- AWS SAM: https://aws.amazon.com/serverless/sam/
- AWS SAM Github: https://github.com/josdoaitran/microservices-everything/tree/main/aws/aws-sam
- Integration Test with Moto: https://github.com/getmoto/moto
- Serverless-test-samples: https://github.com/aws-samples/serverless-test-samples