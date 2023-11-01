const prompt=require('prompt-sync')()
let name ="Arvind"  //double quote
console.log(name.length)
console.log(name[0])  //A

let name1='Harsh'
console.log(name1)
console.log(name1[0]) //H

//template literal
let boy1= "pramod"
let boy2= "nikhil"

let sen= `${boy1} is a friend of ${boy2}`//its like passing //environment variable (this is called string interpolation)
console.log(sen)

let sen1= `the name "is" Arvind`
console.log(sen1)

//Escape sequence character
let fruit ='bana\'na'  //it will take a sigle quote in betqween
console.log(fruit)
console.log(fruit.length)

let fruit1 ='ba\rnana'
console.log(fruit1) //it will take a double quote in betqween

// \n - new line 
// \t - tab
// \r -carriage return     -it will print nana