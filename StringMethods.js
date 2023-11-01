//length function
let name="arvind"
console.log(name.length)//6
//escape sequence character alwayws considered as one
let name1 ="arvind\""
console.log(name1.length)//7

//to uppercase
console.log(name.toUpperCase())
//to lowercase
console.log(name.toLowerCase())

//slice (its like a substring)
console.log(name.slice(2,4))
console.log(name.slice(2))

//replace
console.log(name.replace("arv","per").toUpperCase())

//concat
let name2="naman"
console.log(name2.concat(" is a friend of ",name ))
console.log(name2.concat(" is a friend of ",name," ok " ))

//trim  : remove whitespaces
let d="     meena      "
console.log(d.trim(d))

//Strings are immutable
let g="shivi"
console.log(g[0])
console.log(g[1])
console.log(g[2])

for (let i of g)
  {
    console.log(i)
  }