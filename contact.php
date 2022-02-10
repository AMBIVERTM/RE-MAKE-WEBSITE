<?php
$fname = $email = $subj = $msg = $nb = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $fname = test_input($_POST["fname"]);
  $email = test_input($_POST["email"]);
  $subject = test_input($_POST["subject"]);
  $message = test_input($_POST["message"]);
  $phonenumber = test_input($_POST["phonenumber"]);
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

echo "<h2>Your Input:</h2>";
echo $fname;
echo "<br>";
echo $email;
echo "<br>";
echo $subject;
echo "<br>";
echo $message;
echo "<br>";
echo $phonenumber;
?>