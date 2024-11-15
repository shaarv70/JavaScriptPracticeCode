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

const{first,last,city="LA",age}=user;
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





