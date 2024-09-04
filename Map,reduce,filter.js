//map
//diff b/w map and for each (map is used to create a new array)
//for each(it is used if we want to perfrok some operation on array)
let arr=[45,23,21]
let newarray=arr.map((value)=>{
   return value+1
})
console.log(newarray)

let myarray=arr.map((value,index)=>{
    console.log(value,index)
    return value+1
})
console.log(myarray)

let after=arr.map((value,index,array)=>
{
    console.log(value,index,array)
    return value+index
})
console.log(after)

function far(fah){

return (fah-32)*(5/9);
}
let cel=arr.map(far);
console.log("After cel"+cel);

//we can use above parameters with for each also

//Array filter method- filter the values in array and gives new array
let arr1=[1,2,3,4,2,3,4]
let arr2=arr1.filter((value)=>{

    return value>2
})
console.log(arr2)
let check=arr1.filter((e) => e % 2 === 0);
console.log(check);

let employee=[
{name:"john",age:30,gender:"male"},
{name:"reema",age:14,gender:"female"},
{name:"rohan",age:34,gender:"male"},
{name:"kajal",age:31,gender:"female"}
]

let result=employee.filter((emp) =>{

    return emp.gender==="female" && emp.age>30

})
console.log(result);



//array reduce method- it will perform operation on array members and return some result

let arr3=[1,2,3,4,3,5,2]
let arr4=arr3.reduce((h1,h2)=>{

    return h1+h2 
})
console.log(arr4)//20
//we can also guve in this way

let reduce_func=(h1,h2)=>{

    return h1+h2
}
let arr5=arr3.reduce(reduce_func)
console.log(arr5)//20  or

let sum=arr3.reduce((x,y) => x+y , 0);
console.log(sum);

//maximum element in array
let y=[1,23,5,7,6,4,34];

let maximum=y.reduce((max,x) =>{

     if(x>max)
        return x;
    else

    return max;
          
},y[0] );
console.log(maximum);

//another example

let cart=[
    {name:"Jeans",Price:500},
    {name:"Shirt",Price:300},
    {name:"Shoes",Price:1000},
    {name:"hat",Price:100},
    {name:"Tshirt",Price:400}
] 
let price =cart.reduce((sum,y) => sum+y.Price,0)
console.log(price); 




