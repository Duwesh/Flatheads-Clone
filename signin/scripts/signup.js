function login_link()
{
    window.location.href="./login.html";
}

document.querySelector("#create").addEventListener("click",Register)
async function Register(event){
    event.preventDefault();
    try
    {
      var register_data={
          name:document.getElementById('name').value,
          email:document.getElementById("email").value,
          username:document.getElementById("username").value,
          password:document.getElementById("password").value,
          mobile:document.getElementById("mobile").value,
          description:document.getElementById("description").value,
      }
      register_data=JSON.stringify(register_data)
      console.log(register_data);
  }
  catch(err)
  {
      console.log(err)
  }
  let reg_api = `https://masai-api-mocker.herokuapp.com/auth/register`
  let response = await fetch(reg_api,{
      method:'POST',
      body:register_data,
      headers:{
          "Content-Type":'application/json'
      },
  });
  let data = await response.json();
  if(data.error == false)
  {
      window.location.href = "./login.html"
  }
  else{
      alert("This username already exists");
  }
  console.log(data);
  }



