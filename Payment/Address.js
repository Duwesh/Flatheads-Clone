
var userdata = JSON.parse(localStorage.getItem("userdatabase")) || [];

document.querySelector('.addressform').addEventListener('submit', adddata)

//document.querySelector(".myform").addEventListener("submit", adddata);



function adddata(event){

    event.preventDefault()

    var email = document.getElementById("email").value;
    var firstname = document.getElementById("firstname").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
  //  var state = document.getElementById("select_state").value;
    var pincode = document.getElementById("pincode").value;
    var phone = document.getElementById("phone").value;

   if(email == ""){

    document.getElementById("emailid").innerHTML="Enter a valid email"
    return false;
 }



 else if(firstname == ""){
    document.getElementById("firstnamediv").innerHTML = "Enter an First name"
    return false;
   }
  
  

 else if(address == ""){
  document.getElementById("youraddress").innerHTML = "**Enter an address "
 // return false;
 }


 else if(city == ""){
 document.getElementById("citydiv").innerHTML = " Enter a city"
 return false;
 }


 else if(pincode == ""){
    document.getElementById("pincodediv").innerHTML = "Enter a PIN code"
    return false;
    }
   

    else if(phone == ""){
        document.getElementById("phonediv").innerHTML = "Enter a phone number to use this delivery method"
        return false;
        }
    

 

    console.log("success")




    var email = document.querySelector("#email").value;
    var address= document.querySelector("#address").value;


    var userinformation={

        email:email,
        address:address,
    };


    userdata.push(userinformation);

    localStorage.setItem("userdatabase",JSON.stringify(userdata))




    window.location.href="shipping.html"
}







//checking


 document.querySelector("#checkbtn").addEventListener("click", crosscheck);



// var registeruser = JSON.parse(localStorage.getItem("userdatabase"))


 function crosscheck(){

    console.log("successbtn")

 }
//     var checkemail = document.querySelector("#emailcheck").value;

//     var checkaddress= document.querySelector("#addresscheck").value;



//     if(checkemail == "admin@123"  && checkaddress == "@123"){

//         window.location.href = "main.html"

//     }

//     else{

//         for(var i = 0; i < registeruser.length; i++){

//             if(registeruser[i].email == checkemail  &&  registeruser[i].password == checkpassword ){

//                 window.location.href = "slideshow.html"

//                 var flag = true;
//                 break;

//             }

//         }

//             if(flag){
//              alert("login Successful")
//             }


//             else{
//                 alert("your data is not registered")
//             }

//         }
    
    
//    // console.log("loginsuccessful")
         

