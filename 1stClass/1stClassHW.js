String.prototype.plus = function (otherNumber) {
  //actual string
  const num1 = this;

  //parameter of the method
  const num2 = otherNumber;

  //here we find which string has more characters (to properly use a for loop while adding, and not miss any number)
  const maxLength = num1.length > num2.length ? num1.length : num2.length;

  //lookup table to convert strings into numbers
  const digitValues = {
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
  };

  let sum = "";
  let carry = 0;

  //iterates the longest string
  for (let i = 0; i < maxLength; i++) {
    //saves smalles digit into variable. Same as doing `last character minus the value of i at the given iteration` (right to left)
    const digit1 = i < num1.length ? digitValues[num1[num1.length - 1 - i]] : 0;
    const digit2 = i < num2.length ? digitValues[num2[num2.length - 1 - i]] : 0;

    //we summ every digit and the carry of each iteration
    let digitSum = digit1 + digit2 + carry;

    //saves the number most to the right
    let newDigit = digitSum - ((digitSum / 10) | 0) * 10;

    //calculates carry for next interation
    carry = ((digitSum - newDigit) / 10) | 0;

    //sums the current value newDigit with the previous value of the iteration
    sum = newDigit.toString() + sum;
  }

  //adds the remaining carry if it is larger than 0 to the sum variable
  if (carry > 0) sum = carry.toString() + sum;

  return sum;
};

//////////////////////////////////////////////////////

String.prototype.minus = function (otherNumber) {
  //actual string
  const num1 = this;

  //parameter of the method
  const num2 = otherNumber;

  //here we find which string has more characters (to properly use a for loop while adding, and not miss any number)
  const maxLength = num1.length > num2.length ? num1.length : num2.length;

  //lookup table to convert strings into numbers
  const digitValues = {
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
  };

  let diff = "";
  let borrow = 0;

  //iterates the longest string
  for (let i = 0; i < maxLength; i++) {
    //saves smalles digit into variable. Same as doing `last character minus the value of i at the given iteration` (right to left)
    const digit1 = i < num1.length ? digitValues[num1[num1.length - 1 - i]] : 0;
    const digit2 = i < num2.length ? digitValues[num2[num2.length - 1 - i]] : 0;

    //current digit difference after borrowing
    let digitDiff = digit1 - digit2 - borrow;

    //if digitDiff is negative, it requires borrowing
    if (digitDiff < 0) {
      //we add 10 to the current digit difference
      digitDiff += 10;
      //set borrow to equal 1
      borrow = 1;
    } else {
      borrow = 0;
    }
    //concatenate the final result (not adding, concatenating strings)
    diff = digitDiff.toString() + diff;
  }

  //removes leading zeros
  return diff.replace(/^0+/, "");
};

//////////////////////////////////////////////////////

String.prototype.multiply = function (otherNumber) {
  const num1 = this;
  const num2 = otherNumber;

  const digitValues = {
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
  };

  const maxLength = num1.length + num2.length;
  const product = Array(maxLength).fill(0);

  //we store each value from right to left in variables digit1 and digit2 until index 0 of each string (num1 and num2)
  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      const digit1 = digitValues[num1[i]];
      const digit2 = digitValues[num2[j]];

      //partial result of multiplying each iteration
      const prod = digit1 * digit2;

      //stores current value in the following position of the array product
      const sum = prod + product[i + j + 1];

      //we assing the resulting digit in its corresponding position of the array
      product[i + j + 1] = sum % 10;

      //calculates the carry for the next iteration
      let carry = (sum / 10) | 0;

      //we place the carry in the correct index of the array product
      product[i + j] += carry;
    }
  }
  //we concatenate every element in the array product and replace any 0 numbers with an empty string
  const result = product.join("").replace(/^0+/, "");
  //if results = an empty string, we return 0
  return result || "0";
};

//////////////////////////////////////////////////////

String.prototype.divide = function (divisor) {
  const dividend = this;
  const quotient = [];

  const digitValues = {
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
  };

  let dividendValue = "";

  for (let i = 0; i < dividend.length; i++) {
    const currentDigit =
      i < dividend.length ? digitValues[dividend[dividend.length - 1]] : 0;

    dividendValue += currentDigit;

    if (dividendValue < divisor) {
      quotient.push("0");
      continue;
    }

    let quotientDigit = 0;
    //if dividendValue is larger or equal than divisor,
    //we subtrack divisor from dividendValue and add 1 to quotientDigit
    //until dividendValue is lesser than divisor and then we add quotientDigit (0) to the array quotient
    while (dividendValue >= divisor) {
      dividendValue -= divisor;
      quotientDigit++;
    }

    //add the quotientDigit from the while loop to the array quotient
    quotient.push(quotientDigit.toString());
  }

  //concatenates every number and removes 0 from the begining of the string
  const result = quotient.join("").replace(/^0+/, "");

  //if result has length it returns it, otherwise it returns 0
  return result || "0";
};

console.log("addition is:", "1".plus("1"));
console.log("subtraction is:", "2".minus("1"));
console.log("multiplication is:", "0".multiply("2"));
console.log("division is:", "4".divide("2"));
