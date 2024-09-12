//callback function - called after asynchronoous task/function


//basic callback

function greet(name,callback){

    console.log("hello"+name);//normal /sync/task, could be an async call/api
    callback();
}

//callback function
function welcome(){
    console.log("welcome");
}

greet("arvind",welcome);


//callback function with async function/process 
function printInfo(name,callback){
    //async function/task/step:
    setTimeout(function() {
        console.log("printing info for "+name);
        callback("plz call me back");
    }, 500);  //delay of 5000ms/5s
}

function displayMessage(mesg){

    console.log(mesg)
}

printInfo("arvind",displayMessage);


//
function fetUserID(userID,callback){

    setTimeout(function(){             //async function
        const user={
            1:{id:1,name:"arvind"},
            2:{id:2,name:"tom"}
        };

        const myuser=user[userID];
          if(myuser){
            callback(null,myuser);
        }  
        else{
            callback("user not found",null);
        }
    },2000);
}
    //callback function
    function userData(error,user){
     if(error){
        console.log("Error:",error);
     }
     else{
        console.log("User:",user);
     }

    }

    fetUserID(2,userData);







