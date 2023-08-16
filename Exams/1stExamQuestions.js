/* 

Topic: Node.js, V8 engine, NPM, Version system, and Module system

1. What is Node.js? What is the V8 engine? How does Node.js use the V8 engine to execute JavaScript code, and how does it contribute to its performance?

NodeJS = Runtine enviroment for Javascript to run server side applications
V8 = google's engine to run Javascript in front-end and back-end, it is a compiler for JS
V8 opitimization of code = 
1) function inlining (replacing a function call with the actual body of the function being called)
2) hidden classes = it's a representation of an object and the layout of its properties (name, position in memory, etc)
3) sparse- and non-sparse arrays = sparse arrays are better for memory, but worse for speed and access
                                   non-sparse arrays are worse for memory, but better for speed and accessing them
4) chaching = storing and reusing previously computed or fetched data (or an idempotent/pure fn)

SUMMARY FOR OPTIMIZATING CODE (as developer) =
1)respect order of properties when we initialize classes
2)no dynamic properties
3)multiple runs of the same method is better than 1 run of multiple methods
4)avoid sparse arrays

2. Explain the significance of NPM in the Node.js ecosystem and why it is considered a crucial tool.

NPM = Node Package Manager. Functionalities developed by others we can use. Uses caching to avoid installing same package twice

3. What is versioning in software development? Describe the MAJOR, MINOR, and PATCH versioning system commonly used in package management.

major.minor.patch = (x.y.z)
                    x = no backwards compatibility
                    y = new feature. keep deprecated FN, backwards compatible
                    z = minor patches, like refactoring

4. How do you use modules in JavaScript? How can you write your own module? Provide an overview of the module system in Node.js.

CLASS WAS NOT RECORDED

You install them from npm, yarn or pnpm. Packages are files combined together, consist of parts of code that solves tasks (saves time), one package may use other packages.

5. What are global modules in Node.js, and how do they differ from local modules? How do you interpret version specifications like "1.2.3", "~3.2.0", or "^2.1.0"?

A Node.js package that is installed globally on your system rather than being tied to a specific project
npm i -g myPckg (how to install them)

"package": "4.17.1", your project will always use version 4.17.1 of "package"
"package": "~3.2.0", your project will use up to version 3.2.9 of "package", but not higher like 3.3.0 (.y is the limit)
"package": "^2.1.0", your project will use up to 2.9.9 or project, but not higher like 3.0.0 (.x is the limit)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Topic: JavaScript Basics

6. What is the difference between regular functions and arrow functions in JavaScript? How are they used, and when should you prefer one over the other?

a) Syntax differences, 
b) Arrow functions have an implicit return when it is just one line (they also need braces "()" if they return an object)
c) The scope of key word .this:
                            in arrow fn it points to an outer context (they inherit their .this context from definition sourranding)
                            in regular fn it points to the property refered (they have their own context for .this, depending how it is called)
d) Within an object it is better practice to use regular fn
e) For short fn that don't require .this or for a callback, arrow fn are better 

7. Explain the difference between `let` and `const` in JavaScript, including their scoping rules and immutability features.

Both of them have block scope, they don't hoist
let is mutable and can be reassigned new values
const is not mutable, but its references (object or array) can be reasigned (elements of an array or properties of an object)

8. What are the different data types in JavaScript? Provide examples of each data type.

Primitive Data Types =

-number: (normal integer, hexadecimal, binary, float)
-string: ("template string" || '' || `literal string`)
-boolean: (true or false)
-null: (it means that the pointer of the variable has a link to an unexisting value)
-undefined: (similar to null, a variable is declared but it has no value asigned to it)
-symbol: (a unique and immutable data type used as identifier for object properties)
-bigint: (it goes from (2^53 -1) until (2^53) - 1)

Reference Data Types = 

-object: (this variables are linked to a part in memory, with key:value relation)

9. How does hoisting work in JavaScript, and how can it affect variable declarations and function definitions?

var variables declarations are taken to the 'top' of the code during compilation, not their assingment
regular functions are also hoisted, before var variables (you can call it before its definition)
let and const are hoisted too, but not initialized

10. Describe how logical operations work in JavaScript, and name all the object methods available for Boolean objects.

&&:returns true if both statements are true
||: returns true if at least one statement is true
!: returns the opposite boolean
ternary operator: const result = condition ? trueValue : falseValue
Short-Circuit Evaluation = 
    &&: if left operand is false, right operand is not evaluated
    ||: if the left operand is true, the right operand is not evaluated

const booleanObject = new Boolean() => creates boolean object (it recieves boolean or falsy/truthy values)
      booleanObject.toString() => returns string of boolean value of object
      booleanObject.valueOf() => returns boolean value of object

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Topic: Objects and Functions

11. How do objects look like in JavaScript, and what are property descriptors associated with object properties?

[key]:value

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

12. What is a deep clone of an object, and how can you proceed to create one in JavaScript?

It's a perfect copy of an original object, diferent reference. We can update them independently.
Cloning methods =
    a) const someObject = Object.assing({},otherObject)
    b) const someObject = {...otherObject}
    c) const someObject = JSON.parse(JSON.stringify(otherObject))
    d) libraries like _cloneDeep

13. Explain the CommonJS module system and how it is utilized in Node.js to organize and share code between different files.

CLASS WAS NOT RECORDED

????????

14. How do you create and export a module in Node.js, and how do you import it into another file using `require`?

CLASS WAS NOT RECORDED

const variable = require("modulename")
const otherVariable = require("path/to/module")
module.exports = {variableToExport, otherVariableToExport}
exports.someName = someNameVariable

import module, {otherModule} from 'package'
import myOtherModule from 'path/to/otherFile'
import {variable, otherVariable} from 'path/to/differentFile'
export default'module' (one per file)
export 'otherModule' (several per file)

15. Describe the roles of the "require" function in Node.js when dealing with modules, and how does it help manage dependencies?

CLASS WAS NOT RECORDED

require() has many tasks, it loads the module, it resolves the path from node_modules or an absolute path, it uses caching to load it only once, if there is another
require using that same module it will return a reference to that cached module

16. What is the difference between "exports" and "module.exports" in a Node.js module? How can you use them to expose functionalities?

module.exports = {thingToExport, otherThing}
exports.thingToExport = thingToExport

if assign a new value to exports, the reference to module.exports will be broken, and the module will no longer export the contents of module.exports

17. What is the difference between "exports" and "require" in a Node.js module? How are they related to each other in the module system?

The require function imports the module.exports object from another module

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Topic: Type Conversion

18. What is type conversion in JavaScript, and why is it necessary? Provide examples of implicit and explicit type conversions.

It's the process of converting a value from one data type to another. It allows us to perform operations on variables of different types and ensures the code works.
Implicit = happens automaticaly when trying to operate different types of data
Explicit = we actively convert the data

19. Explain the concept of truthy and falsy values in JavaScript and how they relate to boolean conversions.

In boolean contexts values can be coerced to true or false. We coerced thata with IF statements or WHILE loops.
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

20. How can you convert a variable of type string to a number in JavaScript using built-in functions like `Number()`, `parseInt()`, and `+` (unary plus)?

We simply pass the string number as a parameter of those functions and they will return the value as a number or we place a + in front of the string number.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Topic: Function Concepts

21. What is an IIFE (Immediately Invoked Function Expression) in JavaScript, and what problem does it solve? Provide an example of its usage.

It's a JavaScript function that is defined and executed immediately after it is created. It creates it's own scope to ensure there is no variables colliding,
because variables in the global scope can be accessed from everywhere, hence creating unexpected behaviour.
Very useful for creating modules such as the ones in npm (they avoid conflicts with other modules and our own code)

(function(){
    //code here...
    })();

22. How do you define a function in JavaScript? Provide examples of both function declarations and function expressions.

        Function declaration =
            function doSomething(a) {
                //do something with a
            };

        Function expression =
            var doSomething = function (a){
                //do something with a
                };

        Named function expression =
            const doSomething = function doSomething(){
                //some code
            };

        Arrow function =
            let doSomething = () => //some code;

23. Can a function in JavaScript accept multiple arguments? If yes, how do you pass and handle them within the function?

const arrayExample = [1,2,3,4,5,6]
Yes it can, they have to be separated by a comma or using the spread operator ...arrayExample

24. Provide an example of a closure in JavaScript and explain how it works.

Closure allows a function to "remember" and access variables from its outer (enclosing) scope even after the outer function has finished executing. 
Closures are created whenever a function is defined within another function and captures references to its outer variables.

function outerFunction() {
    const outerVariable = "I am from the outer function";
    function innerFunction() {
        console.log(outerVariable);
    }
    return innerFunction;
}
const closure = outerFunction(); // "closure" captures the innerFunction and its scope
closure(); // Output: "I am from the outer function"

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Topic: Pure Functions and Immutability

25. What is a pure function in JavaScript, and what characteristics define a function as "pure"? How do pure functions relate to immutability in JavaScript?

Pure FN are functions that are idempotent (always same result if same arguments)
They have no side effects (shouldn't affect other variables or states)
Since pure FN don't affect other variables they are a key component for inmutability because the value of a variable won't be modified by a pure FN

26. Describe the concept of named immutable methods in JavaScript and provide examples of such methods.

They are methods applied to an array or object, they won't affect original data structure, but return a new one.
examples = .map(), .filter(), Object.assing({}, otherObject, {newProperties})

27. Provide an example of a Higher-Order Function in JavaScript and explain how it can accept another function as an argument.

Functions which take functions as input/output parameters are called High order functions
Examples =  map(), filter(), reduce(). etc..

    function doOperation(operation, a, b) {
        return operation(a, b);
    };
    function add(x, y) {
        return x + y;
    };
    function subtract(x, y) {
        return x - y;
    };
    const result1 = doOperation(add, 5, 3);      // Calls add(5, 3)
    const result2 = doOperation(subtract, 8, 2); // Calls subtract(8, 2)

28. How do you pass arguments to a function in JavaScript, and how can a function return a value?

Within the parentheses, using keyword 'return' (or => if it's an arrow fn with a short statement)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Topic: Function Composition and Array Methods

29. What is currying in JavaScript, and how does it help with function composition? Provide an example of currying.

A function that takes multiple arguments is transformed into a series of functions that each take a single argument.
Makes code reusable and modular.
They always have to return another function.

Example =
    function curriedCalculateTotalWithTax(price) {
    return function(taxRate) {
        const taxAmount = price * (taxRate / 100);
        return price + taxAmount;
    };
};
const calculateTotalForPrice = curriedCalculateTotalWithTax(100); // Price: 100 (it returns a fn that takes a taxRate as parameter)
const totalWith10PercentTax = calculateTotalForPrice(10); // Tax: 10% (it returns the final value)

30. Provide an example of function composition and describe its advantages over nested function calls.

Combination or chaining multiple operations to perform complex tasks in an efficient way without creating intermediate variables.
Benefits: modularity and readability.
    Example =
    let hello = (name) => `Hello, ${name}`;
    let toUpperCase = (string) => string.toUpperCase();
    let greet = (stringName) => hello(toUpperCase(stringName));

31. Describe various array methods such as map, filter, reduce, and forEach, and provide examples of their usage.

.map() => a new array where every element went through its callback
.filter() => a new array that returns only elements that passed the callback
.reduce() => a new value that is the accumulation of the callback
.forEach() => NO new array, only iterates every element through its callback

32. How do you create and initialize objects using object literals and the "new" keyword in JavaScript? How can you access, modify, and delete object properties?

    Object literal = 
    let obj = {a:1};

    New = 
    function Obj(parameterProperty) {
        this.a = parameterProperty;
        //methods go here this.method = function(){}
    };
    const obj = new Obj(1); // {a:1}

    class Obj{
    constructor(parameterProperty){
         this.a = parameterProperty;
        }
        //methods go outside constructor()
    };
    const obj = new Obj(1); // {a:1}

You can acces an object propety through dot notation if you know the name of the property or through brackets.
You can modify an object like this =
    object.property = newValue
    object["property"] newValue
You can delete a property like this =
    delete object.property

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Topic: Prototypes and Object-Oriented Programming

33. What is the prototype in JavaScript, and how does it work with objects? Explain the prototype chain.

JavaScript first looks for a property directly on the object. If it doesn't find the property, it then looks at the object's prototype, and if it's not 
found there, it continues to look up the prototype chain until the property is found or the chain ends with the built-in Object.prototype.

34. How do objects, prototypes, and property descriptors tie together to form the foundation of object-oriented programming in JavaScript?

Objects can be constructed from prototypes with the keyword 'new', they inherit their methods and properties thanks to the prototype concept,
every property in an object has 6 property descriptors (value, configurable, enumerable, writable, getter, setter).

35. How do you create an object in JavaScript using constructor functions or classes? Provide examples of both approaches.

    Constructor Function =
    function Obj(parameterProperty) {
        this.a = parameterProperty;
        //methods go here this.method = function(){}
    };
    const obj = new Obj(1); // {a:1}

    Classes = 
    class Obj{
    constructor(parameterProperty){
         this.a = parameterProperty;
        }
        //methods go outside constructor()
    };
    const obj = new Obj(1); // {a:1}

36. Explain the attributes in a property descriptor, such as value, writable, enumerable, and configurable.

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

37. What are accessor properties, and how can you define them using get and set in property descriptors?

Accesor properties allow us to retrieve and update a value in an object.
You have to use keyword 'get' and 'set' = 

    const obj = {
        _value: 0, // Private property
        get value() {
            return this._value;
        },
        set value(newValue) {
           this._value = newValue;    
        }
    };
    const value = obj.value //calls the getter
    obj.value = newValue //calls the getter  (doesn't return anything)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Topic: Arrays

38. Explain the difference between the splice and slice methods in JavaScript arrays. How are they used, and what are the key distinctions in their behavior? Provide examples to illustrate their usage.

.slice() does not modify original array, .splice() does
.slice() returns new array with selected elements, .splice() returns new array with removed elements
.slice() takes two optional arguments: start and end. It extracts elements from the start index up to (but not including) the end index.
.splice() takes at least two arguments: start and deleteCount, starts at the start index and removes deleteCount elements. You can also provide additional elements to insert at that position.

    const originalArray = [1, 2, 3, 4, 5];

    const newArray = originalArray.slice(1, 4);
    console.log(newArray); // Output: [2, 3, 4]

    const removedElements = originalArray.splice(1, 2, 6, 7);
    console.log(removedElements); // Output: [2, 3]
    console.log(originalArray);   // Output: [1, 6, 7, 4, 5]

39. How can you loop through an array using a for loop, and what are the benefits of using array methods like forEach instead?

    for(initialization; check condition; operation in the end of every cycle ){
        //code
    }

    array.forEach(element=>{
        //code
});

forEeach is more readable, is less prone to mistakes by developer and has an implicit iteration

40. How do you create a multidimensional array in JavaScript, and how do you access and modify elements in such arrays?

Writing and array as an element of the containing array. We iterate them using a for loop inside a for loop.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Topic: Strings and Template Strings

41. What are strings in JavaScript, and how do you create a string variable? Describe the difference between single quotes (''), double quotes ("") and backticks (``) when defining strings.

Strings are a data type in JavaScript, you create a string adding quotes, double quotes or backtics to a piece of text.
Single quotes and double quotes work the same, they both need backslash to escape a character
Backticks have more power, you don't need to escape characters and they allow interpolation of variables and code with %{} syntax

42. What are template strings (or template literals) in JavaScript, and how are they different from regular strings? How do you create a template string, and what benefits do they offer over traditional strings?

They have more power and flexibility, you can add interpolation of variables, expressions, they read blank spaces and you don't have to escape special characters.

43. Describe how you can use String methods like toUpperCase, toLowerCase, trim, split, indexOf, substring, etc., to manipulate and extract information from strings.

you have to apply that method to a string
.toUpperCase() => new string with all CAPITAL letters
.toLowerCase() => new string with small letters
.trim() => new string without blank spaces
.split() => returns an array of elements separated by the delimitator parameter
.indexOf() returns the index of the first occurrence of a specified substring in a string
.lastIndexOf() does the same but searches backward from the end
.substring() => new string (start, upToIncluding) 
.substr(start, amountOfCharacters) => similar to .splice() for arrays (doesn't modify original string tho, and doesn't take more arguments)

44. How can you concatenate strings in JavaScript using traditional methods, and how does it compare to concatenation with template strings? Provide examples of both approaches.

we concatenate using the + operator, 
using the .concat(everyString, we, wantTo, concatenate) method,
with template literals we just type the string, not using a operator or method

45. What is the difference between a tagged template literal and a regular template literal? How can you use tagged template literals to customize string interpolation behavior?

regular tempalte literal involes a string and interpolation of variables and expressions
tagged tempalte literals involves calling a function that returns a string

*/

