# Event Driven everything
In this space, we collect all documents, links, tutorial about event-driven and testing for event-driven architecture.

Before we can go with "Event-Driven" architecture, we should have the overal view about [Microservice archtecture](https://github.com/josdoaitran/solid-and-microservice-everything)
# What does means Event-Driven Architecture ?
- When we mention "Event-Driven", we are considering the communication parttern that microservices / components of our application communicates togethers in our architectures by events and asynchronous communications.
- Thankfully, event-driven microservices enable real-time communication, allowing data to be consumed in the form of events before they’re requested.

We collect and share the key concepts about Event Driven Architecutres and some examples integrations and designs as below.

[More information from Martin Fowler](https://martinfowler.com/articles/201701-event-driven.html)


## Example System Artchitecture with Event-Driven
- Event Notification.
- Event-carried State Transfer
- Event Sourcing.
- Command Query Responsibility Segregation.

## Event-Driven with RabbitMQ
- RabitMQ: https://www.rabbitmq.com/
Example:
![image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*AcSPKVVoL7zglZhHzQJ08w.png)
- References: https://medium.com/aspnetrun/microservices-event-driven-architecture-with-rabbitmq-and-docker-container-on-net-968d73052cbb

## Event-Driven with Kafka
- Apache Kafka: https://kafka.apache.org/
Besides that, if we use AWS native service, we can take advantage of AWS MSK servivce (Serverless), instead of using Kafka server. https://aws.amazon.com/msk/
### Kafka - Java Springboot
![image](https://media.geeksforgeeks.org/wp-content/uploads/20220214105957/SpringBootProducerConsumer.jpg)
You can refer to this repository, we initialized the example microservices with kafka:
https://github.com/josdoaitran/full-example-kafka-java-springboot
- Reference: https://www.geeksforgeeks.org/spring-boot-kafka-consumer-example/

## Event-Driven with AWS Service:
- Event Routers on AWS Service: Routing services an be implemented with SQS, SNS, MSK, Step Functions and EventBridge.
- References: https://collin-smith.medium.com/event-driven-architecture-with-the-saga-pattern-approach-in-aws-688e090dba2c

## Architecture Style Event Driven Microservice - Microsoft
[More Information](https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/event-driven)

![image](https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/images/event-driven.svg)

# References:
- https://ifyouseewendy.gitbooks.io/random-notes/content/event-driven-architecture-by-martin-fowler.html
- [Draw-io github to visualize the example architecture.](https://github.com/jgraph/drawio-github)
