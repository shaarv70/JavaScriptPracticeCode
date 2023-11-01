const prompt= require('prompt-sync')()
let random_number=Math.floor(Math.random() * 100) + 1;
console.log(random_number)
let random=random_number
let myNumber
let count=0
do{
     myNumber=prompt("Guess the number")
    let result=myNumber>random?"Greater":"Smaller"
    console.log(result)
    count++
}
while(myNumber!=random)
console.log("Number of guesses are:",count)