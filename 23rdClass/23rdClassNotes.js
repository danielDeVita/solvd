/* 

SOLID PRINCIPLES =

    1. SRP - Single Responsibility Principle (S):
    A class should ideally do one thing well and it should be responsible for the way

    2. OCP - Open Closed Principle (O):
    Software entities should be open for extension, but closed for modification
    Instead of adding more methods to a class, make usage of the 'extends' key word (have a parent class)

    3. LSP - Liskov Substitution Principle (L):
    Objects in a program should be replaceable with instances of their subtypes without altering the correctness
    Parent classes' should only have common methods, keep parents simple

    4. ISP - Interface Segregation Principle (I):
    A client should never be forced to implement an interface that it doesn't use or clients shouldn't be forced to depend on methods they do not use
    
    5. DIP - Dependency Inversion Principle (D):
    High order classes shouldn't depend on lower order classes


*******************************************************************
*******************************************************************
*******************************************************************

MVC =

Model View Controller
- Model is where data lives
- Views are what we see in our browser window/screen
- Controllers are how users interact with views & models
Models can also handle business logic like validation or calculations
Views don’t need to know anything about Models or Controllers
Controllers don’t need to know anything about Models or Views
The controller handles all user input from the view and passes that information back into the model when necessary

///////////////////////////////////////

Repository Pattern:
- Used when you want to abstract away your database layer from other parts of an application so that they aren’t tightly coupled together.

*/