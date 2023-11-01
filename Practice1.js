let a ="Harry";
let b=6;
console.log(a+b);//it will concatinate both variables as a string

console.log(typeof (a+b)); //string

const a1={
  name:"Harry",
  section:1,
  isprincipal:false   
}
//a=54;//throw error  since a is const
a1["friend"]="Shubham";  //here we can add new key to the object,since a1 is a reference to the object,dosent matter if it const 
//we cannot reinitiallize a1 object since it is const
console.log(a1);
a1["name"]="Arvind";
console.log(a1);


const dict={
  appreciate:"to appreciate someone",
  yakka:"Hard work" 
}
console.log(dict.yakka);//print hardwork
console.log(dict["yakka"]);//same as above