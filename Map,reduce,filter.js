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
//we can use above parameters with for each also

//Array filter method- filter the values in array
let arr1=[1,2,3,4,2,3,4]
let arr2=arr1.filter((value)=>{

    return value>2
})
console.log(arr2)

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
console.log(arr5)//20

