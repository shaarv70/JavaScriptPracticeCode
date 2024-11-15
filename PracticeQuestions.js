//Remove duplicate

const numbers=[1,2,3,4,5,6,7,2,1,4,5,];
const names=["naveen","Arvind","Arvind","Naveen","Alice","Chintu"];

const after=[...new Set(numbers)];
console.log(after);

//reverse

let number=1;
let rev=0;
while(number>0)
{
    rev=rev*10+number%10;
    number=Math.floor(number/10);
}

console.log(rev);



const arr=[12,134,345,214,341];

arr.forEach((e)=>{

    let num=String(e);
if(num.includes("1")){

    if(num.indexOf("1")===0)
    {
        console.log(e);
    }
    
}})