<?php
/*
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // collect value of input field
    $username = $_POST['username'];
    $password = $_POST['password'];
    if (username($username)) {
      echo "Username is ".$username;
    }else if(password($password){
      echo "Password is ".$password;  
    }else {
      echo "You don't put data yet";
    }
      
  }
  */
  // define variables and set to empty values
$username = $password = "";
  if ($_SERVER["REQUEST_METHOD"] == "POST") { 
$username = $_POST['username'];
$password = $_POST['password'];

echo "Your username is :".$username;
echo "Your password is :".$password;
  }

?>
