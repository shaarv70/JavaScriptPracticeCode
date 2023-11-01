//Primitive datatype
//nn bb ss u(null,number,byte,BigInt,String,Symbol,undefined)
 let a=null;
let b=346;
let c=true;
//let d=BigInt("567")+b;//throw error
let d= BigInt("567")+BigInt("6");
let e= "Harry";
let f= Symbol("I am a nice symbol");
let g= undefined;
console.log(a,b,c,d,e,f,g);
console.log(typeof d);

// object  it will store value in form of key and pair
const item= {
    "Harry":true,
     "Shubh":false,
  "Lovish":67,
  "Rohan":undefined
}
console.log(item);
console.log(item["Shubh"])//it will show the value of shubh