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

            //we modify writable to true to change data
            propertyDescriptor.writable = true

            //we define new property in original person obj, using new [key] from newObj obj
            Object.defineProperty(person, key, {
                value: newObj[key],
                writable: false,
                enumerable: true,
                configurable: true
            });

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
function observeObject(obj, cb) { }

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
function validateObject(object, validationSchema) { }