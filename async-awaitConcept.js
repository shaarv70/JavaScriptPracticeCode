/* async-await is modern way of handling async calls/steps
used with promises
async -it is keyword used before function name
await - keyword/operator : async steps

Example :

async function(){
//it will return promise -this is mandatory
step -1 - sync - no need of await
await step -2 - async - means that particular step takes time to perform - need of await
await step-3 -async
}

function(){
  we cannot write await in this kind of function
}

async function(){

lets say we return 42   (if this happends then it will wrapped 42 into resolve promise and then return)
}

async function(){
throw new Error("mess")- in this case also it will wrap the error in reject promise and return
}

async function(){

-- dont have any await/async steps   - it is acceptable
}

async function3(){
return new Promise((resolve) => resolve (42);)
}

async function()
{
    await function3()
}*/


async function f1(){

    console.log("this is async function without any async step")
    return 42;
}

f1().then(result=>{

    console.log(result+ " is coming");

})


async function withError()
{
        throw new Error("Hi this is error");
}

withError().catch(result=>{

      console.log(`${result}`);

})


async function withPromise(){

   return new Promise((resolve,reject)=>{

    const random=Math.random();
     setTimeout(() => {
         
        if(random>1)
        {
            resolve(random);
        }
        else{
            reject(new Error("less than 1"));
        }

     },2000);

   })
}
    
async function getNumberInfo()
{   
      try{
      const num= await withPromise()
      console.log("Number is ",num);  
    }

    catch(error)
    {
        console.log(error);
    }
 }

   getNumberInfo();


