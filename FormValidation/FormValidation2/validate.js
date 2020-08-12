function validate(){
  //Declaring all variables here
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var age = document.getElementById('age').value;
  var contact = document.getElementById('mobile').value;

  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

  //condition
  if (name != "" && email != "" && age != "" && contact != "") {
    if (email.match(emailReg)) {
      if (document.getElementById('male').checked || document.getElementById("female").checked) {
        if (!isNaN(age) && age>12 && age<30) {
          if (contact.length == 10) {
            alert('All Value is fine, form is submitted.');
          }else {
            alert('Please enter a valid 10 digit No.');
            return false;
          }
        }else {
          alert('Please Enter a valid age between 12 to 30');
          return false;
        }
      }else {
        alert('Please select a gender');
        return false;
      }

    }else {
      alert('Enter a valid email');
      return false;
    }

  }else {
    alert('All fields are required!');
    return false;
  }
}
