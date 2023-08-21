function square(x) {
    return x * x;
}

function sum(a, b) {
    return a + b;
}

function double(a) {
    return a * 2;
}

function compose(...fns) {
    // fill here
    let result;
    return function (...arguments) {
        let moreArguments = arguments
        for (let i = fns.length - 1; i >= 0; i--) {
            moreArguments = [fns[i](...moreArguments)];
        }
        result = moreArguments;
        return Number(result);
    };
}

const calculateSquareOfSum = compose(square, sum);

const calculateDoubleSquareOfSum = compose(double, square, sum);

const result = calculateSquareOfSum(3, 4);
console.log("Result:", result);

const result_double = calculateDoubleSquareOfSum(3, 4);
console.log("Result double:", result_double);