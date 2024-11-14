 /*Promise.Race() will give the output for which promise execution first comletes
 it doesnt mattter whether the promise is fulfilled or rejected*/


 const resolvePromise=()=>{
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
                
            resolve("Data from resolve");
               
            },300);
    });
}

const rejectPromise=()=>{
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
             reject("Error:data is not available");
               
            },500);
    });
};

//in thisncase it will return resolve promise since resolve promise executes first having 300ms
Promise.race([resolvePromise(),rejectPromise()]).
then(result =>{
    console.log("result:",result);
}).
catch(result =>{
    console.log("error: ",result);
});