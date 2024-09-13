function getEvenNumber(value,delay){


return new Promise((resolve,reject)=>{

setTimeout(()=>{
    
    if(value%2===0){
        resolve(value);
    }
    else{

        reject(new Error("Value is not even number"));
    }
},delay);

});
}

//promise chain
getEvenNumber(4,1000).then(result =>{

console.log("step1: Getting the result with even number: ",result);
return getEvenNumber(6,2000);

}).then(result=>{

    console.log("step 2:Getting the result with even number: ",result);
}).
catch(error=>{
console.error("Promise chain error: ",error);

});