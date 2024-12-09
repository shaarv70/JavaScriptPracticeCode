//arrays are of object type

let a= [1,2,3,4,]
 console.log(a)

 let c=[1,2,3,4,null,false,"Not given"]
 console.log(c[2])
 console.log(c[4])

 //array length
 console.log(c.length)

 c[7]="Arvind"  //Adding new value to array
console.log(c[7])  
 
 for (let i in c)
 {
    console.log(c[i])
 }
 
 let g = new Array(8); // Creates an array with 8 empty slots
g = [1, 2, 3, 3, 4, 4, 5, 5]; // Populates the array with specific values
console.log(g); // Outputs: [1, 2, 3, 3, 4, 4, 5, 5]


let browsers=[

{    "name":"Chrome",
      "version":80
 },
 {
   "name":"firefox",
   "version":90
}
]

console.log(browsers[0].version);




 
 
 
 
 
 
 
 
