function togglePopup(){

    document.getElementById("popup-1").classList.toggle("active")
    console.log("success")
}



function togglePopup2(){

    document.getElementById("popup-2").classList.toggle("active")
    console.log("success")

}

function togglePopup3(){

document.getElementById("popup-3").classList.toggle("active")
console.log("success")

}







document.querySelector(".myform").addEventListener("submit", adddata);

//var arr = JSON.parse(localStorage.getItem("todolist")) || [];


function adddata(event){

event.preventDefault()

console.log("success")


var cardnum = document.querySelector('.cardnum').value;
var cardmon = document.querySelector(".cardmon").value;
var cardyear = document.querySelector('.cardyear').value;
var cvv = document.querySelector(".cvv").value;


if(cvv == 123){

    alert("Congratulation! your payment is succesful");
    window.location.href= "../landing/landing_my.html"

}

else if(cvv == ""){
 alert("Please before fill the  Credit Card detail")
}

else{
    alert("Sorry ! invalid data")
}



}










document.querySelector(".myformII").addEventListener("submit", adddata2);

//var arr = JSON.parse(localStorage.getItem("todolist")) || [];


function adddata2(event){

event.preventDefault()

console.log("success")


var cardnum = document.querySelector('.cardnumII').value;
var cardmon = document.querySelector(".cardmonII").value;
var cardyear = document.querySelector('.cardyearII').value;
var cvv = document.querySelector(".cvvII").value;


if(cvv ==456){

    alert("Congratulation ! your payment is succeful");
    window.location.href= "../landing/landing_my.html"

}


else if(cvv == ""){
    alert("Please before fill Debit Card  detail")
   }
   
else{
    alert("Sorry ! invalid data")
}



}







document.querySelector(".myformIII").addEventListener("submit", adddata3);

//var arr = JSON.parse(localStorage.getItem("todolist")) || [];


function adddata3(event){

event.preventDefault()

console.log("success")


var mobile = document.querySelector('.cardnumIII').value;
var amount= document.querySelector(".amount").value;
var pin = document.querySelector(".pin").value;


if(pin ==1234){

    alert("Congratulation ! payment is successful");
    window.location.href= "../landing/landing_my.html"

}


else if(pin == ""){
    alert("Please before fill UPI Pin")
   }
   
//added
else{
    alert("Sorry ! invalid data")
}



}










    