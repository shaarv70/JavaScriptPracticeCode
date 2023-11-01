const prompt=require ('prompt-sync')()

//first question
const marks={
  harry:98,
  rohan:70,
  aakash:7
}
for (let i=0;i<Object.keys(marks).length;i++)
  {
console.log(Object.keys(marks)[i])//this will print name(here we are sending keys)
console.log(marks[Object.keys(marks)[i]])//thid will print marks
 //here we are fetching the value from key 
  }

//Thirugh for in loop   //simplest way
for (let key in marks)
  {
    console.log(marks[key])
  }

//second questiuon
let cn=4
let i
while(i!=cn)
  {
    console.log("try again")
    i=prompt("enter any number")
  }
console.log("correct number")

//third questiuon 
const mean=(a,b,c,d)=>
  {
     return Math.round((a+b+c+d)/4)
  }

const final=mean(1,2,3,4)
console.log(final)