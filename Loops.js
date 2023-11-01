const prompt= require('prompt-sync')()
//for loop
/*let sum=0;
let num=prompt("Enter any number")
num=Number.parseInt(num)
for(let i=0;i<num;i++)
  {
    sum=sum+i
  }
console.log(sum)
//factorial for 5
let product=1;
for (let i=1;i<=5;i++)
  {
    product*=i
  }
console.log("Factorial of 5 is:"+product)
*/
//forin loop   //it will iterate through the whole object
let obj=
  { 
    harry:23,
    shivi:34,
    arvind:67
  }
 /*   for (let a in obj)
      {
        console.log(a)//it will print key one by one
        console.log(obj[a])//it will print value one by one
      }
   */

 //forof loop   //it will iterate through a partiular value
    for (let a of "93")    
      {
        console.log(a)   //it will print 9 and 3 one by one 
                          //only strings
      }
