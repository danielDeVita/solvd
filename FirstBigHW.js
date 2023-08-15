/* TASK 1 Quasi-Tagged Templates */

const translations = {
    en: {
        greet: "Hello",
        intro: "Welcome to our website"
    },
    fr: {
        greet: "Bonjour",
        intro: "Bienvenue sur notre site web"
    },
    sp: {
        greet: "Hola",
        intro: "Bienvenido a nuestro sitio web"
    },
    po: {
        greet: "Ola",
        intro: "Bem-vindo ao nosso site"
    }
};

const language = "po"; // Change to "en" for English  
const greeting = "greet";
const introduction = "intro";

function localize(staticStrings, ...taggedValues) {
    //value represents the array of interpolated variables with ${} (it's an array with just 1 element in this case)
    const message = taggedValues[0];

    //based on the "language" variable we access either "greet" or "intro" property from the "translations" object and return it
    return translations[language][message];
}

//we decide if we acces "greet" or "intro" property
const localizedGreeting = localize`${greeting}`;
//we decide if we acces "greet" or "intro" property
const localizedIntroduction = localize`${introduction}`;
// console.log(localizedGreeting); // Ola
// console.log(localizedIntroduction); // Bem-vindo ao nosso site


////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////


/* TASK 2 Advanced Tagged Template */

const keywords = ["JavaScript", "template", "tagged"];
const template = "Learn JavaScript tagged templates to create custom \${0} literals for \${1} manipulation.";

function highlightKeywords(template, keywords) {
    let templateArray = template.split(" ");
    templateArray.forEach((word, index) => {
        const highlightedKeyword = `<span class='highlight'>${word}</span>`;
        if (keywords.includes(word)) {
            templateArray[index] = highlightedKeyword;
        };
    });
    return templateArray.join(" ");
};

const highlighted = highlightKeywords(template, keywords);

console.log(highlighted);
// Expected: "Learn <span class='highlight'>JavaScript</span> tagged templates to create custom <span class='highlight'>template</span> literals for <span class='highlight'>tagged</span> manipulation."

//BUT I GET: "Learn <span class='highlight'>JavaScript</span> <span class='highlight'>tagged</span> templates to create custom ${0} literals for ${1} manipulation."


////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////


/* TASK 3 Multiline Tagged Template */

function multiline(strings, ...values) {

    //create new array at every line jump
    const arrayOfSentences = strings[0].split(`\n`);

    //accumulator variable (will hold the multiline string)
    let finalString = ``;

    //number at the begining of the line
    let counter = 1;

    //each line will be storage here during every iteration
    let line = ``;

    //iterate array of lines
    for (sentence of arrayOfSentences) {

        //if a line is an empty string, we set that sentence to "line"
        if (sentence === ``) line = sentence;
        //if it's not empty string, we set that sentence to "line" and we concatenate "counter", we also increment the counter
        else {
            line = `${counter} ${sentence}`;
            counter++;
        };
        //as long s the counter hasn't reach the last sentence, we add to "finalString" every line of code plus a line jump
        if (counter < arrayOfSentences.length - 1) finalString = finalString + line + `\n`;
        //if it reaches the last element of the array, we add every string to "finalString" variable without the line jump
        else finalString = finalString + line;
    }
    return finalString;
};

const code = multiline`
function add(a, b) {  
    return a + b;  
}
`;

// console.log(code);
