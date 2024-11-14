//sync vs async behaviour:

/*synchronous behaviour means threads will run one after another
which means a thread will wait for one task to complete then it will
proceed to next task*/ 
// blocking behaviour for the user.


/*aynchronous behaviour means all the tasks can run parallely, its not dependable on single task
examle:    task1: 30sec
            task2 :10 sec
            task 3: 20 sec
            so it will run all the tasks and if we want to run some specefic task
            after a particular task then we can use callback function, promises
*/

//Example :async

console.log("start");
setTimeout(()=>{

    console.log("Hello world");
},1000);
console.log("end");

//First start and end will print then hello world