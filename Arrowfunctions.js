const square = num => num *num;  //if we have one parameter
const result=square(2);
console.log(result);

const state= () => "hi";  //no parameter
console.log(state());

const add =(a,b) => a+b;   // multiple parameter   //implicit return
const addition=add(2,3);
console.log(addition);

const man={

    first: "Arvind",
    lastname: "Sharma"
}
const details=person => `${person.first} ${person.lastname}`
const name=details(man);
console.log(name);

//

const great= (username='guest', age=0) => `Hello, ${username}! you are ${age} years old! `
const Age1=great();
console.log(Age1); 

const Age2=great("Tom",23);
console.log(Age2);

//rest parameters    ... varargs - like an array/spread operator
const sum=(...numbers) => numbers.reduce((acc,num) => acc + num,0);
const adding=sum(1,2,3,3,4,4,5,5);
console.log(adding);


const checkBrowser=(browser='chrome',...details) => {

    console.log(`browser:${browser}`)
    console.log('other details',details);
} 

checkBrowser();
checkBrowser("firefox",'115.11','mozilla','headless');


//max number using Math lib

const findmax=(a,b,c) => {

      return Math.max(a,b,c);

};
const maximum=findmax(10,20,30);
console.log(maximum);
console.log(findmax(2,4,8));






