const addValues = (a, b) => {
  if (typeof a === "string" && typeof b === "string") {
    return a + b;
  } else if (
    (typeof a === "number" || typeof a === "string") &&
    (typeof b === "number" || typeof b === "string")
  ) {
    return String(a) + String(b);
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "bigint" && typeof b === "bigint") {
    return a + b;
  } else if (typeof a === "number" && typeof b === "bigint") {
    return BigInt(a) + b;
  } else if (typeof a === "bigint" && typeof b === "number") {
    return a + BigInt(b);
  } else if (typeof a === "boolean" && typeof b === "boolean") {
    return Number(a) + Number(b);
  } else {
    throw new Error("You can not add those two values");
  }
};

/* check addValues */
// console.log(addValues("Hello", " World")); //  Hello World
// console.log(addValues(2, 3)); //  5
// console.log(addValues(5, "10")); //  "510"
// console.log(addValues("3", 7)); // " 37"
// console.log(addValues(10, BigInt(5))); //  15n
// console.log(addValues(true, false)); //  1
// console.log(addValues("Hello", true)); //  You can not add those two values
// console.log(addValues(null, 5)); //  You can not add those two values
// console.log(addValues(undefined, "World")); //  You can not add those two values

const stringifyValue = (value) => {
  if (typeof value === "object" && value !== null) {
    return JSON.stringify(value);
  } else {
    return String(value);
  }
};

/* check stringifyValue */
// console.log(stringifyValue("Hello")); //  'Hello'
// console.log(stringifyValue(42)); //  '42'
// console.log(stringifyValue(true)); //  'true'
// console.log(stringifyValue(null)); //  'null'
// console.log(stringifyValue({ key: "value" })); //  '{"key":"value"}'
// console.log(stringifyValue([1, 2, 3])); //  '[1,2,3]'
// console.log(stringifyValue(undefined)); //  'undefined'
// console.log(stringifyValue(Symbol("test"))); //  'Symbol(test)'

const invertBoolean = (value) => {
  if (typeof value === "boolean") {
    return !value;
  } else {
    throw new Error("Please provide a boolean argument");
  }
};

/* check invertBoolean */
// console.log(invertBoolean(true)); //  false
// console.log(invertBoolean(false)); //  true
// console.log(invertBoolean(0)); // Please provide a boolean argument
// console.log(invertBoolean("true")); // Please provide a boolean argument
// console.log(invertBoolean(null)); // Please provide a boolean argument
// console.log(invertBoolean(undefined)); // Please provide a boolean argument
// console.log(invertBoolean({})); // Please provide a boolean argument
// console.log(invertBoolean([])); // Please provide a boolean argument

const convertToNumber = (value) => {
  if (typeof value === "string") return parseFloat(value);
  else if (typeof value === "boolean") return value ? 1 : 0;
  else if (typeof value === "bigint" || typeof value === "number")
    return Number(value);
  throw new Error("That value can not be converted to number");
};

/* check convertToNumber */
// console.log(convertToNumber("42")); //  42
// console.log(convertToNumber("3.14")); //  3.14
// console.log(convertToNumber(true)); //  1
// console.log(convertToNumber(false)); //  0
// console.log(convertToNumber(10n)); //  10
// console.log(convertToNumber(3.14)); //  3.14
// console.log(convertToNumber(null)); // That value can not be converted to number
// console.log(convertToNumber(undefined)); // That value can not be converted to number
// console.log(convertToNumber({})); // That value can not be converted to number
// console.log(convertToNumber([])); // That value can not be converted to number

const coerceToType = (value, type) => {
  if (typeof type !== "string") throw new Error("Invalid type");
  switch (type) {
    case "string":
      return String(value);
    case "number":
      return Number(value);
    case "boolean":
      return Boolean(value);
    case "bigint":
      return BigInt(value);
    case "symbol":
      return Symbol(value);
    case "object":
      return Object(value);
    case "array":
      return Array.from(value);
    default:
      throw new Error("Can not coerce that type");
  }
};

/* coerce string */
// console.log(coerceToType(42, "string")); //  '42'
// console.log(coerceToType(true, "string")); //  'true'
// console.log(coerceToType(null, "string")); //  'null'
// console.log(coerceToType(undefined, "string")); //  'undefined'

/* coerce number */
// console.log(coerceToType("42", "number")); //  42
// console.log(coerceToType(true, "number")); //  1
// console.log(coerceToType(null, "number")); //  0
// console.log(coerceToType([], "number")); //  0
// console.log(coerceToType({}, "number")); //  NaN

/* coerce boolean */
// console.log(coerceToType("true", "boolean")); //  true
// console.log(coerceToType(1, "boolean")); //  true
// console.log(coerceToType("false", "boolean")); //  true
// console.log(coerceToType(0, "boolean")); //  false
// console.log(coerceToType([], "boolean")); //  true

/* coerce bigint */
// console.log(coerceToType(42, 'bigint')); //  42n
// console.log(coerceToType('12345678901234567890', 'bigint')); //  12345678901234567890n

/* coerce symbol */
// console.log(coerceToType('test', 'symbol')); //  Symbol(test)
// console.log(coerceToType(42, 'symbol')); //  Symbol(42)

/* coerce object */
// console.log(coerceToType(42, "object")); //  [Number: 42]
// console.log(coerceToType(null, "object")); //  {}

/* coerce array */
// console.log(coerceToType('Hello', 'array')); //  ['H', 'e', 'l', 'l', 'o']
// console.log(coerceToType([1, 2, 3], 'array')); //  [1, 2, 3]

/* Invalid type */
// console.log(coerceToType("42", ABC)); // Throws an error (Invalid type)

/* Unsupported type */
// console.log(coerceToType('42', 'custom')); // Throws an error (Can not coerce that type)
