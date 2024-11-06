/* Use String() or template literals for general conversions.
Use toString() when you are sure the value is not null or undefined.
Use JSON.stringify() for objects and arrays when you need a structured string representation. */

let num = 123;
let str = String(num); // "123"
console.log(str);
console.log(typeof(str));


let check = 456;
let after = check.toString(); // "456"
console.log(after)

let obj = { name: "John", age: 30 };
let myobnj = JSON.stringify(obj); // '{"name":"John","age":30}'
console.log(myobnj);


let arr=[1,2,3,4,4,5];
console.log(arr);
let myarray=JSON.stringify(arr);
console.log(myarray);

//Conversion into number
//Using Number()

let pri = "456";
let bool = true;
let num1 = Number(pri); // 456
let num2 = Number(bool); // 1
let num3 = Number("123abc"); // NaN (invalid number)

//Using parseInt() and parseFloat()
let intStr = "789";
let floatStr = "123.45";

let intNum = parseInt(intStr); // 789
let floatNum = parseFloat(floatStr); // 123.45

//Convert to Boolea
let exa = "hello";
let num12 = 0;
let empty = "";

let bool1 = Boolean(exa); // true
let bool2 = Boolean(num12); // false
let bool3 = Boolean(empty); // false

