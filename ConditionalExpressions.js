//let a = prompt("Hey whats your age" )//this will prompt notification
//which will take the input and convert that input into string
/*a=Number.parseInt(a)//converting string into number
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
console.log(decision)*/
//switch case also works in the same way as java

function checkAge(age){

  if(age>=18){
    console.log("you are old enough");
  }
  else if(age >15){

    console.log("Sorry, you are not older enough");
  }

  else if(age<10){

    console.log("you are kid");
  }

  else {
    console.log("Bad chhoice");
  }
}
checkAge(13);
checkAge(24); 

//switch -- with switch we can use break

function checkDay(day){

   switch(day){

    case 1:console.log("monday");
    break;
    case 2:console.log("tueday");
    break;
    default:console.log("wrong choice");
    break;
  }
}

checkDay(2);
checkDay(3);






