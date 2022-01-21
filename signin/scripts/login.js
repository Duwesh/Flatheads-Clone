async function login(event)
{
    event.preventDefault();
    try{
        var login_data ={
            username:document.getElementById("login_username").value,
            password:document.getElementById("login_password").value,
        }
        login_data=JSON.stringify(login_data);
        console.log(login_data)
        getData(login_data);
    }
   
   catch(err){
       console.log(err);
   }
}
async function getData(login_data)
{
   try{
   let login_url =`https://masai-api-mocker.herokuapp.com/auth/login`
   let response = await fetch(login_url,{
       method:'POST',
       body:login_data,
       headers:{
           "Content-Type":"application/json",
       },
   });
   let data = await response.json();
   // let username = document.getElementById("login_username").value;
   if(data.error==false)
   {
       window.location.href = "./home.html";
   }
   console.log(data);
   get_User();
}
  
 catch(err){
   console.log(err);
   document.querySelector("#err_alert").style.display="block";
  
 
      
 }
}   
   async function get_User(username,token){

       let api = `https://masai-api-mocker.herokuapp.com/user/${username}`
       try{
           let res = await fetch(api,{
           headers:{
               "Content-Type":"application/json",
               Authorization:`Bearer ${token}`,

           },

       });
        let data = await res.json();
        console.log(data)
       }
       catch(err){
           console.log('err:', err)
       }
      
       
       
   }
function link()
{
    window.location.href = "./signup.html";
}