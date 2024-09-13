/*Promise.any() will return the first resolved promise no matters 
if reject promise executes first, if all the promises are rejected the it will return
all reject promises
*/


const function1=()=>{
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
                // resolve("Data from function 1");
                const data=[1,2,3,4];
                resolve(data); 
            },500);
    });
}

const function2=()=>{
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
                // resolve("Data from function 2");
                const data=[5,6,7,8];
                reject(data); 
            },300);
    });
}

const function3=()=>{
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
                    //resolve("Data from function 3");
                    const data=[9,10,11,12];
                resolve(data); 
                },1000);
    });
};

Promise.any([function1(),function2(),function3()]).
then(result =>{
    console.log("First successful result ",result);
}).catch(error =>{

    console.log("All promises reject",error);
});