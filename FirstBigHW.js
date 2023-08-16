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

// console.log(highlighted);
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


////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////


/* TASK 4 Implementing Debounce Function */

function debounce(fn, delay) {
    let timeoutID;
    return function (...args) {
        if (timeoutID) {
            clearTimeout(timeoutID);
        };
        timeoutID = setTimeout(() => {
            //we have to bind the context to this function
            fn.apply(this, args);
        }, delay);
    };
};

//callback that only console-logs the query it gets from the input's event target value
function debouncedSearch(query) {
    // Perform search operation with the query  
    console.log("Searching for:", query);
};

//it holds closure from debounce with debounceSearch as callback and 2000ms as delay
const debouncedSearchHandler = debounce(debouncedSearch, 2000);

//capture the input tag with id "search-input"
const inputElement = document.getElementById("search-input");
//add event listener on every change in the input selected and we execute debounceSearchHandler with the text typed in the field
inputElement.addEventListener("input", event => {
    //we execute this function with the e.target.value as the querye that it passes to debouncedSearch
    debouncedSearchHandler(event.target.value);
});


////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////


/* TASK 5  Implementing Throttle Function */

function throttle(fn, interval) {
    let lastTime = 0;
    return function (...args) {
        let now = Date.now()
        if (now - lastTime < interval) return
        fn(args);
        lastTime = now;
    };
};

function onScroll(event) {
    // Handle scroll event  
    console.log("Scroll event:", event[0].type);
};

const throttledScrollHandler = throttle(onScroll, 2000);

window.addEventListener("scroll", throttledScrollHandler);


////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////


