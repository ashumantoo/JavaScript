//function to checks for empty fields
function CheckEmpty(field_id){
  var MyValues = document.getElementById(field_id);
  if (MyValues.value == "" || MyValues.value == null) {
     displayWarning(field_id,MyValues.parentNode.id,"You can't leave this empty");
  }
}
function ValidateName(name_id){
  var name = document.getElementById(name_id).value;
      name = Myname.trim();
  if (name.length < 6) {
    alert('Name must be atleast 6 Characters Long');
  }
}

function ValidateEmail(email_id){
  var email = document.getElementById(email_id).value;
      email = email.trim();
  var emailReg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email.match(emailReg)) {
    alert('Please Enter a Valid email');
  }
}

function ValidatePassword(password_id){
  var password = document.getElementById(password_id).value;
      password = password.trim();
  var passRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  if (!password.match(passRegex)) {
    alert('Password must contain uppercase,lowercase, numbers, Special Characters and it must be of 8 Characters');
  }
}

function ValidateConfirmPass(password,confirmPass){
  var password = document.getElementById(password).value;
  var Confirm_pass = document.getElementById(confirmPass).value;

  password = password.trim();
  Confirm_pass = Confirm_pass.trim();

  if (password !== Confirm_pass) {
    alert('Confirm Password did not matched');
  }
}

function ValidateSelect(select){
  var selectOption = document.getElementById(select).selectedIndex;
  if (selectOption == 0) {
    alert('Please Select your country');
  }
}

function ValidateCheckbox(checkbox){
  var checkBox = document.getElementById(checkbox).checked;
  if (checkBox == false) {
    alert("You must agree to proceed!");
  }
}

//function to display error message
function displayWarning(field_id,parent_div,message){
  var x = document.getElementById(parent_div).querySelectorAll(".warning_msg").length;
  if (x == 0) {
    var para = document.createElement("p");
    para.setAttribute("class"," warning_msg");
    var error_msg = document.createTextNode(message);
    para.appendChild(error_msg);
    document.getElementById(parent_div).appendChild(para);
    document.getElementById(field_id).className += " warning_brd";
  }
}
