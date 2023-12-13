/* 

                Deep dive into Node.js architecture

1) What is Node.js?
    Node.js is a runtime environment that allows the execution of JavaScript code outside of a web browser. 

2) What is V8?
    V8 is an open-source JavaScript engine developed by Google, it is used in the Node.js runtime to execute JavaScript code. It is a compiler

3) What is stream?
    Think of it like a water pipe for data in coding. It helps handle information bit by bit instead of all at once.

    Readable Stream: Like a tap pouring water (data) that you can read bit by bit.
    Writable Stream: Imagine a sink where you can throw in data bit by bit.
    Duplex Stream: It's like a two-way street - you can both read from and write to it.
    Transform Stream: A filter that changes the water (data) as it flows through.


4) What V8 streams do you know?
    1) main stream (read codes and runs it)
    2) compilation stream (it optimizes the code)
    3) analytic stream (collects information, how long a fn calls, etc...)
    4) garbage collector stream (removes useless variables and frees up memory)


5) What optimization techniques of V8 do you know?

    1) function inlining (replacing a function call with the actual body of the function being called)
    2) hidden classes = it's a representation of an object and the layout of its properties (name, position in memory, etc)
    3) sparse- and non-sparse arrays = sparse arrays are better for memory, but worse for speed and access (empty spaces)
                                       non-sparse arrays are worse for memory, but better for speed and accessing them
    4) chaching = storing and reusing previously computed or fetched data (or an idempotent/pure fn)

    SUMMARY FOR OPTIMIZATING CODE (as developer) =
    1)respect order of properties when we initialize classes
    2)no dynamic properties
    3)multiple runs of the same method is better than 1 run of multiple methods
    4)avoid sparse arrays


6) What is the main idea of demultiplexer pattern?
     A pattern that reads inputs from multiple sources and writes outputs to multiple destinations.

7) What is a non-blocking I/O architecture and how do non-blocking threads work?
    It's a design where the program doesn't wait for I/O operations (reading from a file or making a network request) to 
    complete before moving on. Instead, it continues executing other tasks and uses callbacks to handle the completion 
    of those operations. 

8) What is libuv?
    It's a library that manages asynchronous I/O operations. It is a behind-the-scenes worker that handles tasks like file 
    operations, network requests, and timers, ensuring Node.js applications can efficiently execute non-blocking operations across different operating systems.

9) Name all stages of event loop.

   ┌───────────────────────────┐
┌─>│           timers          │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │
│  └─────────────┬─────────────┘      ┌───────────────┐
│  ┌─────────────┴─────────────┐      │   incoming:   │
│  │           poll            │<─────┤  connections, │
│  └─────────────┬─────────────┘      │   data, etc.  │
│  ┌─────────────┴─────────────┐      └───────────────┘
│  │           check           │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │
   └───────────────────────────┘

    timers: this phase executes callbacks scheduled by setTimeout() and setInterval().
    pending callbacks: executes I/O callbacks deferred to the next loop iteration.
    idle, prepare: only used internally.
    poll: retrieve new I/O events; execute I/O related callbacks 
    check: setImmediate() callbacks are invoked here.
    close callbacks: some close callbacks, e.g. socket.on('close', ...).


11) Is Node.js single-threaded or multi-threaded?
    Node.js is single-threaded. However, it utilizes an event-driven, non-blocking I/O model, 
    allowing it to handle many concurrent connections without creating a new thread for each request.





                JavaScript Fundamentals

1) What’s difference between CommonJS and ES module systems?
    Syntacticall differences and also in commonJS imports are processed at runtime, with ESmodule it is resolve before the program runs

2) What’s difference between var, let and const?
    Scope and reassignment.

3) Name all JS data types.
4) What’s difference between null and undefined?

    Primitive Data Types 

    -number: (normal integer, hexadecimal, binary, float)
    -string: ("template string" || '' || `literal string`)
    -boolean: (true or false)
    -null: (it means that the pointer of the variable has a link to an unexisting value)
    -undefined: (similar to null, a variable is declared but it has no value asigned to it)
    -symbol: (a unique and immutable data type used as identifier for object properties)
    -bigint: (it goes from (2^53 -1) until (2^53) - 1)

    Reference Data Types =

    -object: (this variables are linked to a part in memory, with key:value relation)

5) What happens when you compare data of different types?
    Coercion. string to number, number/string to boolean

6) What are "truthy" and "falsy" values in JavaScript?
    In boolean contexts values can be coerced to true or false. 
        Truthy = 
            Non-empty strings: "hello", "123"
            Non-zero numbers: 42, -3.14
            Objects and arrays: {}, [1, 2, 3]
            Functions: function() { ... }
        Falsy = 
            Empty strings: ""
            Zero: 0
            null
            undefined
            NaN

7) What is an object?
    Data type with key:value pair relationship, pointing at a place in memory

8) What’s the difference between objects and primitive types?
    Passed by reference, passed by value

9) What’s the difference between strict and non-strict (or loose) comparison?
    Comparing data and also data type

10) What’s the difference between explicit and implicit type conversion?
    Implicit = happens automaticaly when trying to operate different types of data
    Explicit = we actively convert the data

11) How does ternary operator work?
    condition ? return if true : return if false

12) Why do we need switch/case operator and how does it work?
    Similar to a chain of "if-else" statementes, comparing one value agains several conditions

13) What’s the difference between loop for and loop while?
    The syntax and also with "for" you know the amount of elementes to iterate

14) How do logic operators work?
    && true if both statementes are true
    || true if at least one statement is true
    ! negates the statement

15) What is nullish coalescing operator (??) ?
    let result = someVariable ?? defaultValue;
    If someVariable is null or undefined, defaultValue is returned.
    If someVariable has a value other than null or undefined, that value is returned.

16) What is strict mode and what features does it have?
    Strict mode is a feature in JavaScript that helps catch common coding errors and prevents the use of certain "unsafe" actions. 
    When strict mode is enabled, the JavaScript interpreter becomes more strict in interpreting your code.





                Functions
            
1) What are the ways to declare functions? What is the difference between them?
    a) Syntax differences, 
    b) Arrow functions have an implicit return when it is just one line (they also need braces "()" if they return an object)
    c) The scope of key word .this:
                                in arrow fn it points to an outer context (they inherit their .this context from definition sourranding)
                                in regular fn it points to the property refered (they have their own context for .this, depending how it is called)
    d) Within an object it is better practice to use regular fn
    e) For short fn that don't require .this or for a callback, arrow fn are better 

2) What is hoisting and how does it work?
    Hoisting is taking a block of code and puting it at the 'top' (virtually speaking) of the file

3) What is pure function?
    Pure FN are functions that are idempotent (always same result if same arguments)
 
4) What is high ordered function?
    Functions which take functions as input/output parameters are called High order functions
    Examples =  map(), filter(), reduce(). etc..

5) What is generator function?
    It is a special type of function that can be paused and resumed during its execution.

    function* countToThree() {
    yield 1;
    yield 2;
    yield 3;
    }

    const generator = countToThree();

    console.log(generator.next().value); // Output: 1
    console.log(generator.next().value); // Output: 2
    console.log(generator.next().value); // Output: 3
    console.log(generator.next().value); // Output: undefined (generator exhausted)

6) What is lazy function?
    A lazy function is a function that delays the computation of a value until it is actually needed. 
    It's designed to defer the execution of a task until the result is required, helping to optimize performance 
    by avoiding unnecessary computations upfront.

            function createLazyFunction(expensiveOperation) {
        let result = null;
        
        return function () {
            if (result === null) {
            // Perform the expensive operation only if the result is not already computed
            result = expensiveOperation();
            }
            return result;
        };
        }

        // Example usage
        const lazyAddition = createLazyFunction(() => {
        console.log("Performing expensive addition...");
        return 5 + 3;
        });

        console.log(lazyAddition()); // Output: Performing expensive addition... 8
        console.log(lazyAddition()); // Output: 8 (result is already computed, no re-computation)

7) What is carrying?
        A function that takes multiple arguments is transformed into a series of functions that each take a single argument.
        Makes code reusable and modular.
        They always have to return another function.

        Example =
            function curriedAdd(a) {
            return function(b) {
                return a + b;
            };
        }
        const add5 = curriedAdd(5); // Creates a new function that adds 5 to a value
        const result1 = add2(3);    // Adds 2 to 3, resulting in 5
        const result2 = add5(3);    // Adds 5 to 3, resulting in 8

8) What is function composition?
        Combination or chaining multiple operations to perform complex tasks in an efficient way without creating intermediate variables.
        Benefits: modularity and readability.
        Example =
        let hello = (name) => `Hello, ${name}`;
        let toUpperCase = (string) => string.toUpperCase();
        let greet = (stringName) => hello(toUpperCase(stringName));





                    Objects

1) Name ways of creating an object.

        let obj = {a:1};
        
        function Obj(parameterProperty) {
        this.a = parameterProperty;
        this.method = function(){}
        };

        const obj2 = new Object(obj); // {a:1}

2) Why do we need constructor?
    It is the method that initializes properties and its values

3) Name ways of accessing an object property.
        Dot notation, bracket notation, destructuring

4) What are property descriptors and what types of descriptors are available?

        Property descriptors are 6 attribute every property in an object has:
        1) [[value]] the value of the field itself
        2) [[Get]] for FN getter, it will be undefined if we don't write it
        3) [[Set]] for FN setter, it will be undefined if we don't write it
        4) [[Writable]] by default it is TRUE, it means we can rewrite it
                        if FALSE, the value will be a const and won't be able to be rewriten, we won't get an ERROR if we try to use a GETTER with it
        5) [[Enumerable]] by default it's TRUE, it can be iterated with Object.Keys() and forIn and for loops
                        if FALSE, it won't be show in objectKeys() and for In but it will be shown in getPropertyNames()
        6) [[Configurable]] by default it's TRUE 
                        if FALSE it will become non-deletable

5) Explain prototypal inheritance.

        Each object in JavaScript has a reference to another object called its prototype.
        When you access a property or method on an object, and the object doesn't have that property, JavaScript looks up the 
        prototype chain to find it in the prototype of the object.
   
6) What is context?
    It referes to the environment of the word .this

7) Name object methods that you know.
        Object.keys()
        Object.values() 
        Object.entries()
        Object.assign(): Copies the values of all enumerable properties from one or more source objects to a target object.
        Object.hasOwnProperty()
        Object.create()
      

8) Name ways of copying an object.
    Object.assign({}, original)
    { ...spread }
    JSON.parse() and JSON.stringify()

9) How to compare two object for equality?
    obj1 === obj2
    JSON.stringify(obj1) === JSON.stringify(obj2)

10) Name ways to protect an object.
    Object.create()
        Object.freeze()





            Arrays

1) What is an array?
    Data structure of indexed items

2) Name array methods that you know.
    map, filter, reduce, forEach, length, pop, push, shift, unshift

3) Name ways to iterate over an array.
    for loop, for of, forEach





            Error Handling

1) How errors are handled in JS?
        try/catch block or a promise.catch

2) What is the purpose of the finally block in a try-catch statement?
    To execute code regardles of an error or not




            Big O Notation

1) What is a Big O Notation?
    It is a way to express the efficiency of algorithms 

2) How would you describe the Big O complexity of common sorting algorithms like QuickSort, MergeSort, and BubbleSort?
    QuickSort: generally fast. On average, it divides the data into smaller parts and sorts them independently
    MergeSort:  It divides the data into halves, recursively sorts each half, and then merges them back together
    BubbleSort: Simple but inefficient algorithm; compares and swaps adjacent elements until the entire array is sorted

3) Which other notations do you know?
    Little O Notation, Omega Notation, Theta Notation




            Memory Management and Collections

1) How does garbage collection work in JavaScript?
   Garbage collection helps prevent memory leaks by automatically reclaiming memory that is no longer needed, 
   making memory management more convenient for developers.

2) What is the 'heap' in the context of memory management?
    It is an area where objects (data structures, variables, etc.) are stored at runtime

3) What are the differences between stack and heap memory?
        ????

4) What are Map and Set?
    -Map:
    Key value pairs, Keys must be unique
    -Set:
    Unordered set of values, no duplicates allowed

5) What is the difference between Map/Set and WeakMap/WeakSet?
    Weaks don't prevent garbage collection, unless there is a reference to them or used somewhere else





            JSON

1) What is JSON and why do we need it?
    JavaScript Object Notation, lightweight, ideal for sharing information

2) What datatypes can be in JSON?
    String, number, boolean, array, null




            Promises

1) What is a promise?
    An object representing the eventual completion or failure of an asynchronous operation and its resulting value.
2) What states can have promises?
    Pending: Initial state; neither fulfilled nor rejected.
    Fulfilled: The operation completed successfully, and a result is available.
    Rejected: The operation failed, and a reason for the failure is available.
3) Name promise methods
    .then, .catch, .finally
4) Will try/catch work for promises?
    No




            OOP and Classes

1) Name and explain basic principals of OOP.
    Encapsulation: Bundling data and methods that operate on the data within a single unit (class or object).
    Inheritance: The ability of a class to inherit properties and methods from another class.
    Polymorphism: Objects of different classes can be treated as objects of a common superclass.

2) How to create a class in JS?
    class Something {
    constructor(value) {
        this.property = value;
    }

    method() {
        console.log(`${this.property} is a the property`);
    }
    }

3) How does class differ from a function?
    A class is a blueprint for creating objects with shared properties and methods, providing a way to model real-world entities. 
    A function is a block of code designed to perform a specific task.

4) What is a constructor?
    A constructor is a special method in a class that is automatically called when an object is created. 
    It initializes the object's properties.

5) Explain the concept of inheritance in JavaScript classes.
    Inheritance allows a class to inherit properties and methods from another class. It's achieved using the extends keyword.

6) Where we can reach private and protected fields?
    With a getter we can get a protected field

7) What are static methods and fields?
    Static methods and fields belong to the class rather than instances. They are accessed using the class itself,
    you don't have to instantiate the class to use them

8) What are mixins?
    Properties/methods pass to another object but not through inheritance but through something like:
    Object.assign(someClass.prototype, someObject);
    new SomeClass("value").aMethodFromSomeObject()




            Data Structures

1) What is array and what methods does it have?
    A collection of elements with their indexes. push, pop, shift, unshift

2) What is stack and what methods does it have?
    A Last In, First Out (LIFO) data structure where the last element added is the first one to be removed. push, pop, isEmpty

3) What is queue and what methods does it have?
    A First In, First Out (FIFO) data structure where the first element added is the first one to be removed. enqueue, dequeue
    
4) What is linked list?
    linear collection of elements where each element points to the next one in the sequence. node --- value
                                                                                                  |__ next
    it has methods for adding, removing, traversing (looping the list)

5) What is graph?
    A collection of nodes where each node can have connections to other nodes.
    Nodes can represent entities, and connections represent relationships

6) What is hash table?
    Storage where we have a key and its corresponding collection
    The position where the value is located is a hash code




            Fundamentals of Web Technologies

1. What is HTTP and how does it work?
    Hypertext Transfer Protocol, works by sending request and a getting response back

2. Name and describe main REST principals.
    REpresentational State Transfer

    1) Client/Server architecture
    2) Stateless: 
    3) Caching:
    Storing data locally so when you need it again instead

    4) Hypermedia as Engine of application state: (HATEOAS)
    The idea behind this is that your API should give you all the necessary links
    to navigate through different states of your app. This way if you want to change something
    in your app, you don’t have to make changes in multiple places but rather just change
    the link which points to wherever needs changing!

    5) Layered System:
    Separate roles, DB, business Logic, login, they don't mix

    6) Code on done:
    Actual coding and managing of data


3. Name and describe main HTTP methods.
    get, post, put, patch, delete, head, options

4. What application levels do you know?
    level 3: HATEOAS (ie: Hypermedia as Engine of application state)
    level 2: verb logic and code on done
    level 1: we use different paths (ie: /:id changes )
    level 0: we use some protocol and a format of data (ie: JSON and GET, no HARD logic)

5. How does JWT auth work? 
    header, payload, and signature, sign payload and then verify it somewhere else

6. How does OAuth2 work?

7. How to send data to server?
    POST or GET (not so safe)




                Express

1. What is express?
    A framework for back end with nodeJS

2. What’s the difference between framework and library?
    Set of tools, can have many libraries. A library is a set of reusable code 

3. How does express middlewares work?
    FN between route and controller, allows passing if a condition is met

4. How does routing work?
    Back end recieves a request and depending on the route and verb it invokes 'a' function or 'b'





                Docker

1) What is Docker and why do we need it?
    It is a tool that allows you to run applications in an isolated environment. 
    We use it to standarize set up among developers

2) What’s the difference between virtual machine and docker?
    VM emulates the whole OS, Docker emulates only its kernel

3) What is an image and what is a container?
    Image: piece of software that contains everything to run a VM 
    Container: a running image

4) What is a registry center?
    Registry for images (like gitHub for repositories of code)

5) What is a docker compose and why do we need it?
    A file that defines the kind of VM we will run, it defines services, networks and every container we will need




                SOLID

1) Name and describe the SOLID principles.
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




                Databases

1) What types of DBs do you know?
    Relational, non-relational

2) What is a relational DB?
    A DB where every representation of an entity can be related to another one

3) What is normalization and what normal forms exist?
    Process of decomposing tables to eliminate data redundancy and improve data integrity. 
    Normalization has levels, the highest, the more normalized

     0 Unnormal Form (Zero Normal Form):
    - No tables or fields are repeated in any other table or field
    - Data shouldn't have indexes
    - Columns should be named
    - Shouldn't be ordered (only if we make a selection we can order it somehow)

    1 First Normal Form:
    - Each table should have a primary key (unique identifier for each record)
    - No repeating groups in columns
    - Eliminate duplicate data across tables by using foreign keys to link them together
    - In cells: atomic values (no complex data)
    - In column: data of one type
    - No arrays or lists

    2 Second Normal Form:
    - All non-key attributes are fully dependent on the primary key and not transitively dependent on another non-primary attribute
    - Table should have a key
    - Non-key columns should depend on a whole key

    3 Third Normal Form:
    - Non transit dependency: a non-transit dependency is when there's no relationship between two attributes that aren’t part of their own key

    4 Boyce-Codd Normal Form(BCNF):
    - key-columns of complex key must not depend on non-key columns

    5 Fourth Normal Form:
    - All nonkey attributes are fully functionally dependent on the primary key

    6 Fifth Normal Form:
    - A relation is in 5NF if it is in BCNF and there are no transitive dependencies.
    Transitive dependency occurs when X depends on Y which itself depends on Z.

    7 0k Normal Form:
    - The number of relations needed to express all information about the subject area without duplication or loss of information.

    8 Sixth Normal Form:
    - The only relationships between tables are through the primary key/foreign key relationship.

4) What is denormalization and why do we need it?
    It is introducing redundancy into a relational database design by merging tables or introducing 
    redundant data. The goal is to optimize query performance at the cost of increased data redundancy.

5) How are SQL commands classified?
    - DATA DEFINITION LANGUAGE: CREATE, ALTER, DROP
    - DATA MANIPULATION LANGUAGE: SELECT, INSERT, UPDATE, DELETE
    - DATA CONTROL LANGUAGE: REVOKE, GRANT
    - TRANSACTION CONTROL LANGUAGE: COMMIT, CREATE TRANSACTION

6) Name and describe types of relations between tables
    One-One, One-Many, Many-Many, Many-One

7) How many-to-many relation can be proceeded?
    Intermediate table

8) Why do we need constrains and which do you know?
    To keep integrity, accuracy and sanitization of data

9) What is the difference between `INNER JOIN`, `LEFT JOIN` and `OUTER JOIN`?
    Iner Join: only common data is returned
    Left Join: only left table and common data is returned
    Outer Join: all data is returned (or data not in common if is 'outer excluding join')

10) How does `CROSS JOIN` work?
    It is a representation of every possible combination of rows

11) How to combine two selects in SQL query? (what operator is needed for this)
    UNION operator to combine to SELECT clauses for example

12) What are aliases and why do we need them?
    It is a way to rename a row to make it more readable

13) What is an index?
    A value in a row that we use to retrieve data

14) What is a document-oriented DB?
    A DB that uses objects to store values

15) What are key-value DBs used for?
    For anything that we need fast acces and where data types are not stric

16) What is ORM?
    Translator for a relational DB in JavaScript




                Design Patterns

1) What creational patterns do you know?
    Factory Pattern:

    a)Simple factory: entity for the client without any logic
    b)Factory method: how we can pass the logic of object creation to other classes
    c)Abstract Factory: factories of factories


    - Builder Dessing Pattern: 
    Separate construction steps from product representation

2) What structural patterns do you know?
    Adaptor Design Pattern =
    Convert interface of an existing class into another interface clients expect.
    Lets classes work together that couldn’t otherwise because of differences in their interfaces.

    Bridge Design Pattern =
    Decouple an abstraction from its implementation so that the two can vary independently.

    Composite Design Pattern =
    Combine simple objects into tree structures to represent part-whole hierarchies. 
    Composite lets clients treat individual objects and compositions of objects uniformly

    Decorator Design Pattern =
    Add responsibilities to objects dynamically. 
    Decorators provide a flexible alternative to subclassing for extending functionality.

    Facade Desing Pattern =
    Provide a unified interface to a set of functionalities or services. 
    Facades are used to simplify complex systems by providing a simplified interface

    Flyweight Desing Pattern:
    Use sharing to support large numbers of fine-grained instances efficiently.

    Proxy Desing Pattern:
    Represent an object intended to interact with the real subject (an instance of an actual class).

3) What behavioral patterns do you know?
    Observer:
    Define a dependency between objects so that when one object changes state, 
    all its dependents are notified automatically.

    Chain of responsability:
    Avoid coupling the sender of a request to its receiver by giving more than one object a chance to handle the request.

    Command:
    Encapsulate a request as an object, thereby letting you parameterize clients with queues, requests, loggers, etc.

    Mediator:
    A mediator knows about all its colleagues but they don't know each other.
    They communicate only through the mediator which acts as an intermediary.

    Memonto:
    The memonto pattern is a behavioral design pattern in software development where 
    an object stores internal state and can restore it back later. 
    This allows an object to be stored in such a way that it can later be reconstructed back into
    exactly the same original object. This is also known as serialization.

    Visitor:
    Encapsulates a set of operations you want to perform on objects without changing their classes.
    It provides a new operation to exist without modifying the classes of the elements on which it operates.

    Strategy:
    Defines a family of algorithms, encapsulates each one, and makes them interchangeable.
    Strategies let the algorithm vary independently from clients that use them.

    State:
    Allow an object to alter its behavior when its internal state changes.
    Object behaves differently when its internal state changes. Each state may have different behavior.

    Template-Builder:
    Separate the construction of a complex object from its representation.
    Useful when the actual objects to build are unknown at compile time.




                Models of development

1) How does waterfall model work?
   - one step after another, in sequence
    - no parallelism between tasks
    - each task has to finish before next starts

2) How does agile model work?
    Agile: (cycling)
    1) Requirements 
    2) Plan
    3) Design
    4) Develop
    5) Release
    6) Truck and Monitor

3) What is the main idea of V-model?

        V Model:
            
                businnes requirements                           e2e testing
                    functional requirements                 function testing
                        create architecture             integration testing
                                    realization     unit testing
                                            code

        (for every stage there is testing)

4) What is the difference between incremental model and iterative model

    Incremental Model:

    Develops and delivers software in smaller increments.
    Each increment represents a portion of the complete system.
    Focuses on adding new functionality with each increment.
    Customer feedback is gathered after the delivery of each increment.
    Iterative Model:

    Develops software in iterations, revisiting the entire system in each iteration.
    The system evolves with each iteration.
    Allows changes and refinements to the entire system based on feedback.
    Customer feedback is gathered at the end of each iteration.

5) How does SCRUM work?
6) What SCRUM roles do you know and what are they responsible for?
    - Short iterations (2 weeks or less)
    - Clearly defined roles (Product Owner, Scrum Master, Development Team)
    - Daily standups
    - Sprint planning meeting

7) How does kanban work?

    - No specific time frame for each task
    - Prioritize based on business goals
    - Tasks should be completed by the end of the day
    - Useful for managing multiple projects simultaneously

*/