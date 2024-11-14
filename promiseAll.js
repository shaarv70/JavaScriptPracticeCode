//promise.all will give the result of all promises
//note: Promise.all handles only when all promises are resolved 
//In this case we have one rejected promise so we will get the o/p from catch only
//case1. : all promises resolved 

const function1=()=>{
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
                // resolve("Data from function 1");
                const data=[1,2,3,4];
                resolve(data); 
            },2000);
    });
}

const function2=()=>{
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
                // resolve("Data from function 2");
                const data=[5,6,7,8];
                resolve(data); 
            },2000);
    });
}

const function3=()=>{
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
                    //resolve("Data from function 3");
                    const data=[9,10,11,12];
                resolve(data); 
                },2000);
    });
}

Promise.all([function1(),function2(),function3()]).
then(result =>{
    console.log(result);
}).
catch(error =>{
    console.log(error);
});


//case 2: f1: resolved, f2: rejected

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

Promise.all([getData(),getError()]).
then(result =>{
    console.log("all data fetched");
}).
catch(error =>{
    console.log(error);
});