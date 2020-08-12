function validateTextbox() {

  var box = document.getElementById("name");
  var box2 = document.getElementById("address");
  var box3 = document.getElementById("phone");
  var box4 = document.getElementById('email');
  var para = document.getElementById('errorMessage');

  if (box.value == "" || box2.value == "" || box3.value == "" || box4.value == "") {

    // alert("The field can not be blank!");
    para.innerText = "fields can not be blank";
    para.style.color = "red";
    box.focus();
    box.style.border = "solid 3px red";
    return false;
  }
}
