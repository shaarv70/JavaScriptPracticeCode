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

//4. check if variable is number?

const value='t';
if(typeof value==='number' && !isNaN(value)){

    console.log(value + " is number");
}
else{
    console.log(value +" is not a number");
}



//5. Swap variable values:

let a =5;
let b=10;

[a,b]=[b,a];
console.log(a,b);

//6. Check if an object has a property

const person={

    name:"john",
    age:20
}

if(person.hasOwnProperty('name'))//or age
    {
    console.log('person has name property');
}

//7. Remove falsy values from array (false,0,"",nnull,undefined,NaN)

const values=[0,1,false,2,'',3,undefined,NaN,4];
const newArray=values.filter(Boolean);
console.log(newArray);


//8. String -> uppercase & lowercase

const str1="arvind sharMa";
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

//9. Check array contins specefic value

const check=["java","python","JS","Ruby"];
if(check.includes("JS")){
    console.log("value is found");
}

//10. cheeck if array is empty array or nnot

const empty=[];
if(empty.length===0){
    console.log("Empty");
}


//11. generate random number 

const min=10;
const max=20;
const rand= Math.floor(Math.random()*(max-min+1))+min;
console.log(rand);

//12. String to nunber

const strNumb="32.898";
const final=parseFloat(strNumb);
console.log(final);


//13. join array elements into string

const a1=["hello","world", "iam", "coming"]
const a2=a1.join(' ');
console.log(a2);
const a3=a1.join(' bye ');
console.log(a3);//hello bye world

//14. get object property

const user={

    name:'tom',
    age:30,
    dob:'01-01-1995'
};

console.log(user['name']);
console.log(user['age']);


//15. clone an array or object

const marks=[10,23,45,24,3,4443,3,5,4];
const left=[...marks];
console.log(left);

const userDuplicate={...user};
console.log(userDuplicate);


//16. Convert object to array
const emp={

    name:'tom',
    age:30,
    dob:'01-01-1995'
};

//a. keys array
const keys=Object.keys(emp);
console.log(keys);

//b. value array
const valus=Object.values(emp);
 console.log(valus);

 //c. key-value pair
 const both=Object.entries(emp);
 console.log(both);



 //17. get current date andtime
 const current_date=new Date();
 console.log(current_date.toLocaleString());


 //18. if variable is defined or not

 let i;
 if(typeof i==='undefined'){

    console.log('variable is not defined');
 }


 //19. trucate an array-  return an array

 const testing=[0,1,2,3,4,5,6,7];
 testing.length=3;
 console.log(testing);

 //20. last item in array - return in array

 const poping=[0,1,2,3,4,5,6,7];
  const last=poping.slice(-1);
  console.log(last);
  console.log(poping.pop());