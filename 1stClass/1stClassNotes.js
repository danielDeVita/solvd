/* 
###### 
Memory Heap =
Like a binary tree, on the left branch the value is lesser, on the right branch it's higher

###### 
Max Heap =
Parent element is the max value always
left child = 2 * index + 1
right child = 2 * index + 2

###### 
Call Stack =
It's a data structure, the rule is FIRST IN & LAST  OUT (FILO)
"push" to add element
"pop" to remove element
"check" to see if it's empty or not

function multiply (x,y){
    return x*y
}

function printSquare(x){
    const s = multiply(x,x)
    console.log(s)
}

printSquare(s)

call Stack:
multiply
console.log
printSquare

######
Compilers =
full-codegen
crankShaft (replace by: Ignition & TurboFan)

Streams of V8
1) main stream (read codes and runs it)
2) compilation stream (it optimizes the code)
3) analytic stream (collects information, how long a fn calls, etc...)
4) garbage collector stream (removes useless variables and frees up memory)

######
CrankShaft =
replacing functions to its "realization"
take a fn in another file, and puts its in the main file

------
this is OK in JS: (not OK in Java)
function Point (x,y){
    this.x = x
    this.y = y
}
const p1 = new Point(1,2) ==> it creates a class with hidden classes
p1.a = 5 

######
Sparse Array =
it's an array with mostly null or undefined elements,
i.e.: an array with 3 values, but memory for 1000 spaces

array is fast, with the index you know where the value is located in memory
0^^1

map is not that fast, it only optimizes for no repeated values
0^^n

######
Caching = 
idempotent functions = pure function = clear function:
(same input always returns same value)

if we call an idempotent FN too often, we can create cache

######
SUMMARY FOR OPTIMIZATING CODE =
1)respect order of properties when we initialize classes
2)no dynamic properties
3)multiple runs of the same method is better than 1 run of multiple methods
4)avoid sparse arrays

######
HM = 
perform long arithmethic algorithms 
no bigint or libraries

create 4 fn for String prototype:

String.plus(string)=>strings
String.minus(string)=>strings
String.multiple(string)=>strings
String.divide(string)=>strings

they should be able to take more than 30 digits (only positive numbers and integer)
*/
