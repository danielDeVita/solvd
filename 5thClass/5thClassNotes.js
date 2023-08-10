/* 

Functional Programing in JavaScript:

Functions of first class:
- Functions can be assigned to variables or passed as arguments.
- They are also returned from other functions and used in expressions like map, filter etc..

*Function declaration =
function doSomething(a) {
    //do something with a
};

*Function expression =
var doSomething = function (b){
    //do something with a
    };

*Named function expression =
const doSomething = function doSomething(){
    //some code
};

*Arrow function =
let doSomething = () => //some code;

*********************************

*Default parameters could be assigned with = operator in arguments


*Spread operator=
const args = [2,"hello"]
doSomething(...args)

This will pass 2 & "Hello" separately into the argument list for 'doSomething'

*********************************

*const doSomething = ({p1=1,p2=2})=>some code

this is called destructuring assignment which assigns default values if p1/p2 not provided while
calling this method


*Without "return" keyword, the function won't give us anything (or implicit return in arrow FN) back

*********************************

Closure=
A closure refers to an inner function that has access to its outer scope even after it returns. In
JavaScript, closures are created every time we create a nested function inside another one - these new
functions have access to all variables and functions defined within their parent scopes, including any
parameters or arguments passed down from those parents

const doSomething = () => {
    const doSomethingElse = () => {}
    return doSomethingElse()
}

*********************************

Scope of the key word "this" inside an object=
in arrow function, "this" points to an outer context
in usual/normal function, "this" points to the property refered
usual/normal functions are better practice within an object

*********************************

*Inmediately invoked function expression (IIFE)=
;(function(){
    //code here...
    })();
 
The function is runed inmediately after it is defined

*********************************

*Hoisting functions=

doSomething()
function doSomething(){}
[this will work]

doSomething()
var doSomething = function(){}
[this won't work, var hoits but only the declaration, not the function it contains]
Type Error


doSomething()
let doSomething = function(){}
[error: let and const don't hoist]
Refference Error

*********************************

Arrow functions=
if we want to return an object with the short syntax (not using "return" keyword)
we must enclose the object within braces:

const sum = (a,b)=>({value:a+b})
sum(2,3)=>{value:5}

*********************************

Closure=
A closure is a special kind of scope that allows a nested function access its lexical scope even when
the outer function has returned or executed.

const prepareBark = dog => {
    const say = dog + " barked"
    return ()=>console.log(say)
}

const rogerBark = prepareBark("Roger")
const tommyBark = prepareBark("Tommy")
rogerBark() // output: Roger barked
tommyBark() // output: Tommy barked

*********************************

Pure Functions:
-idempotent (always same result if same arguments)

-no side effects= (it shouldn't affect other variables or state)
let evenCounter = 0
let oddCounter = 0
function isEven(n){
    if(n%2==0){
        evenCounter++;
        return true
    }else{
        odCounter++
        return false
    }
}
[this function is not pure]

1)More readable
2)Faster execution time, better for optimization
3)Better and easier for testing

*********************************

High Order Functions=
Functions which take functions as input/output parameters are called High order functions
Examples : map(), filter(), reduce(). etc..
If they apply for one of those criteria, they are HOF

*********************************

Caching=
Storing the results of expensive operations so that we can reuse them later without having to recalculate it

function cached(fn){
    const cache = {}
    return function cachedFunc(str){
        if(!cache[str]){
            let result = fn(str)
            cache[str] = result
        }
        return cache[str]
    }
}
    
*********************************

Lazy functions=
A lazy evaluation means a computation is performed only when its
value is needed. It helps in improving performance

let date = null
function f(){
    if(date){
        return date
    } else{
        date = new Date()
        return date
    }
}

const fn = function(){
    const d = new Date()
    return ()=>d
}

*********************************

Currying=
currying over information from previous calculations 
or computations and using this carryover value instead of 
starting again

add(a,b,c) => add(a)(b)(c)
(only 3 args) => (as many as we want/need)

*********************************

Composition=
combination or chaining multiple operations to perform complex tasks
in an efficient way without creating intermediate variables

atomic responsabilities!!!

function(x){
    let uC = x.toUpperCase()
    let greet = "Hello, "+uC
    return greet
}
[not using composition, many operations for one FN]

let hello = (x) => `Hello, ${x}`
let toUpperCase = x => x.toUpperCase()
let greet = x => hello(toUpperCase(x))
[using composition, works better!!!]

*/
