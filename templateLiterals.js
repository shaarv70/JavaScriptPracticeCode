const name="Arvind";

//it is basically usef for dynamic content
//backticks -``

const age=30;
const mess= `hello my name is ${name} and age is ${age}`;
console.log(mess);



const multiline= `this is my JS code
                   and Iam so happy and 
                   I want to be perfect in JS`;

console.log(multiline);            



const a =10;
const b=20;
console.log(`Sum of ${a} and ${b} is ${a+b}`);


function getXpath(name){

    return `//input[@id='${name}']`;

}

console.log(getXpath('Arvind\'s'));

