const prompt=require("prompt-sync")()
//while loop
let a =prompt("Enter the value of number")
a=Number.parseInt(a)
let i=0
while(i<a)
  {  
    console.log(i)
    i++     
  }

//do while
do 
  {
    console.log("Menu")
  }

  while(i<a)
  {  
    console.log(i)
    i++     
  }