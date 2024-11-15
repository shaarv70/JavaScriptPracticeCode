/* console.log("hello");

console.error("array error");


console.warn("warning message");

console.info("some info");

const obj={

    name:"john",
    country:"India",
    currency:"Ruppes",
    Salary:2300
}

const obj1={

    name:"Arvind",
    country:"India",
    currency:"Ruppes",
    Salary:13444,
    Siblings:2
}

console.log(obj);// it will print in one line
console.table(obj)// print in table
console.table([obj,obj1]);// multiple objects




console.group("Login feature")  //log into groups   first line is heading remaing lines are sublogs
console.log("reset pass");
console.log("Hi!");                
console.log("this is JS");
console.groupEnd();    




console.time("Print 1 to n values ")   //its not working as of now
for(let i=0;i<10;i++)
{
    console.log(i);
}
console.timeEnd("Task is completed") */

console.clear();    // clear the console

console.count("reset password");  // count 
console.count("reset password");
console.count("reset password");



console.assert(10===20,"assertion failed");



function testMyJon(){
    console.trace();    // used for debugging
}

testMyJon();



console.log("%c I  love  JS Coding !!!",
                        "color:blue; background-color:red; border:solid");
