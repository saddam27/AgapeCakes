<?php
require "connection.php";

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$ProductName = $request->ProductName;
$Price = $request->Price;
$Description = $request->Description;
$Image = $request->image;


$sql="insert into productdetail(ProductName,Price,Description,Image) values('$ProductName','$Price','$Description','$Image')";

if(mysqli_query($con,$sql))
{
	echo json_encode ("Product added");
}

?>