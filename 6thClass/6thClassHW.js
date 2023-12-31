//TASK 1a
const person = {}

Object.defineProperties(person, {
    firstName: {
        value: "John",
        writable: false,
        enumerable: true, //it won't console.log without this property
        configurable: true //so we can modify attribute properties in the future
    },
    lastName: {
        value: "Doe",
        writable: false,
        enumerable: true, //it won't console.log without this property
        configurable: true //so we can modify attribute properties in the future
    },
    age: {
        value: 30,
        writable: false,
        enumerable: true, //it won't console.log without this property
        configurable: true //so we can modify attribute properties in the future
    },
    email: {
        value: "john.doe@example.com",
        writable: false,
        enumerable: true, //it won't console.log without this property
        configurable: true //so we can modify attribute properties in the future
    }
})

//TASK 1b
Object.defineProperty(person, "updateInfo", {
    value: function (newObj) {
        //we form an array from the keys from newObj obj and we iterate over every [key]
        Object.keys(newObj).forEach((key) => { //firstName,lastName,age,email...

            //we get every properties [[descriptor]] from person obj
            const propertyDescriptor = Object.getOwnPropertyDescriptor(person, key);

            if (propertyDescriptor.writable === true) {
                //we define new property in original person obj, using new [key] from newObj obj
                Object.defineProperty(person, key, {
                    value: newObj[key],
                    writable: false,
                    enumerable: true,
                    configurable: true
                })
            } else throw new Error("Writable is set to false, must be set to true to modify property")
            //we modify writable to true to change data
            /* propertyDescriptor.writable = true */
        });
        return person;
    },
    writable: false,
    enumerable: true,
    configurable: true
});

// console.log("original person:", person);
// console.log("original person descriptors:", Object.getOwnPropertyDescriptors(person))
// person.updateInfo({ firstName: "Jane", age: 32 });
// console.log("updated person:", person);
// console.log("updated person descriptors:", Object.getOwnPropertyDescriptors(person))

//TASK 1c
Object.defineProperty(person, "address", {
    value: {},
    // writable: false,
    enumerable: false,
    configurable: false
});

// console.log(person)//change enumerable to TRUE to check it

//TASK 2a
const product = {}

Object.defineProperties(product, {
    name: {
        value: "Laptop",
        writable: false,
        enumerable: false
    },
    price: {
        value: 1000,
        writable: false,
        enumerable: false
    },
    quantity: {
        value: 5,
        writable: false,
        enumerable: false
    }
})

Object.defineProperty(product, "getTotalPrice", {
    value: function () {
        //multiplt value from price and quantity, binding let us use "this" for refference to product
        return Object.getOwnPropertyDescriptor(this, "price").value * Object.getOwnPropertyDescriptor(this, "quantity").value
    }
})

// console.log(product.getTotalPrice())

//TASK 2b
Object.defineProperty(product, "deleteNonConfigurable", {
    value: function (object, propertyName) {
        try {
            if (!object[propertyName]) throw new Error(`Property '${propertyName}' does not exist in the object`);
            const propertyDescriptor = Object.getOwnPropertyDescriptor(object, propertyName);
            if (!propertyDescriptor.configurable) {
                throw new Error(`Property '${propertyName}' can't be deleted`);
            }
            delete object[propertyName];
            return "deleted";
        } catch (error) {
            console.error(error);
            return "not deleted";
        }
    }
})

// console.log(product.deleteNonConfigurable({ name: "dani", age: 35 }, "age"))
// console.log(product.deleteNonConfigurable({ name: "dani", age: 35 }, "ageeee"))

//TASK 3a, 3b, 3c
const bankAccount = {
    _balance: 1000, //it has to include the "_" character or it won't console.log
    get formattedBalance() {
        return `$${this._balance}`;
    },
    set balance(input) {
        if (typeof input !== 'number') throw new Error('pass in a number');
        this._balance = input;
    },
    transfer: function (toAccount, amount) {
        //input validation
        if (typeof amount !== "number" || amount < 0) throw new Error("amount must be a positive number")
        //input validation
        if (amount > this._balance) throw new Error("not enought money in balance")
        //we substrac the amount to the current balance from this object
        this.balance = this._balance - amount
        //we use the setter FN from the toAccount object (we pass toAccount._balance plus the amount)
        toAccount.balance = toAccount._balance + amount;
    }
}

// console.log(bankAccount.balance = "abc") //error

// const targetAccount = Object.create(bankAccount);
// console.log("bankAccount before transfer()", bankAccount.formattedBalance); // output "$1000"
// console.log("targetAccount before transfer()", targetAccount.formattedBalance); // output "$1000"
// bankAccount.transfer(targetAccount, 100);
// console.log("bankAccount post transfer()", bankAccount.formattedBalance); // output "$900"
// console.log("targetAccount post transfer()", targetAccount.formattedBalance); // output "$1100"
// bankAccount.transfer(targetAccount, -500);
// bankAccount.transfer(targetAccount, 9999999999);

//TASK 4a, b
function createImmutableObject(object) {
    //create empty object to store the inmutable copy
    let copyObj = {}
    //iterate over every key in "object" parameter
    for (const key in object) {
        //we get every attribute from every key that "object" parameter has
        const propertyAttributes = Object.getOwnPropertyDescriptor(object, key);
        //validate that an input is type of object to continue with recursion
        if (typeof propertyAttributes.value === "object")
            //we invoke createInmutableObject passing as parameter that value that is type object
            propertyAttributes.value = createImmutableObject(propertyAttributes.value)

        propertyAttributes.writable = false;
        propertyAttributes.configurable = false;

        //we populate the copyObj object with keys and their attributes
        Object.defineProperty(copyObj, key, propertyAttributes)
    }
    return copyObj
}

// let newObj = createImmutableObject(person)
// console.log(newObj)
// newObj.age = 5000
// console.log(newObj)

//TASK 5a, b 
//NOT FULLY WORKING THE WAY I INTEND, I AM STUCK
function observeObject(obj, callback) {
    //PROXY class creates a "copy" of the object
    return new Proxy(obj, {
        //target is the original object, receiver is the proxy object
        get(target, property, receiver) {
            //when accesing a property the callback is invoked
            //"property" is passed from the getter function
            callback(property, "get");
            return target[property];
        },
        //target is the original object, receiver is the proxy object
        set(target, property, value, receiver) {
            //when updating a property the callback is invoked
            //"property" is passed from the getter function
            callback(property, "set");
            //setting object property with new value
            target[property] = value;
            return true;
        },
    });
}
const callBackForObserveObject = (objProperty, action) =>
    console.log(`objProperty name: "${objProperty}", action: "${action}"`);
//we create a copy of "person"
const proxyPerdonObj = observeObject(person, callBackForObserveObject);
//we trigger the callback inside the getter
// console.log("age", proxyPerdonObj.age); //output: objProperty name: "age", action: "get" AND 30 (from the return statement inside getter)
// //we trigger the callback inside the setter
// proxyPerdonObj.age = 9999; //output: objProperty name: "age", action: "set"

//TASK 6
function deepCloneObject(obj) {
    //validation, if it's not an object, no reason to clone it
    if (obj === null || typeof obj !== "object") return obj

    //we ask if it is an array or an object and store in initialOutput
    const initialOutput = Array.isArray(obj) ? [] : {}

    //we iterate over every key and recursively invoke
    //deepCloneObject() with the key from the object 
    //during that iteration
    return Object.keys(obj).reduce((acc, key) => {
        acc[key] = deepCloneObject(obj[key]);
        //the acumulator is the cloned object
        return acc
    }, initialOutput) //initial value of acc is an empty []||{}
}

const obj = {
    a: 1,
    b: "abc",
    c: [1, 2, 3, 4], //5 pushed
}

// const objClone = deepCloneObject(obj)
// obj.c.push(5)
// console.log("original obj with pushed 5", obj)
// console.log("objClone", objClone)

//TASK 7
//NOT SURE IF I UNDERSTOOD THE ASSIGNMENT
function validateObject(obj, schema) {
    //input validation
    if (typeof obj !== "object" || typeof schema !== "object" || obj === null || schema === null) return false;

    let isValid = true; // Initialize isValid variable with TRUE value

    for (const property in schema) {
        //checks if property of schema exists
        if (!(property in obj)) {
            isValid = false;
            //stops loop if property is missing
            break;
        }

        //checks for property types in object that don't match the ones in schema
        if (typeof obj[property] !== schema[property]) {
            isValid = false;
            //stops loop if property type doesn't match
            break;
        }

        switch (property) {
            case "firstName":
            case "lastName":
                isValid = typeof obj[property] === "string" && obj[property].trim().length > 0;
                break;

            case "age":
                isValid = typeof obj[property] === "number" && obj[property] > 0;
                break;

            case "email":
                isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(obj[property]);
                break;

            default:
                isValid = false;
                break;
        }
        //if at any moment isValid === false, we stop the loop
        if (!isValid) break;
    }
    return isValid;
}

const personSchema = {
    firstName: "string",
    lastName: "string",
    age: "number",
    email: "string",
};

const person1 = {
    firstName: "testFirstName",
    lastName: "testLastName",
    age: 40,
    email: "email@email.com",
};

const person2 = {
    firstName: "",
    lastName: "testLastName",
    age: 40,
    email: "mail@test.com",
};

const person3 = {
    firstName: "firstNameTest",
    lastName: "lastNameTest",
    age: -999,
    email: "emailemail",
};

// console.log(validateObject(person1, personSchema)); //true
// console.log(validateObject(person2, personSchema)); //false
// console.log(validateObject(person3, personSchema)); //false
