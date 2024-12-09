//It is a concept  which allow to extract values from array and objects and assign them to variables in more convinient way

//array destructring
const numbers=[1,2,3];
const[a,b,c]= numbers;
console.log(a);
console.log(b);
console.log(c);
numbers[3]=5;
console.log(numbers);


const lang=["JS","Python","Ruby","GO"];
const[p,q,...test]=lang;
console.log(p);
console.log(q);
console.log(test);



//object destructring

const user ={

    first:"Arvind",
    last:"sharma",
    age:30
}

const{first,last,city="LA",age}=user;   //here the names present in curley braces must be same as key in object
console.log(first);
console.log(last);
console.log(age);
console.log(city)



// function param destructuring

const person={
    first:"John",
    last:"doe"
}; 
function printUser({first,last}){
    console.log(first+' '+ last);
}

 

printUser(person);


let fruits=["Apple","Mango","Grapes","Banana"];
let[fir,sec,thir]=fruits;
console.log(fir,sec,thir);
let [firsty,,secondy]=fruits
console.log(thir);




const mybio={
    fullName:{
        fname:"Arvind",
        lname:"sharma"
    },
    age1:30,
    gender:"M"
}

let {fullName:{fname,lname}, age1 ,gender}=mybio;
console.log(fname,lname,age1); 

let rand1=()=>{
    let num=Math.random()*9999;
    return num.toString();
}
console.log(rand1());
//now if i want to use this above random number as key in an object 

let myob={
    [rand1()]:{
            firstname:"Arvind",
            lastname:"shar"
    },
  age2:45
}

console.log(myob);