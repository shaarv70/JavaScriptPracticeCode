/*In order to avoid the problem of nested callback we have the concept of nested promises or async-await in JS*/ 

//nestedpromises
asyncFunction1()
.then(result1=>asyncFunction2(result1))
.then(result2=>asyncFunction3(result2))
.then(result3=>asyncFunction4(result3))
.catch(error);{
//code
}

//async-await

async function myFunction(){

try{
        const result1= await asyncFunction1();
        const result2= await asyncFunction2(result1);
        const result3= await asyncFunction3(result2);
        const result4= await asyncFunction3(result3);
}
catch(error){
}}

/*await holds the execution of current function and once the result of
that function is ready then it will run the next function which is very useful if handling multiple asynchronous
operations. It makes readibility easier, error handling easier and debugging will be easier */