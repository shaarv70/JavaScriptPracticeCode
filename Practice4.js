//firdt wuestion
let name="har\""
console.log(name.length)//4

//includes

let sen="My name is arvind"
let word="arvind"
console.log(sen.includes(word))

//another method
console.log(`The word" ${word} ${sen.includes(word)?"is":"is not"} in sentence`)

console.log(word.startsWith("arv"))
console.log(word.endsWith("nd"))

let k="YOU Are FOOL"
console.log(k.toLowerCase())
console.log(k.toLowerCase())

//Next question
let str= "Please give Rs 1000"
let amount=str.slice("Please give Rs ".length)
amount=Number.parseInt(amount)
console.log(amount)

//next question
let friend="Deepika"
console.log(friend.replace("p","R"))


