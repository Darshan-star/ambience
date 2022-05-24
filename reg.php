<?php
session_start(); 
$servername ="localhost";
$username ="root";
$password ="";
$db ="college123";

$con = mysqli_connect($servername,$username,$password,$db);

		if($con){
         } else{
            echo('server error');
            }
if (isset($_POST['submit'])) {
	$username = $_POST['username'];
    $email = $_POST['email'];
	$password =$_POST['password'];




	$insertquery = "INSERT into register (username,email, password) VALUES ('$username','$email','$password')";
	$iquery = mysqli_query($con, $insertquery);
	
	if ($iquery) {
	   echo('submit done');
	}else{
        echo('error');
    }
}

?>