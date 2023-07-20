class DataTransformation {
  static addValues(a, b) {
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
  }

  static stringifyValue(value) {
    if (typeof value === "object" && value !== null) {
      return JSON.stringify(value);
    } else {
      return String(value);
    }
  }

  static invertBoolean(value) {
    if (typeof value === "boolean") {
      return !value;
    } else {
      throw new Error("Please provide a boolean argument");
    }
  }

  static convertToNumber(value) {
    if (typeof value === "string") return parseFloat(value);
    else if (typeof value === "boolean") return value ? 1 : 0;
    else if (typeof value === "bigint" || typeof value === "number")
      return Number(value);
    throw new Error("That value can not be converted to number");
  }

  static coerceToType(value, type) {
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
  }
}

/* Test examples for addValues */
// console.log(DataTransformation.addValues("Hello", " World")); // Output: Hello World
// console.log(DataTransformation.addValues(2, 3)); // Output: 5
// console.log(DataTransformation.addValues(5, "10")); // Output: 510 (string concatenation)
// console.log(DataTransformation.addValues("3", 7)); // Output: 37 (string concatenation)
// console.log(DataTransformation.addValues(10, BigInt(5))); // Output: 15n
// console.log(DataTransformation.addValues(true, false)); // Output: 1
// console.log(DataTransformation.addValues("Hello", true)); // Output: Addition not possible for the provided types
// console.log(DataTransformation.addValues(null, 5)); // Output: Addition not possible for the provided types
// console.log(DataTransformation.addValues(undefined, 'World')); // Output: Addition not possible for the provided types

/* Test examples for stringifyValue */
// console.log(DataTransformation.stringifyValue("Hello")); // Output: 'Hello' (string)
// console.log(DataTransformation.stringifyValue(42)); // Output: '42' (number)
// console.log(DataTransformation.stringifyValue(true)); // Output: 'true' (boolean)
// console.log(DataTransformation.stringifyValue(null)); // Output: 'null' (null)
// console.log(DataTransformation.stringifyValue({ key: "value" })); // Output: '{"key":"value"}' (object)
// console.log(DataTransformation.stringifyValue([1, 2, 3])); // Output: '[1,2,3]' (array)
// console.log(DataTransformation.stringifyValue(undefined)); // Output: 'undefined' (undefined)
// console.log(DataTransformation.stringifyValue(Symbol("test"))); // Output: 'Symbol(test)' (symbol)

/* Test examples for invertBoolean */
// console.log(DataTransformation.invertBoolean(true)); // Output: false
// console.log(DataTransformation.invertBoolean(false)); // Output: true
// console.log(DataTransformation.invertBoolean(0)); // Throws an error
// console.log(DataTransformation.invertBoolean("true")); // Throws an error
// console.log(DataTransformation.invertBoolean(null)); // Throws an error
// console.log(DataTransformation.invertBoolean(undefined)); // Throws an error
// console.log(DataTransformation.invertBoolean({})); // Throws an error
// console.log(DataTransformation.invertBoolean([])); // Throws an error

/* Test examples for convertToNumber */
// console.log(DataTransformation.convertToNumber("42")); // Output: 42 (parsed as an integer)
// console.log(DataTransformation.convertToNumber("3.14")); // Output: 3.14 (parsed as a float)
// console.log(DataTransformation.convertToNumber(true)); // Output: 1
// console.log(DataTransformation.convertToNumber(false)); // Output: 0
// console.log(DataTransformation.convertToNumber(10n)); // Output: 10 (converted from a bigint)
// console.log(DataTransformation.convertToNumber(3.14)); // Output: 3.14 (converted from a number)
// console.log(DataTransformation.convertToNumber(null)); // Throws an error
// console.log(DataTransformation.convertToNumber(undefined)); // Throws an error
// console.log(DataTransformation.convertToNumber({})); // Throws an error
// console.log(DataTransformation.convertToNumber([])); // Throws an error

/* Coerce to string */
// console.log(DataTransformation.coerceToType(42, 'string')); // Output: '42' (coerced to string)
// console.log(DataTransformation.coerceToType(true, 'string')); // Output: 'true' (coerced to string)
// console.log(DataTransformation.coerceToType(null, 'string')); // Output: 'null' (coerced to string)
// console.log(DataTransformation.coerceToType(undefined, 'string')); // Output: 'undefined' (coerced to string)

/* Coerce to number */
// console.log(DataTransformation.coerceToType('42', 'number')); // Output: 42 (coerced to number)
// console.log(DataTransformation.coerceToType(true, 'number')); // Output: 1 (coerced to number)
// console.log(DataTransformation.coerceToType(null, 'number')); // Output: 0 (coerced to number)
// console.log(DataTransformation.coerceToType([], 'number')); // Output: 0 (coerced to number)
// console.log(DataTransformation.coerceToType({}, 'number')); // Output: NaN (coerced to NaN)

/* Coerce to boolean */
// console.log(DataTransformation.coerceToType("true", "boolean")); // Output: true (coerced to boolean)
// console.log(DataTransformation.coerceToType(1, "boolean")); // Output: true (coerced to boolean)
// console.log(DataTransformation.coerceToType("false", "boolean")); // Output: true (coerced to boolean)
// console.log(DataTransformation.coerceToType(0, "boolean")); // Output: false (coerced to boolean)
// console.log(DataTransformation.coerceToType([], "boolean")); // Output: true (coerced to boolean)

/* Coerce to bigint */
// console.log(DataTransformation.coerceToType(42, 'bigint')); // Output: 42n (coerced to bigint)
// console.log(DataTransformation.coerceToType('12345678901234567890', 'bigint')); // Output: 12345678901234567890n (coerced to bigint)

/* Coerce to symbol */
// console.log(DataTransformation.coerceToType('test', 'symbol')); // Output: Symbol(test) (coerced to symbol)
// console.log(DataTransformation.coerceToType(42, 'symbol')); // Output: Symbol(42) (coerced to symbol)

/* Coerce to object */
// console.log(DataTransformation.coerceToType(42, "object")); // Output: [Number: 42] (coerced to object)
// console.log(DataTransformation.coerceToType(null, "object")); // Output: {} (coerced to object)

/* Coerce to array */
// console.log(DataTransformation.coerceToType('Hello', 'array')); // Output: ['H', 'e', 'l', 'l', 'o'] (coerced to array)
// console.log(DataTransformation.coerceToType([1, 2, 3], 'array')); // Output: [1, 2, 3] (coerced to array)

/* Unsupported type */
// console.log(DataTransformation.coerceToType('42', 'custom')); // Throws an error (type coercion not supported)

/* Invalid type */
// console.log(DataTransformation.coerceToType('42', 1)); // Throws an error (type invalid)
