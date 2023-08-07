/* 

EXCEPTIONS:

let obj = {a:42}
let empty = null
let fn = (item)=>item.a

fn(obj) => everything OK

fn(empty) => error, program will stop at that moment
to manage it we use try/catch/finally

if we have dangeours moment in code (like reading a file),
but if user sends a file that doesn't exist, we will recieve
an error, because we can't find that file

try {
//runs when things go well
fn(empty)
}catch(e){
//runs when error happens
console.log(e)=>"can not read property of null"
}finally{
//it's optional, ie: for closing a connection
we use it to execute code from TRY block that couldn't be
executed because it went to the CATCH block
}

you can write try/catch inside a try/catch:
try{
    try{

    }catch(e){

    }
}catch(e){

}

throw new Error("message")
throws an exception and stops execution

********************
********************
********************

Automatic semicolon insertion:

JavaScript automatically inserts semicolons at the end of each 
statement if they are missing or inserted by mistake
if you don’t put ; at the end of your statement, JS will 
automatically insert one after the last token in 
this line (or before if there is no tokens).

when to add semicolon:
1) next line starts from }
2) in the end of the program
3) in the end of line with "return"
4) in the end of line with "break"
5) in the end of line with "throw"
6) in the end of line with "continue"
7) next line break current code:

examples=

const a = "hey"
const b = "hey"
const str = a + " " + b (needs semicolon here)
["h", "e", "y"].map(x => x.toUpperCase())

it will say that it can't read property of undefined,
it needs a ";" after const str = a + " " + b
other wise it reads
const str = a + " " + b["h", "e", "y"].map(x => x.toUpperCase())

/////////////////

const a = 1
const b = 2
const c = a + b (needs semicolon here)
(a+b).toString()

it will read:
const c = a + b(a+b).toString()
like if "b" was a function

/////////////////

const fn = () => {
    return {
        a:42
    } (it will add a semicolon here)
}

fn().a 

this will throw an undefined, because it will add a semicolon
after the return statement

/////////////////

1 + 1 (needs a semicolon here)
-1 + 1 === 0 ? alert(0) : alert(2)

it goes to alert(2), it reads
1 + 1 -1 + 1 === 0 ? alert(0) : alert(2) (CAREFULL!!!)

********************
********************
********************

STRINGS:

using single quotes ('') or double quotes ("")

const multiline = 'this is the first \n This is second'
\\ ===> to use back slash and not skip line
\t ===> to use tabulation

const str = 'You can\'t' ===> to use single quotes inside of
single quotes

you can use double quotes and single quotes to avoid
escaping \

/////////////////

es6 brought us backquotes (``)

const es6 = `A string
on multiple lines`

we also use them for template literals:
`${variable}`

1) Multiline text (no need for \n)
2) Interpolation (${})=>send values to a string
3) Tag templates:
function tag(strings, ...expressions){
    console.log(strings)
    console.log(expressions)
}
const str = tag`first ${true} and ${false}`
strings: ['first ', ' and ', '']
expressions: [true, false]
str: undefined

another example of Tag Templates:

function brackets (strings, ...expressions){
    let finalString = "";
    expressions.forEach((value,i)=>{
        finalString+=`${strings[i](${value})`}
    })
    finalString+=strings.at(-1)
    return finalStrings
}

const str = brackets`a: ${42}, b: ${1}`
str=> a: (42), b: (1)

*/