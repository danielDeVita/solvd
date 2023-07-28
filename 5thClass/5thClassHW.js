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

const calculateDiscountedPrice = (products, discount) => {
  if (
    !Array.isArray(products) ||
    typeof discount !== "number" ||
    discount < 0 ||
    discount > 100
  ) {
    throw new Error(
      "Please pass an array of products as parameter and the discount must be a number between 0 and 100."
    );
  }
  return products.map((product) => {
    return {
      name: product.name,
      priceWithDiscount: product.price - (product.price * discount) / 100,
    };
  });
};
// console.log(calculateDiscountedPrice("hello", 10));
// console.log(calculateDiscountedPrice(products, "world"));
// console.log(calculateDiscountedPrice(products, 101));
// console.log(calculateDiscountedPrice(products, 10));

const calculateTotalPrice = (products) => {
  if (!Array.isArray(products)) {
    throw new Error("Please pass an array of products as parameter ");
  }
  return products.reduce((accum, product) => {
    return accum + product.price;
  }, 0);
};
// console.log(calculateTotalPrice(products));
// console.log(calculateTotalPrice({}));

/* ************************************************************************* */
/* ************************************************************************* */
/* ************************************************************************* */

const getFirstName = (person) => {
  if (!person || typeof person !== "object" || !("firstName" in person)) {
    throw new Error("Person must be an object with a firstName.");
  }
  return person.firstName;
};
const getSurnane = (person) => {
  if (!person || typeof person !== "object" || !("lastName" in person)) {
    throw new Error("Person must be an object with a lastName.");
  }
  return person.lastName;
};
const getFullName = (person) => {
  return `${getFirstName(person)} ${getSurnane(person)}`;
};
// console.log(getFullName({ firstName: "Name", lastName: "Surname" }));
// console.log(getFullName({ name: "Name", lastName: "Surname" }));
// console.log(getFullName("Daniel De Vita"));

/* ************************************************************************* */
/* ************************************************************************* */
/* ************************************************************************* */

const separateWords = (text) => {
  if (typeof text !== "string") throw new Error("Text must be a string.");
  return text.toLowerCase().split(" ");
};
/* no validation in the following functions because separateWords already handles validation */
const uniqueWords = (arrayOfWords) =>
  arrayOfWords.filter((word, i, arr) => arr.indexOf(word) === i);
const sortArray = (unorderedArray) => unorderedArray.sort();

const filterUniqueWords = (text) => {
  return sortArray(uniqueWords(separateWords(text)));
};
// console.log(filterUniqueWords("z Z y x w w v v V u u U t r"));
// console.log(filterUniqueWords(123));

const students = [
  { name: "studentA", grades: [10, 9, 8] },
  { name: "studentB", grades: [7, 6, 5] },
  { name: "studentC", grades: [4, 3, 2] },
];

const calculateAverage = (grades) => {
  if (
    !grades ||
    !Array.isArray(grades) ||
    !grades.every((grade) => typeof grade === "number")
  )
    throw new Error("Pass an array of grades with numeric values");
  const gradesSum = grades.reduce((accum, grade) => accum + grade, 0);
  return gradesSum / grades.length;
};

const getAverageGrade = (students) => {
  if (
    !students ||
    !Array.isArray(students) ||
    students.every(
      (student) =>
        typeof student !== "object" &&
        "grades" in student &&
        typeof student.grade !== "number"
    )
  ) {
    throw new Error(
      "Please pass an array of students with grades with numeric values"
    );
  }
  return students.map((student) => {
    return { name: student.name, average: calculateAverage(student.grades) };
  });
};
// console.log(getAverageGrade(students));
// console.log(getAverageGrade([]));
// console.log(getAverageGrade({ firstName: "name", grades: ["1", "2", "3"] }));
// console.log(getAverageGrade({ firstName: "name", results: [10, 10, 10] }));

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
  if (typeof func !== "function")
    throw new Error("Pass a function as first parameter");
  if (typeof n !== "number" || !Number.isInteger(n))
    throw new Error("Pass a integer as second parameter");
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
  if (!n) throw new Error("Please pass a number");
  if (Number(n) < 0) return console.log(`this is logging constantly`);
  return console.log(`this will show up ${n} times`);
};
// const testFn = repeatFunction(loggerFn, 10);
// testFn();
// const testFn2 = repeatFunction(loggerFn, -1);
// testFn2();

/* ************************************************************************* */
/* ************************************************************************* */
/* ************************************************************************* */

const calculateFactorial = (n) => {
  if (typeof n !== "number" || !Number.isInteger(n)) {
    throw new Error("Pass a integer");
  }
  if (n === 1 || n === 0) return 1;
  else if (n < 0) return "Factorial not possible for negative numbers";
  return n * calculateFactorial(n - 1);
};
// console.log(calculateFactorial(10)); // 3628800
// console.log(calculateFactorial(-10)); // "Factorial not possible for negative numbers"
// console.log(calculateFactorial("five")); // "Pass a positive integer"
// console.log(calculateFactorial(1.5)); // "Pass a positive integer"

const power = (base, exponent) => {
  if (typeof base !== "number" || typeof exponent !== "number")
    throw new Error("Please pass numbers as parameters");

  if (!Number.isInteger(exponent) || exponent < 0)
    throw new Error("Exponent must be a positive integer.");

  if (exponent === 0) return 1;
  else return base * power(base, exponent - 1);
};
// console.log(power(1, 0)); //output:1
// console.log(power(2, 2)); //output:4
// console.log(power(8, 8)); //output:16777216
// console.log(power("8", 8)); //Please pass numbers as parameters
// console.log(power(1, -10)); //Exponent must be a positive integer

/* ************************************************************************* */
/* ************************************************************************* */
/* ************************************************************************* */

const lazyMap = (arr, mapFunction) => {
  if (!Array.isArray(arr)) throw new Error("Pass an array as first parameter");
  if (typeof mapFunction !== "function")
    throw new Error("Pass a function as second parameter");

  return {
    //only selected element by index goes through the mapFunction
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
