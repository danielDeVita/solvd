/* 

ARRAYS definition=
-it is a reserved space in memory
-item_size * count (to know how much memory to use)
if you want to look up for 31st element it will be:
31=>array_pointer + item_size * 30

-if you want to add another element to the array, the compiler
won't add another block to the array, it will find another
place in memory for the 32 elements array

-how to create arrays:
const a = [] //and push elements
const a = [1,2,3,4] //coding elements
const a = Array.of(1,2,3,4) //[1,2,3,4]
const a = Array(6).fill(1) //[1,1,1,1,1,1]
const a = new Array(1,2,3) //[1,2,3] NOT RECOMMENDED

-they work by reference, not data/value

METHODS:

.length = shows how many elementes an array has

every(item,index,array) = returns boolean if all elements check
a.every(x=>x%2===0) //to check if every element is even

some() = returns boolean if at least one element checks
a.some(x=>x%2===0)

THE FOLLOWINGS ARE IDEMPOTENT, THEY WON'T CHANGE ORIGINAL ARRAY
THEY WILL RETURN A NEW ARRAY

map(item,index,array) = returns new array
a.map(x=>x*2) //[2,4,6,8]

filter() = cretes new array with elements that follow a validation/rule
a.filter(x=>x%2===0) //[2,4]

reduce(accumulator,item,index, array), startingAccumValue = it simplifies an array to just one value
startingAccumValue is an object by default
a.reduce((acc,item)=>{item*accum},1) // 24, from [1,2,3,4]

LOOPS AND INTERATION CYCLES=


///////////////////
forEach() = it doesn't returns anything, only looks in array
a.forEach(x=>console.log(x))

///////////////////
for...of = iterates over iterable objects (like an array)
for(let value of a){
    console.log(value)
}

///////////////////
for...in = iterates over keys of an object
for(let key in a){
    console.log(key)
}

///////////////////
for(initialization; check condition;operation in the end of every cycle ){
    //code
}
we can use "continue" to skip to next iteration
           "break", to end the loop at any given iteration


initialization is started once before commencing the loop
for(let i = 0; i<a.length;i++){
    console.log(a[i])
}

///////////////////
@@iterator
Symbol.iterator
const a = [1,2,3]
let it = a[Symbol.iterator()]
it.next()=>{value:1,done:false}
it.next()=>{value:2,done:false}
it.next()=>{value:3,done:false}
it.next()=>{value:undefined,done:true}

let it = a.reverse()[Symbol.iterator()]

let it = a.entries()

it.next().value=>[0,1]->[]->????

let it = a.keys()
it.next().value => 0->1->2


MODIFYING AN ARRAY (not idempotent)=

a.push(4) //a=[1,2,3,4] 

a.unshift(0) // a=[0,1,2,3,4] adds element to the start

a.pop() => it returns last element and removes it from array
a=[0,1,2,3]

splice(startIndex, deleteCount, ...any parameters as needed)
const a = [1,2,3,4,5,6]
a.splice(2,3,"a","b") => [1,2,'a','b',6]
we start removing from index 2 (3)
we should remove 3 elements (3,4,5)
we add "a" and "b" where those elements deleted were

const c = a.conct(b) //to merge 2 arrays
const c = [...a,...b] //sames as spread operator

indexOf: 

[1,2,5,3,5,6,7]

indexOf(5)=>it returns 2 (first index that found 5 value)

indexOf(33)=>-1 (not found)

lastIndexOf(5)=>4 (last index that found 5 value)

find:
it recieves a function
a.find(x=>x%2===0) =>it returns first element that fullfils 
that condition

includes:
check if a value is in an array. returns boolean
a.includes(5)=>true
a.includes(33)=>false

**********************************************

GETTING A PART OF AN ARRAY=

slice:
slice(startIndex, endIndex)
const a = [1,2,3,4,5,6,7,8,9]
a.slice(4) =>[5,6,7,8,9]
a.slice(3,7)=>[4,5,6,7]

CONVERT TO STRING=

a.toString()

a.join(separator = ",") //default value is comma
a.join(', ')=>"1, 2, 3,4, 5, 6" //comma and space

HOW TO COPY ARRAYS=

Array.from(...a)
Array.from("hello")=>["h","e","l","l","o"]

const b = [...a] with spread operator

**********************************************

MORE LOOPING AND CYCLE ITERATION=

while(condition){
    while condition is true, cicle will repeat
    watch out infinite loop
}

do{
    this code will be run at least once
    even if condition is false
}while(condition)

BEST PRACTICES FOR LOOPING=

forEach => usual for arrays
for...in => better for objects
for...of => if you want to use "break"
for => if you want to handle current iteration/step
do...while => if you want to run one time without condition
while => for everything else

**********************************************
**********************************************

SET:
a collection of uniques items

const s = new Set()
s.add(2)
s.add(3)
s.add(2)
[2,3]

this to make an array of unique values from array with
repeated values

const a = [2,2,3,3,4,5,5,5]
const unique = [...new Set(a)]
unique = [2,3,4,5]

///////////////////
DELETE ITEMS FROM ARRAY=

fastest way:
a.length = 0
a=>[]


///////////////////
FILTER ARRAY BY FALSY VALUES= 
(useful when reading files and we have a lot of 
empty strings)
const mixed = [0,'test', "", 9, true, false, undefined]
mixed.filter(Boolean) => ['test',9,true]

*/