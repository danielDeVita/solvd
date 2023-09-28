//helper that checks if boolean is true
const isBooleanTrue = value => value === "true";

//helper that checks if boolean is false
const isBooleanFalse = value => value === "false";

//helper that checks if value is null
const isNull = value => value === "null";

//helper that checks if a string is representing a number
const isNumber = value => !isNaN(Number(value));

//fn that accumulates strings into a array of tokens
function tokenizer(input) {
    let current = 0; //counter for current position of string
    const tokens = []; //storing variable

    //looping through each character in the input string
    while (current < input.length) {
        let char = input[current]; //current character

        //if "{" it means it is the opening for an object
        if (char === "{") {
            tokens.push({ type: "BraceOpen", value: char }); //we push an object with the actual character and the type/name of character
            current++; //increment cursor by one to move forward
            continue; //we skip the rest of code/if statements and start new iteration of the loop
        }

        //if "}" it means it is the closing for an object
        if (char === "}") {
            tokens.push({ type: "BraceClose", value: char });
            current++;
            continue;
        }

        //if "[" it means it is the opening for an array
        if (char === "[") {
            tokens.push({ type: "BracketOpen", value: char });
            current++;
            continue;
        }

        //end of an array...
        if (char === "]") {
            tokens.push({ type: "BracketClose", value: char });
            current++;
            continue;
        }

        //we check if char is a colon, used to separate keys from values in an object
        if (char === ":") {
            tokens.push({ type: "Colon", value: char });
            current++;
            continue;
        }

        //we check if char is a comma, used to separate elements in an array or properties in an object
        if (char === ",") {
            tokens.push({ type: "Comma", value: char });
            current++;
            continue;
        }

        //checks for strings
        if (char === '"') {
            //we extract string right after the ' " ' (double quote) and return an array of matching substrings (we only keep the first one)
            let value = input.substring(current + 1).match(/[^"\\]*(?:\\.[^"\\]*)*/)[0];
            //we move "current" the same amount of character of the string plus 2 (counting for opening and closing double quotes)
            current += value.length + 2;
            tokens.push({ type: "String", value });
            continue;
        }

        //checks numbers, booleans, and null values
        if (/[-\d\w]/.test(char)) {
            //If it's a number or a word character:
            let value = ""; //storing variable
            while (/[-\d\w]/.test(char)) { //as long as char matches the current expression
                value += char; //we accumulate every char that passes the condition with regex
                char = input[++current]; //we move to the next character of the string
            }

            //checks the type of value
            if (isNumber(value)) tokens.push({ type: "Number", value });
            else if (isBooleanTrue(value)) tokens.push({ type: "True", value });
            else if (isBooleanFalse(value)) tokens.push({ type: "False", value });
            else if (isNull(value)) tokens.push({ type: "Null", value });
            else throw new Error("Unexpected value: " + value);

            continue; //if the value has been 'tokenized' we start next iteration with following character of the string
        }

        //checks if current character is a space
        if (/\s+/.test(input.substring(current))) {
            //extracts substring form current position, checks if it is a white space, gets first element of array and uses it to move current
            current += input.substring(current).match(/\s+/)[0].length;
            continue;
        }

        //error handling
        throw new Error("Unexpected character: " + char);
    }

    return tokens; //returns array of tokens
}

//actual convertion of strings (tokens) into javaScript
const myJSONParse = (tokens) => {
    if (!tokens.length) { //error handling
        throw new Error("Nothing to parse. Exiting!");
    }
    let current = 0;

    //helper to advance to next token
    const advance = () => tokens[++current];

    //converts string into 'real' value
    function parseValue() {
        const token = tokens[current];
        switch (token.type) {
            case "String":
                return token.value; //return string value directly
            case "Number":
                return Number(token.value); //returns number value directly
            case "True":
                return true;
            case "False":
                return false;
            case "Null":
                return null;
            case "BraceOpen":
                return parseObject(); //recursively parse an object
            case "BracketOpen":
                return parseArray(); //recursively parse an array
            default:
                throw new Error(`Unexpected token type: ${token.type}`);
        }
    }

    //object parser fn
    function parseObject() {
        const obj = {};
        let token = advance(); //we skip the "{"

        while (token.type !== "BraceClose") { //loop until it meats a "}"
            if (token.type === "String") {
                const key = token.value; //creates variable that holds the actual string
                token = advance(); //moves one character
                if (token.type !== "Colon") { //error handling (" : " separate an object's keys from values)
                    throw new Error("Expected : in key-value pair");
                }
                token = advance(); //moves forwards (skips ':')
                const value = parseValue(); //recursively parse the value (previous fn that returns the converted data)
                obj[key] = value;
            } else {
                throw new Error(
                    `Expected String key in object. Token type: ${token.type}`
                );
            }
            token = advance(); //moves to the next token
            if (token.type === "Comma") token = advance(); //if token is " , ", it moves forward again
        }
        return obj;
    }

    //fn that parses arrays
    function parseArray() {
        const node = { type: "Array", value: [] }; //storing variable

        let token = advance(); //moves token pointer forward (and skips " [ ")

        while (token.type !== "BracketClose") { //as long as it doesn't found a " ] " (closing array), it will iterate 
            const value = parseValue(); //converts the current value
            node.value.push(value); //adds value to the storing variable

            token = advance(); //moves one character forward
            if (token.type === "Comma") token = advance(); //if it is a comma it moves another character more (commas separate elements in array)
        }
        return node.value; //return an array with only the parsed values
    }
    const AbstractSyntaxTree = parseValue(); //entry point that parses the original JSON
    return AbstractSyntaxTree; //return parsed JavaScript object
};

//test
let result = myJSONParse(
    tokenizer(`{
        "id": "647ceaf3657eade56f8224eb",
        "index": 10,
        "negativeIndex": -10,
        "anEmptyArray": [],
        "notEmptyArray": [1, 2, 3,"string", true, null],
        "boolean": true,
        "nullValue": null,
        "nestedObject": {
            "nestedString": "Hello World",
            "nestedNumber": 42,
            "nestedArray": [true, false]
        },
        "complexArray": [
            {
                "name": "Alice Alice",
                "age": 28,
                "hobbies": ["Reading", "Painting"]
            },
            {
                "name": "Bob Bob",
                "age": 32,
                "hobbies": ["Gaming", "Cooking"]
            }
        ]
    }`)
);

console.log(typeof result, result);
