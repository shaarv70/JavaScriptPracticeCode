//length function
let name="arvind"
console.log(name.length)//6

console.log("Arvind"[2]);// it will the mentioned index value
console.log("Jaya".charAt(2)); //same above
console.log("Chacha".charCodeAt(2));// it will the ASCII value 


//escape sequence character alwayws considered as one
let name1 ="arvind\""
console.log(name1.length)//7

//to uppercase
console.log(name.toUpperCase())
console.log("ARVIND".toUpperCase());//same above
//to lowercase
console.log(name.toLowerCase())
console.log("ARVIND".toLowerCase());//same above

//slice (its like a substring)
console.log(name.slice(2,4))
console.log(name.slice(2))
console.log("Arvind".slice(0,2));
console.log("Arvind".slice(0,-3))
console.log("Pankaj".substring(-3,2));

//replace
console.log(name.replace("arv","per").toUpperCase())
console.log("Dev Test Framework".replace("Dev","My"));

//concat
let name2="naman"
console.log(name2.concat(" is a friend of ",name ))
console.log(name2.concat(" is a friend of ",name," ok " ))

//trim  : remove whitespaces
let d="     meena      "
console.log(d.trim(d))
console.log("   mgn    ".trim());
console.log("   mgn    ".trimStart());// removes whitespace from starting
console.log("   mgn    ".trimEnd());// removes whitespace from ending


//Strings are immutable
let g="shivi"
console.log(g[0])
console.log(g[1])


for (let i of g)
  {
    console.log(i)
  }

  //concat
  console.log("arvind".concat("Sharma").concat("Is"));


  //split
  const lang="Java_Python_Ruby";
  const mysplit=lang.split("_");
console.log(mysplit);

//includes
console.log("Arvind".includes("ind"));


//pad
console.log("che".padEnd(10,"&"));// it will add the character to the remaing unoccupied indexs here we have 7
console.log("che".padStart(10,"&"));// start

//starts-with() && ends-wuth()
console.log("Arv".startsWith("Arv"));
console.log("check".endsWith("ck"));


//repeat
console.log("try".repeat(3));//repeat three times but in a single string without any spaces

//indexof

console.log("Arvind".indexOf("i"));
console.log("Chiragagaga".lastIndexOf("g"))
console.log("Myt test framework is such a good thing".search("such"));//same as above
