let num=[1,2,3,4]

//to string -convert into string
let b=num.toString()
console.log(b)
console.log(typeof b)

//join method
let c= num.join("_")
console.log(c)  //1_2_3_4  it will be string

//pop method  // last element pop
let d= num.pop()
console.log(d)
console.log(num)

//push method  - modify array - ernd me lga dega 

let f=[1,2,3,4]
f.push("Arvind")
console.log(f)

//shift - remove first element and returs it

//let r = f.shift()
//console.log(r)

//unshift - Add element to the beginning 
f.unshift(78,"blue");
console.log("after unshift"+f);

//delete - it will not effect the array length
let myarray=[1,2,3,4,5]
delete myarray[2]
console.log(myarray)//[ 1, 2, <1 empty item>, 4, 5 ]

//concat - it will take duplicate also
let v =[1,3,45,5,6,45]
let x=["Arvind","raju","Anju"]
 let newarray=v.concat(myarray)
 console.log(newarray)
 let y=v.concat(x,newarray)
 console.log(y)


 //sort -alphabetically sort(by taking number also in form of string) 
 console.log(v.sort())
 console.log(x.sort())
 //if we want to sort numbers in ascending order
const compare=(a,b)=>{

   // return b-a //it will sort in descending order
    return a-b //it will sort in ascending order
 }
 v.sort(compare)
 console.log(v)

 //reverse - it will reverse the array
 const l=[1,23,34,56,76,89,97,56]
 //console.log(l.reverse())

//splice - to add new items in array
let result=l.splice(2,3,1023,1023,1021)//(start,kitne remove krne h,add kro jo add krna h un places pr)
console.log("After splice"+l)
console.log(result)//it will return thr array of deleted elements

//slice - it will give me an array according to the arguments(like a substring)- it will not 
//modify the original array
const z=[1,23,34,56,76,89,97,56]
console.log(z.slice(1,3))
console.log(z.slice(3))


//index of

let color=["blue","red","pink","gold","red"];
console.log(color.indexOf("blue"));
console.log(color.indexOf("gold"));
console.log(color.indexOf("arvind"));//returns -1
console.log(color.lastIndexOf("red"));//or
console.log(color.indexOf("red",2));

//includes

let test=["admin","customer","seller","vendor"];
console.log(test.includes("customer"));

//foreach

let n=[1,2,3,34,5,5,6,];
n.forEach((e) => {

   console.log(e);
   console.log(e*2);

})





