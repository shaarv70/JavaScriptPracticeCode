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
author="Arvind"; //thirow error

