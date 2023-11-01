let a = prompt("Hey whats your age" )//this will prompt notification
//which will take the input and convert that input into string
a=Number.parseInt(a)//converting string into number
if(a>0)
{
  alert("this is valid age") //it is used to print on the browser
}
else if(a<9)
{
  alert ("this is invalid age ")
}
else
{
  alert("not valid")
}
console.log("done")
//ternary operator 
let decision= a<18?"Not Drive":"drive"
console.log(decision)
//switch case also works in the same way as java





