<?php

$name = $_POST['fname'];
$useremail = $_POST['email'];
$subject = $_POST['subj'];
$message = $_POST['msg'];
$phonenumber = $_POST['nb'];

echo "Your name is :".$name;
echo "Your email is :".$useremail;
echo "Subject is :".$subject;
echo "message :".$message;
echo "Your phone number is :".$phonenumber;

?>