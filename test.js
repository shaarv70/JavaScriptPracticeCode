const randomNumber= new Promise((resolve,reject)=>{
const value=10;
     if(value>3)
     {
        resolve(value);
     }
     else{
        reject(new Error("This is wrong number"));
     }
});

randomNumber.then(result=>{

    console.log("this value is correct"+result);
}).catch(check=>{


    console.log("The error is :"+check);
})