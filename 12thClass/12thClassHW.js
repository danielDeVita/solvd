/* Task 1: Implement promiseAll Function */

//CORRECTIONS: I TOOK OUT THE .FINALLY AND RESOLVE THE MAIN PROMISE WITHIN THE FOR OF LOOP

const promiseAll = arrayOfPromises => {
    //we return a Promise constructor with both callbacks for resolve and reject cases
    return new Promise((resolvedPromise, rejectedPromise) => {
        //in this array we will store the value from each resolved promise
        const values = [];
        //counter
        let counter = 0;
        //iterate over arrayOfPromises
        for (const promise of arrayOfPromises) {
            promise
                //we fulfilled each promise and store the value on the "values" array
                .then(resolvedValue => {
                    values.push(resolvedValue);
                    counter++;
                    //if counter is the same amount of promises, we resolve all promises at the end of the loop
                    if (counter === arrayOfPromises.length) resolvedPromise(values);
                })
                //if we face an error we call the reject case callback function and pass the error
                .catch(error => rejectedPromise(error));
        }
    })
};

const delay = (ms, value) => new Promise(res => setTimeout(() => res(value), ms));
const promises = [
    delay(3000, 'a'),
    delay(1000, 'b'),
    delay(2000, 'c')
];
promiseAll(promises).then(results => { console.log(results); });

// const promisesTask1 = [
//     Promise.resolve(1),
//     Promise.resolve(2),
//     Promise.resolve(3)
// ];


// promiseAll(promisesTask1)
//     .then(results => {
//         console.log("All promises resolved:", results); // Expected: [1, 2, 3]
//     })
//     .catch(error => {
//         console.error("At least one promise rejected:", error);
//     });


/* Task 2: Implement promiseAllSettled Function */

//CORRECTIONS: I TOOK THE .FINALLY OUTSIDE OF THE FOR OF LOOP

const promiseAllSettled = arrayOfPromises => {
    const results = []
    return new Promise((resolvedPromise, _rejectedPromise) => {
        for (const promise of arrayOfPromises) {
            promise
                .then(
                    //we push to 'results' an object depending on its status
                    value => { results.push({ status: 'fulfilled', value }) },
                    reason => { results.push({ status: 'rejected', reason }) }
                )
        }
        //we resolve main Promise after the loop
        resolvedPromise(results)
    });
}

const promisesTask2 = [
    Promise.resolve(1),
    Promise.reject("Error occurred"),
    Promise.resolve(3)
];
promiseAllSettled(promisesTask2)
    .then(results => {
        console.log("All promises settled:", results);
        // Expected: [{ status: 'fulfilled', value: 1 },
        //            { status: 'rejected', reason: 'Error occurred' },
        //            { status: 'fulfilled', value: 3 }]
    });


/* Task 3: Implement Chaining of Promises as a Separate Function */

const chainPromises = arrayOfFunctions => {
    //we create a resolved promise to start the chain of promises
    let resolvedPromises = Promise.resolve(arrayOfFunctions[0]);
    for (const fn of arrayOfFunctions) {
        //we concatenate .then methods until we run out of functions that return a promise
        resolvedPromises = resolvedPromises.then(result => fn(result));
    }
    return resolvedPromises;
}

function asyncFunction1() {
    return Promise.resolve("Result from asyncFunction1");
}

function asyncFunction2(data) {
    return Promise.resolve(data + " - Result from asyncFunction2");
}

function asyncFunction3(data) {
    return Promise.resolve(data + " - Result from asyncFunction3");
}

function asyncFunction4ERROR(data) {
    return Promise.reject(data + " - ERROR");
}

function asyncFunction5ERROR(data) {
    return Promise.reject(data + " - ANOTHER ERROR");
}

//I ADDED SOME MORE ASYNC FNs TO BETTER UNDERSTAND HOW IT WORKS, SORRY!
const functionsArray = [asyncFunction1, asyncFunction2, asyncFunction5ERROR, asyncFunction4ERROR, asyncFunction3];

chainPromises(functionsArray)
    .then(result => {
        console.log("Chained promise result:", result);
        // Expected: "Result from asyncFunction1 - Result from asyncFunction2 - Result from asyncFunction3"
    })
    .catch(error => {
        console.error("Chained promise error:", error);
    });


/* Task 4: Implement promisify Function */

const promisify = cbFN => {
    return function (...arguments) {
        return new Promise((resolvedPromise, rejectedPromise) => {
            //why does the error come first than result?
            cbFN(arguments, (error, result) => {
                error ? rejectedPromise(error) : resolvedPromise(result)
            })
        })
    }
}

function callbackStyleFunction(value, callback) {
    setTimeout(() => {
        if (value > 0) {
            callback(null, value * 2);
        } else {
            callback("Invalid value", null);
        }
    }, 1000);
}

const promisedFunction = promisify(callbackStyleFunction);

promisedFunction(3)
    .then(result => {
        console.log("Promised function result:", result); // Expected: 6
    })
    .catch(error => {
        console.error("Promised function error:", error);
    });
