/* 

DATA COLLECTION IN JAVASCRIPT =

/////////////////////////////////////////////

Garbage Collection in JavaScript:

1)Reachability:
If we can reach the value we shouldn't delete it
from memory.

We won't delete these parameters by this principe =
(they are always safe)

a)Running Functions, their variables
If garbage collection runs and those FN and their variables
and parameters are saved, they won't get deleted
b)Other Functions in callstack (and their variables)
c)Global Variables

Criteria for Reachability:

-If variable is in window obj (front-end) or in global or process (nodeJS)
-If variable is linked from another object
-If you assigned 'null' to referenced obj, its reference
will be deleted
-If we reference an object but then we set original obj to
null, the first reference works, but the second won't (because it
is 'null')

/////////////////////////////////////////////

More complicated case:

function marry(man, woman){
    woman.husband = man;
    man.wife = woman
    return {
        father: man;
        mother: woman;
    }
}
let family = marry(
    {name:"John"},
    {name:"Anna"}
)

<Globlal> ---> family [[Object]] ---> father{name:John}
                                 ---> mother{name:Anna}

father is connected via WIFE to mother
mother is connected via HUSBAND to father

delete family.father (deletes [[Object]]-->Father connection)
delete family.mother.husband (deletes Mother --> Father connection, via husband)

From <Global> you can reach 'Mother', we can see father has connection Wife,
but there is no connection from [[Object]] to Father, so it gets
deleted

Other case =

family = null
it will delete [[Object]] --> Family connection
so now [[Object]] will be unreachable eventhough it has
connected objects inside

/////////////////////////////////////////////

Optimization methods:
1)Generational collection:
When a new generation of garbage collector comes out and collects all dead references,
then old generations are collected too.
If some objects "live" longer they may get unreachable.
If objects are too old they may not even get check by
Garbage collector

2)Incremental collection:
Breaks global object into chunks and checks them one at a time
Garbage collector should check links between these chunks

3)Iddle time collection:
Collects when the user is doing nothing (like a server at night)
NodeJS predicts when iddle time will be and run Garbage Collector
when the server is not busy doing something.

/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

COLLECTIONS:

-Map:
Key value pairs, Keys must be unique
Maps have fast access times O(1), but slower insert/remove operations than arrays
Useful for storing data that needs quick lookup
var map = new Map(); //empty map
var otherMap = new Map(iterable); // with entries
map.set('key','value');//adds key with value pair in map
console.log(map); //{ key :'value'}
map.get('key') //'value';
map.has('key'); true;
map.size 0;//number of elements stored in this map
map.clear();//removes everything from map
map.delete('key');//deletes element with given key if exists else does nothing
let obj = Object.fromEntries(map) //to get it as an object

-Set:
Unordered set of values, no duplicates allowed
Sets can only store primitive types like strings or numbers as keys
var mySet=new Set(iterable); 
mySet.add(value);
mySet.has(value) boolean;
mySet.values() //???
mySet.keys() [value, value2,value3] ;
mySet.size ==4;
mySet.clear(); removes all items form set
mySet.delete(value);//removes value from set
mySet.entries() [['a'],['b']] ;
mySet.forEach((val)=>{});


EXAMPLE =

let john = {name:"John"}
let map = new Map()
map.set(john, "value")
john = null

                    <global>
    [[Object name:John]]    (Map)
                                "value"

If we remove connection between <global> and [[Object]]
the "value" is still reachable through (Map)
It prevents garbage collection, won't be deleted

Weak Map:
Like a normal map except the objects are weakly referenced meaning they don't prevent garbage collection
They will not prevent garbage collection unless there's another reference to them somewhere

let map = new Weak Map () 

it doesn't have .size() or .keys()
it is not iterable
only:
.get(key)
.set(key,value) 
.has(key) 
.delete(key)

Weak Set:
A special type of set that holds references to its members but allows for their deletion when there aren’t any other references left in memory

/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

JSON =

Types of data:
-JSON-objects
-arrays
-string
-number
-literals(true, false, null)

NO undefined
NO date (it is parsed as a string)

brackets and always DOUBLE quotes and NO trailing comma

{
    "name":"John",
    "age": 50,
    "education": null,
    "adress":{
        "city": "Gdanks"
    },
    "some value": [1, "value", true]
}

JSON.stringify():
it will skip functions, symbols and undefined properties (converts them to null)

let a = {
    b:23
}
a.c = a
(that aboce is ok in JS, but stringigy won't pase "c" key and its value)
JSON.stringify(value,[replacer, space])
replacer - function that takes the property name/value pair and returns what should be stored for it instead
space - number of spaces used when pretty printing JSON

toJSON method:
when you stringify your object it will call this method,
take care on how you present your object, compiler
won't do it for you

/////////////////////////////////////////////

JSON.parse(str,[review])
will parse str into an object
if review=true then it will check if there are no errors with parsing

*/