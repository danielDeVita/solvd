/* 

Design Patterns =
Creational, Behavioural, Structural

-Aggregation: when one class can exist without another
-Composition: when one class can't exist without another
-Dependency: if we have two entities and one depends on the other,
if we make changes in one entity, it could change the other
-Generalization: inheritance (?)

///////////////////////////////////

Creational Design Patterns = 

- Factory Pattern:

    a)Simple factory: entity for the client without any logic
    b)Factory method: how we can pass the logic of object creation to other classes
    c)Abstract Factory: factories of factories


- Builder Dessing Pattern: 
    Separate construction steps from product representation

///////////////////////////////////

Adaptor Design Pattern =
Convert interface of an existing class into another interface clients expect.
Lets classes work together that couldn’t otherwise because of differences in their interfaces.

///////////////////////////////////

Bridge Design Pattern =
Decouple an abstraction from its implementation so that the two can vary independently.

///////////////////////////////////

Composite Design Pattern =
Combine simple objects into tree structures to represent part-whole hierarchies. 
Composite lets clients treat individual objects and compositions of objects uniformly

///////////////////////////////////

Decorator Design Pattern =
Add responsibilities to objects dynamically. 
Decorators provide a flexible alternative to subclassing for extending functionality.

///////////////////////////////////

Facade Desing Pattern =
Provide a unified interface to a set of functionalities or services. 
Facades are used to simplify complex systems by providing a simplified interface

///////////////////////////////////

Flyweight Desing Pattern:
Use sharing to support large numbers of fine-grained instances efficiently.

///////////////////////////////////

Proxy Desing Pattern:
Represent an object intended to interact with the real subject (an instance of an actual class).

************************************************************
************************************************************
************************************************************

Behavioural Desing Patterns =

Observer:
Define a dependency between objects so that when one object changes state, 
all its dependents are notified automatically.

///////////////////////////////////

Chain of responsability:
Avoid coupling the sender of a request to its receiver by giving more than one object a chance to handle the request.

///////////////////////////////////

Command:
Encapsulate a request as an object, thereby letting you parameterize clients with queues, requests, loggers, etc.

///////////////////////////////////

Mediator:
A mediator knows about all its colleagues but they don't know each other.
They communicate only through the mediator which acts as an intermediary.

///////////////////////////////////

Memonto:
The memonto pattern is a behavioral design pattern in software development where 
an object stores internal state and can restore it back later. 
This allows an object to be stored in such a way that it can later be reconstructed back into
exactly the same original object. This is also known as serialization.

///////////////////////////////////

Visitor:
Encapsulates a set of operations you want to perform on objects without changing their classes.
It provides a new operation to exist without modifying the classes of the elements on which it operates.

///////////////////////////////////

Strategy:
Defines a family of algorithms, encapsulates each one, and makes them interchangeable.
Strategies let the algorithm vary independently from clients that use them.

///////////////////////////////////

State:
Allow an object to alter its behavior when its internal state changes.
Object behaves differently when its internal state changes. Each state may have different behavior.

///////////////////////////////////

Template-Builder:
Separate the construction of a complex object from its representation.
Useful when the actual objects to build are unknown at compile time.

///////////////////////////////////
*/