//It is not possible in JS since it is a concept of compile type polumorphism and JS is runtime language

function print(){

    console.log("hi");
}

function print(name){

    console.log("hi"+" "+name);
}

function print(name,age){

    console.log("hi"+" "+name+" "+age);
}

print() // third function will be called always
print("Arvind",30);
 
//doesnt matter where you will call print() always 3 print() will be called
