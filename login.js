function validateForm() {
    let x = document.forms["myForm"]["username"].value;
    let y = document.forms["myForm"]["password"].value;
    if (x == "") {
      alert("Please input username ");
      return false;
    }else if(y == ""){
      alert("Please input password ");
      return false;  
    }
  }