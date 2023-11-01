const prompt= require('prompt-sync')()
//function
//syntax
/*function myfunction()
{
  
}*/
const mypr= prompt("enter any nuymber")

function myfunc(x,y)
{
  return Math.round(1+(x+y)/2)
}

console.log("the value of functions is:"+myfunc(2,3))

//arrow function
const sum=(a,b)=>{
  return a+b 
}
console.log(sum(9,7))
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