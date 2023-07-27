const products = [
  {
    name: "originalPrice=100",
    price: 100,
  },
  {
    name: "originalPrice=80",
    price: 80,
  },
  {
    name: "originalPrice=60",
    price: 60,
  },
];

const calculateDiscountedPrice = (products, discount) =>
  products.map((product) => {
    return {
      name: product.name,
      priceWithDiscount: product.price - (product.price * discount) / 100,
    };
  });
// console.log(calculateDiscountedPrice(products, 10));

const calculateTotalPrice = (products) =>
  products.reduce((accum, product) => {
    return accum + product.price;
  }, 0);
// console.log(calculateTotalPrice(products));

/* ************************************************************************* */
/* ************************************************************************* */
/* ************************************************************************* */

const getFirstName = (person) => person.firstName;
const getSurnane = (person) => person.lastName;
const getFullName = (person) => {
  return `${getFirstName(person)} ${getSurnane(person)}`;
};
// console.log(getFullName({ firstName: "Name", lastName: "Surname" }));

/* ************************************************************************* */
/* ************************************************************************* */
/* ************************************************************************* */

const separateWords = (text) => text.split(" ");
const uniqueWords = (arrayOfWords) =>
  arrayOfWords.filter((word, i, arr) => arr.indexOf(word) === i);
const sortArray = (unorderedArray) => unorderedArray.sort();

const filterUniqueWords = (text) => {
  return sortArray(uniqueWords(separateWords(text)));
};
// console.log(filterUniqueWords("z y x w w v v u u t r"));

const students = [
  { name: "studentA", grades: [10, 9, 8] },
  { name: "studentB", grades: [7, 6, 5] },
  { name: "studentC", grades: [4, 3, 2] },
];

const calculateAverage = (grades) => {
  const gradesSum = grades.reduce((accum, grade) => accum + grade, 0);
  return gradesSum / grades.length;
};

const getAverageGrade = (students) => {
  return students.map((student) => {
    return { name: student.name, average: calculateAverage(student.grades) };
  });
};
// console.log(getAverageGrade(students));

/* ************************************************************************* */
/* ************************************************************************* */
/* ************************************************************************* */

const createCounter = () => {
  let n = 1;
  return function () {
    return n++;
  };
};

// const counter1 = createCounter();
// console.log("counter1 = 1:", counter1());
// console.log("counter1 = 2:", counter1());
// console.log("counter1 = 3:", counter1());

// const counter2 = createCounter();
// console.log("counter2 = 1:", counter2());
// console.log("counter2 = 2:", counter2());
// console.log("counter2 = 3:", counter2());

const repeatFunction = (func, n) => {
  if (n < 0) {
    return () => {
      while (n) {
        func(n);
      }
    };
  } else {
    return () => {
      for (let i = 0; i < n; i++) {
        func(n);
      }
    };
  }
};

const loggerFn = (n) => {
  if (n < 0) return console.log(`this is logging constantly`);
  console.log(`this will show up ${n} times`);
};
// const testFn = repeatFunction(loggerFn, 10);
// testFn();

// const testFn2 = repeatFunction(loggerFn, -1);
// testFn2();

/* ************************************************************************* */
/* ************************************************************************* */
/* ************************************************************************* */

const calculateFactorial = (n) => {
  if (n === 1 || n === 0) return 1;
  else if (n < 0) return "Factorial not possible for negative numbers";
  return n * calculateFactorial(n - 1);
};
// console.log(calculateFactorial(10)); // 3628800
// console.log(calculateFactorial(-10)); // "Factorial not possible for negative numbers"

const power = (base, exponent) => {
  if (exponent === 0) return 1;
  else return base * power(base, exponent - 1);
};
// console.log(power(1, 0)); //output:1
// console.log(power(2, 2)); //output:4
// console.log(power(8, 8)); //output:16777216

/* ************************************************************************* */
/* ************************************************************************* */
/* ************************************************************************* */

const lazyMap = (arr, mapFunction) => {
  return {
    //selected element by index goes through the mapFunction
    plus1toSelected: function (index) {
      return mapFunction(arr[index]);
    },
  };
};

let array = [1, 2, 3, 4, 5];
let mapFn = (x) => x + 1;
const lazyList = lazyMap(array, mapFn);
// console.log(lazyList.plus1toSelected(0));
// console.log(lazyList.plus1toSelected(1));

const fibonacciGenerator = () => {
  let prevFibo = 0;
  let nextFibo = 1;
  return {
    fibo: function () {
      const nextValue = prevFibo;
      [prevFibo, nextFibo] = [nextFibo, prevFibo + nextFibo];
      return nextValue;
    },
  };
};

const fibGen = fibonacciGenerator();
// console.log(fibGen.fibo()); //output:0
// console.log(fibGen.fibo()); //output:1
// console.log(fibGen.fibo()); //output:1
// console.log(fibGen.fibo()); //output:2
// console.log(fibGen.fibo()); //output:3
// console.log(fibGen.fibo()); //output:5
// console.log(fibGen.fibo()); //output:8
// console.log(fibGen.fibo()); //output:13
