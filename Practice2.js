//problem1
const prompt = require('prompt-sync')();
/*let age = prompt("what is your age")
if (age > 10 && age < 20) {
  console.log("Age lies in range")
}
else {
  console.log("Age doesn't lie in range")
}


switch (age) {
  case 11:
    console.log("your age is 11")
    break

  case 12:
    alert("your age is 12")
    break

    defualt:
    alert("other age")

}*/
//Problem2
/*let number =prompt("enter number")
number=Number.parseInt(number)

if(number%2===0 || number %3===0)
{
  console.log("Number is divisible")
}*/

//Problem3
let age1=prompt("enter age")
age1=Number.parseInt(age1)
let decision = age1>18?"You can drive":"You cannot drive"
console.log(decision)