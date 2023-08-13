# All essential points about Microservice testing:
There are many benefits when our system is based on and built up in microservice architecture:
- Testing for each microservices.
- Deployment isolated
- Scale and maintainace each components / microservices

# The challenges of Testing in Microservice:
Microservice archtecture is more complex due to more components in a system, then it requires more testing for each layers or or each components.

# Testing Strategy for Microservice Testing:

Based on TDD (Test-Driven Development), we should do testing more ranges and levels: It can include: test classes, methods in isolated views of each microservices and components, and the component view if our microservices works with other components or microservices (we can consider them as dependencies).

# Contract testing in Microservice testing
Tools:
- Pact.io
- 

# Mocks and why we should use Mock ?
- Note: Mock is different to Stuffs.
https://martinfowler.com/articles/mocksArentStubs.html
- In Microservices, probably each microservice has many dependencies (dependency injection). We will take advantaged of many open-source library to create the faking dependiencies earlier and doing testing activities earlier.

# Mocking tools and artifacts:
- Wiremock: https://wiremock.org/ 
- Mockoon: https://mockoon.com/
- Mockito and Java stack: https://site.mockito.org/
- Easy mock and Java stack: https://easymock.org/

# References:
- Martinfowler Microservice Testing: https://martinfowler.com/articles/microservice-testing
- PactIo: https://pact.io/
- Mountain Bank Testing: http://www.mbtest.org/
- Source code - Mountain Bank: https://github.com/bbyars/mountebank-in-action