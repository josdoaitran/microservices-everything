# All essential points about Microservice testing:
There are many benefits when our system is based on and built up in microservice architecture:
- Testing for each microservices.
- Deployment isolated
- Scale and maintenance each components / microservices

# The challenges of Testing in Microservice:
Microservice architecture is more complex due to more components in a system, then it requires more testing for each layers or or each components.

Microservice requires QA and Development team change the mindset and testing strategy from Traditional Strategy to Modern Testing Strategy.

## Traditional QA Testing Approach:
- QA will perform testing and coordinated End-to-End testing as Quality Gate before releasing the new version or deploying to production.

- In some cases, Testing activities will only start when the build is ready on testing environment. QA don't consider too much low layers and testing levels of applications.

- All Testing Activities depends on System Deployment status if System is working on Monolithic. It's too hard to perform testing earlier.

![Alt text](./images/Traditional-testing.png)

## The Advantages of Microservice about Testing, and the challenges for end-to-end testing:
### The Advantages of Microservice Architecture:
+ Microservices enables us to do isolated testing for each testing components.
+ Then we can cover lower levels of testing.
+ Therefore, we can do testing earlier and detect the issues sooner.
### Besides that, Microservice also brings more challenges into End-to-End testing:
(Refer to chapter 1, 1.2 in Testing Mountain Bank)
+ Microservice allows us multi-team works in multi-components and microservices, however we need to assure the entire application will work correctly by our end-to-end testing. After all components and microservices integrated together in testing environment.
+ Therefore, the efforts of end-to-end testing will become higher at higher levels of testing, like end-to-end testing. It looks like the highway with multiple lances for cars, however we are limited at the end phase to be bootle-net and release congestion.

*Suggestions*: We decouple releases, so we can deploy the isolated service independently, and then Independent Testing for each components will be covered easier and be monitored easier. The drawback of this way is that requiring the system architecture should be designed to support isolated deployed and be testable as well. 

- The biggest challenges: *Our testing will be dependent on many dependencies, especially if our system works with our third-party side.*
What we depends on third-party dependencies:
+ Deployment status: You wont' be able to do End-to-End testing once our partners/third-party sides are ready.
+ Integration status: The testing environment from the third-party be ready and available.
+ Data testing: In some actual scenario about business rules, we have to cover testing scenarios, we need to have the proper testing data, and they are controlled by our third-party. When we do end-to-end testing, we wil have supports from third-party to have proper testing data in correct expected scenarios in business rules.

- The cost of test environments is not Cheap, then The testing environments are shared among development-team.

![Challenges](./images/challenges-microservice-e2e-testing.png)

## Challenging to trigger the e2e testing and debug issues in e2e testing:
E2E testing to verify all components or microservices in our application will work properly. It required all components are already deployed and integrated (Fully-Integrated system)

### Challenges of E2E Testing:
- All components should be ready before test.
- More dependencies: If an external service is managed by a third party, it may not be possible to write end-to-end tests in a repeatable and side effect free manner. Similarly, some services may suffer from reliability problems that cause end-to-end tests to fail for reasons outside of the team's control.
- Cost of E2E testing is high.

E2E testing and testing in production has the same properties like that:
+ We need to control our testing environment before we start testing.
+ We have to spend our efforts to prepare the preconditions of each our test scenario.
    - monitoring and observability of our software architectures.
    - debugging in failed case.
=> once the issue occurs, we have to trace and debug the root cause of issues in non-prod environment with e2e testing. Especially, it can be harder if the issue occurs in Production, or we trying to execute the test scenario in live prod environment.

Suggested Actions:
- Write structured logs , meaningful log [Using JSON]
- Setup alert, notification to aware the issues as soon as possible.

# Testing Strategy for Microservice Testing:
After understanding of the difficulties and challenges about testing. We need to classify our testing in microservices into some testing levels as below:

+ Unit test
+ Integration Test
+ Component Testing
+ End to End Test
+ UI testing

- Test Pyramid: https://martinfowler.com/articles/practical-test-pyramid.html
- Testing Google at Scale: https://abseil.io/resources/swe-book/html/ch11.html

![TestPyramid](./images/test-pyramid.png)

Based on TDD (Test-Driven Development), we should do testing more ranges and levels: It can include: test classes, methods in isolated views of each microservices and components, and the component view if our microservices works with other components or microservices (we can consider them as dependencies).


## Component Testing for each microservice
Component test: We do testing for a portion of the entire microservices architecture, component testing checks the end-to-end functionality of a chosen microservice (which can be made up of a few classes) by isolating the service within the system, replacing its dependencies with test doubles and/or mock services.Component test helps us to Acceptance Test for a service.

After understanding of the difficulties and challenges to do E2E testing, we tend to focus on performing the testing with lower layers, especially Component Testing.
In below image, we visualize the example of component view of several microservices with 2 famous communications types: Async and Sync.

![Component-View](./images/component-view.png)

In order to perform Component Testing for each Microservice as System-Under-Test, we apply Mocking library to replace the our microservice's dependencies. We can completely control our testing-data with mocking library (Virtual Supports), instead of depending on our third-party service.

![Component-Testing](./images/component-testing.png)
*Component Testing Steps:*

+ List out the dependencies of our System-Under-Test.
+ Provide and arrange the virtual components or mocking components to replace our dependencies.
+ We can perform the testing actions to our System-Under-Test and get the returns from our system.
+ We can assert and verify the results from our System-Under-Test.
+ [Optional] We can implement test script to clean up data on our System-Under-Test and mocking components to make sure our testing executable again.

Note: The above approach won't work to execute manual testing and parallel execution. We tend to run this way in isolated testing purpose.

However, with supports from virtual components, we can control:
+ Testing Data on virtual / mocking component instead of depending on third-party.
+ Easy to clean-up to make testing flexible and executable again.
Example: Using a persistent data store [Refer to Chapter 1 - Mountain Bank testing - Book]
![persistent data store](./images/persistent_data_store_component_testing.png)

Example: Using Record - Playback with mocking service to record testing from real dependencies

# Write tests. Not too many. Mostly integration. "Kent C. Dodds"
Refer to: https://kentcdodds.com/blog/write-tests
We tend to write test and focus more on Integration test to detect and prevent issues soon.
It can be the main factors to build up the test strategy with Honey-cob testing from Pyramid testing.

# Contract testing in Microservice testing
Contract Test: is a software testing methodology that tests the interactions between different microservices or software components based on the contracts between them. In contract testing, each service or component is given a contract, which defines how to work with the service and which responses to accept. 

Tools:
- Pact.io
- Spring Cloud Contract
- Karate DSL

## Contract testing isn't meant Schema Testing: 
Refer to: https://pactflow.io/blog/contract-testing-using-json-schemas-and-open-api-part-1/

## Consumer-Driven Contract Testing in Microsoft: 
https://microsoft.github.io/code-with-engineering-playbook/automated-testing/cdc-testing/


# Mocks and why we should use Mock ?
- Note: Mock is different to Stuffs.
https://martinfowler.com/articles/mocksArentStubs.html
- In Microservices, probably each microservice has many dependencies (dependency injection). We will take advantaged of many open-source library to create the faking dependencies earlier and doing testing activities earlier.

Mocks:
- enable to test business logic isolation and without deployment
- doesn't cover integrated points

# Mocking tools and artifacts
- WireMock: https://wiremock.org/ 
- Mockoon: https://mockoon.com/
- Mockito and Java stack: https://site.mockito.org/
- Easy mock and Java stack: https://easymock.org/

# AWS Stack, Simulator with local service, not mock
- Simulate the real AWS Services.
- NOT: Feature lags / missing (There aren't full-services simulators)
- NOT: Doesn't simulate IAM
- NOT: False negatives (Simulate problems)
- NOT: Brigttle (hard to fix)


# Now not Test Pyramid, now we are in HoneyComb Microservice testing strategy
We are going ton increase more tests in earlier levels with component and integration testing, we will have the approaches as HoneyComb, it replaces Pyramids. when we reduce Unit test and consider more integration and component testing.

![Pyramid-vs-HoneyComb](./images/pyramid-vs-honeycomb.png)

References: https://engineering.atspotify.com/2018/01/testing-of-microservices/

# References:
- https://www.infoq.com/news/2020/01/monolith-architectural-drivers/
- Martin-fowler Microservice Testing: https://martinfowler.com/articles/microservice-testing
- PactIo: https://pact.io/
- Mountain Bank Testing: http://www.mbtest.org/
- Source code - Mountain Bank: https://github.com/bbyars/mountebank-in-action
- https://www.infoq.com/articles/twelve-testing-techniques-microservices-intro/
- https://www.infoq.com/articles/twelve-testing-techniques-microservices-tradeoffs/
- https://www.browserstack.com/guide/testing-strategies-in-microservices-vs-monolithic-applications
- Contract Testing: https://domenicoluciani.com/2020/01/10/consumer-driven-contracts.html