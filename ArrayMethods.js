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
f.push("Manoj","Ramu",23);
console.log(f)

//fill - it will replace all the array values with the fill value

console.log(f.fill(2));
console.log(num.fill(0,1,2));


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
 let y=v.concat(x,newarray,[0,1,2]);
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

//every() - check for every element
let num3=[1,2,36,8,0,5,6,4,3,34,4];
let check=num3.every((e) => e<10 );
console.log(check);//false

// some()- chek atleast one element passes the condition
let num2=[1,2,36,8,0,5,6,4,3,34,4];
  let check1=num2.some((e) => e%2===0);
  console.log(check1);

//find() - returns the value which satify the given condiition
let mine=[1,2,36,8,0,5,6,4,3,34,4]; 
let check3=mine.find((e) => e>10);
console.log(check3);//36

//Array.from
let chah ="Arvind"
let arr=Array.from(chah);//It will create an array of letters of String
console.log(arr)//[ 'A', 'r', 'v', 'i', 'n', 'd' ]



//foreach

let n=[1,2,3,34,5,5,6,];
n.forEach((e) => {

   console.log(e);
   console.log(e*2);

})





