const prompt= require('prompt-sync')()
//Q1 push any number
let arr=[1,2,3,4,5,6,85]
let a=prompt("Enter any number")
a=Number.parseInt(a)
arr.push(a)
console.log(arr)

//Q2
let arr1=[1,2,3,4,5,6,85]
let b
do{
     b=prompt("Enter any number")
    b=Number.parseInt(b)
    arr1.push(b)
}
while(b!=0)
console.log(arr1)

//Q3
let arr2=[1,20,3,4,5,6,85]
let arr3=arr2.filter((number)=>{

    return number%10==0

})
console.log(arr3)

//Q4 -array of square of given numbers
let my=[1,20,3,4,5,6,85]
let arr5=my.map((variable)=>{

    return variable*variable
})
console.log(arr5)

//Q4 -factorial of number
let my1=[1,2,3,4,5]
let result=my1.reduce((x1,x2)=>{

    return x1*x2
})
console.log(result)