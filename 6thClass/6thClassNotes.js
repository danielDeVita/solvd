/* 

Objects in JavaScript:

[key]:[value]

obj.a=5

obj['a']=5 ==> advantages:
with [] we don't have to know the name of the key.
we use this way when the key is in a variable,
or when it starts from a number,
or when it has specials characters (/,  , @)

example
const key = "b"
obj[key]=6 ==> obj.b=6

obj["i-am a key"] = 7 ==> this works!

*****************

prototype
__proto__
Prototype

with them is how we work with inheretance in JS

if we can find a property in an object,
we try to find it in the prototype:

const cons = function(){
    this.a=1
    this.b=2
}
const obj = new cons()
cons.prototype.b = 3
cons.prototype.c = 4

console.log(obj.a) //1
console.log(obj.c) //4

if we can't find a property in "obj", it will
look it up in the "cons" constructor,
and if it doesn't find it there it will
look it up in the Object.prototype

obj.a==>1
obj.c==>"obj" doesn't have it, it looks up in "cons"
obj.b==>2

*****************

Object creation:

1)Object literal
let obj = {a:1}
obj=>Object.prototype=>null

2)Object.create
const newObj = Object.create(obj)
newObj=>obj=>Object.prototype=>null

3)es6 Classes
class rectangle{
    constructor(height,width){
        this.height=height
        this.width=width
    }
    const getArea=()=>this.width*this.height
}

*****************

let obj={a:1}
let newObj = obj
newObj.a=2
obj.a=>2
(they point at the same place in memory, by reference, not value)

*****************

const obj = {a:1}
const obj1 = {a:1}
obj===obj1//false (differente place in memory)

BUT:
obj1=obj
obj===obj1 //true (same reference in memory)


How to clone an Object:
const obj = {
    a:1,
    b:2,
    c:3
}

const obj1 = Object.assing({},obj)
or
const obj1 = {...obj}

ANOTHER EXAMPLE FOR OBJECT CLONING

const obj = {
    a:1,
    b:2,
    c:{
        d:4
    }    
}

const obj1String = JSON.stringify(obj)
const obj1 = JSON.parse(obj1String)

HOW TO GET THE LENGTH OF AN OBJECT:

Object.keys()
Object.entries()
Object.values()

for in loop

getOwnPropertyNames()

*****************

GETTER & SETTER

cons obj = {
get name(){
    return 'Name
    }
}

obj.id = 5
console.log(obj.id)//10 (how come?)
(like this:) *SOLUTION

const obj = {
    _name:"Name",
    get name(){
        this._name
    }
    
    set name(value){
        this._name = value
    }
}

a getter is a function with NO parameters,
it returns a value, but it can skeep it
and return 'undefined'
we could chain .toUpperCase to "this._name",
therefore modifying the getter return statement

a setter is a FN that recieves 1 value and
returns nothing

Getters and Setters are useful for validations

*SOLUTION
cons obj = {
    get id(){
        this.id*2
    }
}

*****************

Property Attributes:
1) [[value]]
the value of the field itself

2) [[Get]]
for FN getter, it will be undefined if we don't write it

3) [[Set]]
for FN setter, it will be undefined if we don;t write it

4) [[Writable]]
by default it is TRUE, it means if we can rewrite it
if FALSE, the value will be a const and won't be able
to rewrite, we won't get an ERROR if we stray to use
a GETTER with it

5) [[Enumerable]]
by default it's TRUE, it shows in objectKeys() and for In
if FALSE, it won't be show in objectKeys() and for In
but it will be shown in getPropertyNames()

6) [[Configurable]]
by default it's TRUE
if FALSE it will become non-deletable

-HOW TO WORK WITH THE 6 ATTRIBUTES:

Object.getOwnPropertyDescriptors()
this methods recieves an object

-HOW TO DEFINE PROPERTIES:

Object.defineProperty(
    obj, 'b', {
        value: 42,
        writable: false,
        enumerable: false,
        configurable: true
    }
)

it recieves the object to modify, the property and then an object
with the new configuration

Object.defineProperties(obj,{
    p1:{
        //configuration
    },
    p2:{
        //configuration
    }
})

-METHOD TO PROTECT OBJECTS:

1) Object.preventExtensions(obj)
it denies object to create new properties
i.e.:
const obj = {
    a:42
}
Object.preventExtensions(obj)
obj.b=2;
if we try to console.log(obj.2) we will see "undefined"

Object.isExtensible()
to Check if an object is extensible

2) Object.seal
    under the hood it does:
        Object.preventExtensions
        all properties [[Configurable]]:false

    Object.isSealed()
    to Check if an object is sealed

3) Object.freeze()
sames as Object.seal, but it also does:
    [[Writable]]:false (for all properties)
    closes acces to properties

Object.isFrozen()
to check if Object is frozen

*/
