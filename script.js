const password = document.getElementById("password");
const form = document.getElementById("form");


function validatePasswordLength() {

  if(password.value.length  <= 8){
    alert("Password Must Be at least 8 characters long.");
  } else{
    alert("Password Length Correct");

  }




}



/*

function validatePasswordLength(){

  if(password.value.length  <= 8){
    alert("Password Must Be at least 8 characters long.");
  } else{
    alert("Password Length Correct");

  }




}


*/ 