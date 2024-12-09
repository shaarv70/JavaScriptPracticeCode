console.log("Different datatypes are var,let and const");

let a=45;
var b="Arvind";
var c=null;
var d=undefined;
{
  var b="this"; 
  let k="chenu";
}
//console.log(k);//it will throw error
console.log(b);//it will also print this

//var can be redeclared and reinitialized
//let is blocked scoped
//let cannot be redecalred but can be reinitiliazed.
//const value cannot be reinitilaized and redclared
//const has to initialized at the time of declaring
const author="Harry";
//author="Arvind"; thirow error
//var should not be used in JS or issue with var


function learning(){

  for(var i=0 ;i<5;i++){

      console.log(i);

  }
  console.log(i);     //if we use let it will throw error but with var it will not
 }

 learning();
 //console.log(i);    // it will throw error in both let and var





var flag= "hey";
var t1=4;

if(t1>3){

  var flag ="check";
}

console.log(flag); //cannot show flag original value again
//so let is mostly used

let msg= "Hi";
let time=4;

if(time>3){

  let msg="check";
}
console.log(msg);
msg="55";
console.log(msg);

function rel(){

  var top="hello";
  console.log(top);
}
rel();//print hello

d= "my arvind";
console.log(d);

var g
console.log(typeof(g))
g=null;
console.log(g);