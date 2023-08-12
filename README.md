## Microservice Architecture
Microservices - or microservice architecture - is an architectural style to develop the application that structures an application as a collection of minimal componnent as services.
They are seperated by: 
+ Business purposes or capabilities.
+ Deploymenent independently.
+ Developed, Deployed, Managed by smaller team.

Then, each microservice will have these properties:
+ Independently deployable
+ Serveral integration partterns with other microservices (sync, asyns, ...)
+ Can be tested isolatedly and can be tested in integration level and integrated levels.
(When your application are designed and developed in microservices architecture, the demands of your software will be more and more complex)

## Monolithic and Microservice Architecture
As below image, we have the simple web application that built in  Monolithic Architecture:

![Example-Monolethic](https://microservices.io/i/DecomposingApplications.011.jpg)

The example microservice architecture system:

The principle to migrate a system from monolithic to microservice architecture:
refer to: https://microservices.io/post/refactoring/2020/07/28/six-principles-for-refactoring-to-microservices.html

## Communcation protocol in Microservice Architecture:
There are serveral communication protocols to build the system in microservices architecture. In each targets or specific scenarios, we will choose the proper communication types to transfer message or data between components.
We can classify to 2 main protocol types: Sync and Async.

Base on the communicaiton protocol among components and microservices, we will have 2 kinds of coupling to measure the dependency of each components in our microservices architectures.
- Tight coupling
- Loose coupling.

Read more [Here](https://github.com/josdoaitran/microservices-everything/blob/main/sync-and-async.md)


# References:
- Microservice IO: https://microservices.io/index.html
- From Monolithic to Microservice:
https://microservices.io/patterns/monolithic.html
- https://learning.oreilly.com/library/view/microservices-patterns/9781617294549/