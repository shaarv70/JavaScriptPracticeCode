let num=[3,54,1,2,2,3]

for (let i=0;i<num.length;i++)
{
    console.log(num[i])
}

//for each loop
num.forEach((element)=>{

    console.log(element*element)
})
//Array.from
let chah ="Arvind"
let arr=Array.from(chah);//It will create an array of letters of String
console.log(arr)//[ 'A', 'r', 'v', 'i', 'n', 'd' ]

//for...of(short method to access the memebrs of array )
for(let i of num)
{
    console.log(i)
}

//for...in
for(let i in num)
{
  //  console.log(i)//it will return the keys of array
    console.log(num[i])//it will the values present at this key
}

