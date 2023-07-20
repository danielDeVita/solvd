/* 

PRIMITIVE DATA TYPES (continuation from 2ndClassNotes.js)=

*********************
bigint: 
it goes from (2^53 -1) until (2^53) - 1


*********************
string:
"template string"
''
`literal string`


*********************
boolean:
true or false


*********************
Null:
it means that the pointer of the variable has a link to an unexisting value
null:


*********************
undefined:
similar to null, a variable is declared but it has no value asigned to it


*********************
objects:
this variables are linked to a part in memory, with key:value relation


*********************
symbol:
a unique and immutable data type used as identifier for object properties.
similar to strings


///////////////////////////////////

TYPE CONVERSION:

typeof:
returns what kind of datatype this expression evaluates into

"number" = number
"string" = string
"boolean" = boolean
"undefined" = undefined
"null" = object
"bigint" = bigint
"symbol" = symbol
"object" = object
        = function (it is not a type of data, but it will show if typeof something === "function")


*********************
typeof null returns "object", nobody really knows why. it happens sinces earli versions, they try to delete it
in version 5 of JS, but it was used throughout the whole code

typeof NaN returns "number"

only value that it's not equal to itself:
NaN == NaN returns false
NaN === NaN returns false

Number.isNull(...) (method to check if a number is Null)


*********************
-simple data: (acces by value)
null, string, boolean, number, symbol, bigint

you know how much memory it will take

-complex data: (acces by reference)
arrays, objects, functions

you don't know how much memory it will take


*********************
let a = 1
let b = 1 (copy by value)
b++
console.log(a) // 1
console.log(b) // 2


let x = [1,2,3]
let y = x (copy by reference, they point to the same memory place)

y.push(4)
x.push(5)

console.log(x) // [1,2,3,4,5] 
console.log(y)  // [1,2,3,4,5]
(both x and y point to the same place, we don't copy the value, we only
copy the adress)


let a = "hello"
a[2]="x"
console.log(a) // "hello" (not 'hexllo')
(because strings are inmutable, they can't change... sometimes)

a.toUpperCase()
console.log(a) // "HELLO"
(sometimes strings are mutable)


*********************
TYPE CONVERSION=

-explicit: (we are actively converting the data) => only works for boolean, string and number

we have special class String where in the constructor could send value like:
String(nul)=>"null"
String(undefined)=>"undefined"
String(true)=>"true"
String(false)=>"false"
String(1)=>"1"
String(NaN)=>"NaN"
String(Symbol("abc"))=>"Symbol(abc)"
String(999999*99999999)=>"99999899000001"
String(99990999999*99999999999)=>"9.999099999800009e+21" (exponent of the number)
String({})=>"[object Object]"
String({name:"Anna"})=>"[object Object]"
String([])=>""
String([1,2,3])=>"1,2,3"



-non-explicit: (we are not actively converting the data)
example:
"a"+2 = "a2" (if one of the operands is string, it will
convert all to string)


*********************
BOOLEAN CONVERSION:
falsy values:
null, undefined, NaN, 0, -0, +0, ""

-we convert boolean values with conditions (IF condition...)

!2 will convert the number 2 to a false value

-empty arrays are true


*********************
NUMBER CONVERSION:

explicit conversion TO NUMBER:
null => 0
undefined => NaN
true => 1
false => 0
{} => NaN (empty or not)
[] => 0
[1,2,3] => NaN
Symbol("a") => TypeError Exception
NaN => 0 (? sure?)
"" => 0
Number("   4   ") => 4
Number("   4k  ") => NaN

*********************
STRING CONVERSION TO NUMBER:

explicit or non-explicit, JS will remove tabulations, new lines and spaces (\t, \n, \s)

"    123    " => "123" => 123
"123K" => NaN
"-12.34" => -12.34


comparison operators =
>,<,>=,<= (they will convert it to number)

aritmetical operators = 
-, +, *, /, % (they will convert it to number, unless one of them is string, then it will convert
to a string)

examples=
+"5"=>5 (a number type)
null == undefined => true (it is not conversion)

[1]+[2,3] (javascript will convert this to its primitive data type and then 
do the operation)

almost all objects in JS have function to convert themselves:
valueOf()
toString()

toPrimitive(input, preferedType):
inside this function we have another fn called:
isPrimitive(), usually we check:
value !== Object(value) (it is primitive if they are not the same, if they are
the same they are NOT primitive)

toString():
if (isPrimitive(input.toString())=>input.toString())
if (isPrimitive(input.valueOf)=>input.valueOf())
throw new Type Error

toNumber():
if (isPrimitive(input.valueOf)=>input.valueOf())
if (isPrimitive(input.toString())=>input.toString())
throw new Type Error

toPrimitive(): this FN has a switch inside
switch(prefered Type){
    case Number:
        return toNumber(input)
    case String:
        return toString(input)
    default:
        return toNumber(input)    
}

TO PRIMITIVE FN=

function toPrimitive(input, prefferedType) {
  const isPrimitive = (value) => value !== Object(value);

  const toString = () => {
    if (isPrimitive(input.toString())) return input.toString();
    if (isPrimitive(input.valueOf())) return input.valueOf();
    throw new TypeError();
  };

  const toNumber = () => {
    if (isPrimitive(input.valueOf())) return input.valueOf();
    if (isPrimitive(input.toString())) return input.toString();
    throw new TypeError();
  };
  switch (prefferedType) {
    case Number:
      return toNumber(input);
    case String:
      return toString(input);
    default:
      return toNumber(input);
  }
}

console.log(toPrimitive("2", "number"));


examples = (when we compare we always try to convert to NUMBER)

let x = 3
"5" + x - x => 50
    "53" - 3 => 50 
    //because string concatenation happens first before any other operations
    so it converts both operands into strings
    after that "-" operator applies on them
    which results as number
    finally result of expression becomes an integer

"5" - x + x => 5
    2 + 3 => 5

true + false => 1 + 0 

12 / "6" => 2
because division always returns float value

"number" + 15 + 3 => "number153"

15 + 3 + "number" => "18number"

[1] > null => true
Array.valueOf => Array 
"1" > 0
1 > 0
(toPrimitive function was used)

"foo" ++ "bar" => "fooNaN"

"true" == true => false
NaN = 1 

null == "" => false
(null == null and null == undefined ARE BOTH TRUE)

[] + null + 1 => "null1"
"" + null + 1
"null" + 1

*/

/* WORK IN PROGRESS */
function toPrimitive(input, prefferedType) {
  const isPrimitive = (value) => value !== Object(value);

  const toString = () => {
    if (isPrimitive(input.toString())) return input.toString();
    if (isPrimitive(input.valueOf())) return input.valueOf();
    throw new TypeError();
  };

  const toNumber = () => {
    if (input.valueOf()) return input.valueOf();
    if (isPrimitive(input.toString())) return input.toString();
    throw new TypeError();
  };

  switch (prefferedType) {
    case "number":
      return toNumber(input);
    case "string":
      return toString(input);
    default:
      return toNumber(input);
  }
}

console.log(toPrimitive("2", "number"));
