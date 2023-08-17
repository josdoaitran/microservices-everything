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

## Monolith and Microservice Architecture
As below image, we have the simple web application that built in  Monolith Architecture:

![Monolith](./images/monolithic.png)

The big problem in Monolith architecture is scaling the system in Monolith, when multi-team will work in the same code base.

The example microservice architecture system:
![Example-Monlithic](https://d2908q01vomqb2.cloudfront.net/fc074d501302eb2b93e2554793fcaf50b3bf7291/2021/07/14/Figure-2.-Microservices-based-order-submission-workflow.jpg)

- Difference Monolith vs Microservice Architecture:

![Monolith-vs-microrservice](https://www.openlegacy.com/hs-fs/hubfs/Picture1.webp?width=889&height=478&name=Picture1.webp)

The principle to migrate a system from Monolith to microservice architecture:
refer to: https://microservices.io/post/refactoring/2020/07/28/six-principles-for-refactoring-to-microservices.html

## Communcation protocol in Microservice Architecture:
There are serveral communication protocols to build the system in microservices architecture. In each targets or specific scenarios, we will choose the proper communication types to transfer message or data between components.
We can classify to 2 main protocol types: Sync and Async.

Base on the communicaiton protocol among components and microservices, we will have 2 kinds of coupling to measure the dependency of each components in our microservices architectures.
- Tight coupling
- Loose coupling.

Read more [Here](./sync-and-async.md)

## Microservice Testing
In this session, we will collect all points in Testing to cover the quality of system in Microservice Architecture.
Reading more [here](./microservice-testing.md)

# Serverless:
https://www.infoq.com/news/2016/08/serverless-autodesk/


# References:
- Microservice IO: https://microservices.io/index.html
- From Monolith to Microservice:
https://microservices.io/patterns/Monolith.html
- https://learning.oreilly.com/library/view/microservices-patterns/9781617294549/
- https://medium.com/javanlabs/micro-services-versus-Monolith-architecture-what-are-they-e17ddc8d3910
- Communication: https://learn.microsoft.com/en-us/dotnet/architecture/microservices/architect-microservice-container-applications/communication-in-microservice-architecture
- Microservice with AWS: https://aws.amazon.com/blogs/architecture/architecting-a-highly-available-serverless-microservices-based-ecommerce-site/
- Monolithic and Microservices: https://aws.amazon.com/compare/the-difference-between-monolithic-and-microservices-architecture/
