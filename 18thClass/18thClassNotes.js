/* 

MORE REGEX = 

/^!/ = looking for str that stars with "!"
"!test" => true
"te!st" => false

/?$/ = looking for question mark at the end of str
"test?a" => false
"test?" => true

\b\ = border of a word
/cat/.test("concatenate") => true
/\bcat\b/   / => false
"I have a cat " => true (????)

/^/ = begining of the word
/[^ab] = all symbols except "a" and "b"


templates with regex =

/\b\d+ (pig|cow|chcken)s?\b/
(straight vertical lines mean OR)
"the 3 pigs"


numbers with regex =

/\b([01]+b)\b/ (regex for binary)
/\d+\b/ (regex\ for number)
\[da-f]+h\b/ (regex for hexa)


more regex = 

/^.*x/.test("abcxe") => true

/([01]+)+b/


REGEX METHODS =

replace
"test".replace("t", "o") => "oest"
"some text".replace(/[st]/g, "a") => "aome aexa"

`Hopper, Grace
Carthy, John
Richie, Dennis`.replace(
    /(\w+), (\w+)/g,
    "$2 $1"
) => "Grace Hopper John Carthy Dennis Richie"

"the cia and fbi".replace(
    /\b(fbi|cia)\b/g,
    (x)=>x.toUpperCase()
)=> "the CIA and FBI"

function minusOne(match, amount, unit){
    amount = +amount-1;
    if(amount === 0){
        amount = "no"
    }
    return amount = " "' (???)
}

stock.replace((\d+)(\w+)/g,
minusOne)


EXAMPLES =

(REMOVING BLOCK COMMENTS)

/\/\*[^]*\*\//g

??????????????????????????????
"1+ /* 2* /+3/".replace(r,"")=>"1++3"
"1/*a* /+/*b* /1"=>"11"
??????????????????????????????

**************************************
**************************************

Iteration with exact method = 

const p = /y/g

p.lastIndex = 2

p.exec("yxxyx") => {
    value:["y"], 
    index:4,
    lastIndex:5
}

another example:

while(n===r.exec(str)){
    do something
}

*/