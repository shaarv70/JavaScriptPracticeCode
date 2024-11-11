const randomNumber=new Promise((resolve,reject)=>{

    //async operation:
    setTimeout(()=>{

        const randomValue=Math.random();
        if(randomValue>0.1){
            resolve(randomValue);
        }
        else{
            reject(new Error("Value is too small"));
        }

    },2000);

});
/* whenever promise is fullfilled then then block executes otherwise if promise is returning reject then 
catch block executes */
randomNumber.then(result =>{     //handler

    console.log("promise is fulfilled with the value: ",result);
})
.catch(error =>{  //handler

    console.log("promise is rejected with error: ",error);
});