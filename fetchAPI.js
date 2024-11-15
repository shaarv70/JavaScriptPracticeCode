const fetchUserInfo = async ()=>{

    const response= await fetch('https://reqres.in/api/users?page=2')
    
    if (!response.ok)
    {
        throw new Error("user data not dound")
    }

   const data= await response.json();   //parsing into json
   console.log(data);
}

fetchUserInfo();