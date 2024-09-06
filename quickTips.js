 //1 find unique values from array or remove duplicates
const array=[1,2,3,2,3,,4,5,5,4,6];
const unique=[...new Set(array)];
console.log(unique);


//2. Convert Integer to String
const num=32;
const str=num + '';
console.log(typeof str);
console.log(str+10);
// or 
const converted=String(num);
console.log(converted+10);

//3. Floating to Integer
const number=3.76;
const after=parseInt(number);
console.log(after);