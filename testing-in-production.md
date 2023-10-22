# Main context about Testing in Production term

## A/B Testing
- AB testing ISTQB: https://glossary.istqb.org/en_US/term/ab-testing
- AB testing in Oracle: https://www.oracle.com/vn/cx/marketing/what-is-ab-testing/

## Canary Deployment
When we deploy new version, in ordeer to reduce the downtime and descrease the bug in deployment if the new stack get troubles.
- We will launch a new stack, then we route the percentage of traffic from old stack to new stack, how it is incremential. 
- Canary Deployment can also monitor the health of the new version. If there is an issue, your canary deployment can automatically switch the traffic back to the old version.
- Thereby decreasing the impact of the bug(s) introduced in the new application version on the end customers.

## Chaos Engineer
https://aws.amazon.com/solutions/resilience/chaos-engineering/

# References:
- https://www.lambdatest.com/blog/testing-in-production-a-detailed-guide/
- https://copyconstruct.medium.com/testing-in-production-the-safe-way-18ca102d0ef1
- Canary Deployment AWS ECS: https://octopus.com/blog/ecs-canary-deployments
- Canary Deployment AWS Service example: https://aws.amazon.com/blogs/containers/create-a-pipeline-with-canary-deployments-for-amazon-ecs-using-aws-app-mesh/