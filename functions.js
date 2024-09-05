//syntax
/*function myfunction()
{
  
}*/

function myfunc(x,y)
{
  return Math.round(1+(x+y)/2)
}
console.log("the value of functions is:"+myfunc(2,3))

//Anonymous function
const check=function my(x,y){

  return x*y;
}

const multiply=check(2,3);
console.log(multiply);



//empty function
function empty(){

  console.log("hi thhisis js");
}
empty();


//arrow function
const sum=(a,b)=>{
  return a+b ;;
}
console.log(sum(9,7)) //or

const test=(x,y) => x/y;
const div=test(3,2);
console.log(div);


//empty arrow function
const hello=()=>
  {
    console.log("hi my function")
  }
console.log(hello())

const mystring=()=>
  {
    return "hi"
  }

let result=mystring()
console.log(result)

// function constructor
const subs=new Function('a','b','return a-b;');
console.log(subs(3,2));

//IIFE (Immediately invoked function expression)
(function(){

  console.log("Server is up and running on 3000");
})();


// Generator function - a function that return iterator object which generated sequence of values

function* generateNumbersSequence(){
  yield 1;
  yield 2;
  yield 3;
  yield 4;
} 

const generator= generateNumbersSequence();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);


// anonymous function: which does not have any name

const numbers=[1,2,3,4,5,6];
const final=numbers.map(function(e){

  return e*e;
}) 
console.log(final)


//recursive function

function factorial(n){

  if(n===0 || n===1)
  {
    return 1;
  }

return n * factorial(--n);
}

const fact=factorial(100);
console.log(fact);


//higher order function

function addition(a,b){

    return a+b;
}

function multiply1(c,d){

  return c*d;
}

function operate(funcName,a,b){

  return funcName(a,b);
}

const myfinal=operate(multiply1,2,3);
console.log(myfinal);



