# Testing Event Driven System Architecture
- When your application is working and built up in microservices, there are a couple of testing levels and testing layers that we should consider in testing to make sure the quality of system.
In appliaction with UI, beside covering UI testing with view of End-User,  We should consider to deep-dive with lower testing level in the system architecture: Unit Test, Integration testing or Component test.
In applicaiton with Non-UI, the demands of testing for micro-service architecture is more important.
- The first thing, Input to the service is provided by event streams or by requests from a request-response API
- State is materialized to its own independent state store, and output events are written to a service’s output streams.