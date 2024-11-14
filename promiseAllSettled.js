/*promise.allSettled(): It returns a single promise that is fulfilled
with an array of result objects, one for each promise
Each result contains:
a status (either "fulfilled" or "rejected") and 
a value (fulfilled value) or reason (rejection reason)

har ek promise ke liye do cheez return hgi status and value



*/

const getData=()=>{
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
                
            resolve("Data from getData");
               
            },2000);
    });
}

const getError=()=>{
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
             reject("Error:data is not available");
               
            },2000);
    });
}

Promise.allSettled([getData(),getError()]).
then(results=>{
   results.forEach(result=>{
    if(result.status==="fulfilled"){

            console.log("value:", result.value);
        }
    else
        {

            console.log("Reason for rejection: ",result.reason,result.status);
        }
   })
    

});


