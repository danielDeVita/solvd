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

