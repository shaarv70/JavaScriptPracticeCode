//Arithematic operators
let a=45;
let b=10;
console.log(a+b);
console.log(a/b);//it will also show decimal values
console.log(a**b);//it means a to the power b
console.log(a%b);//gives  remainder
console.log("a",a++);//45
console.log("a",--a);//45
console.log("a",++a);//46
console.log("a",a--);

//Assignment operators
a+=5;
a-=7;
console.log(a);

//comparison operator
let c=10;
let d="10";
//== compare value
//=== compare value and also type
console.log(c==d)// true
console.log(c===d)// false
console.log(c!=d);//false
console.log(c!==d);//true

let k="2";
let l= new String("2");

console.log(k==l);
console.log(k===l);


//Logical operator
let x=5;
let y=6;
console.log(x<y && x==5);//true  
console.log(!false)//true
