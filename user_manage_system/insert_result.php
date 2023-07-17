<?php
$con=mysqli_connect("localhost","root","0920","sqldb") or die("connect failed");
$userID=$_POST["userID"];
$name=$_POST["name"];
$birthYear=$_POST["birthYear"];
$addr=$_POST["addr"];
$mobile1=$_POST["mobile1"];
$mobile2=$_POST["mobile2"];
$height=$_POST["height"];
$mDate=date("Y-m-j");

$sql="insert into usertbl (userID, name, birthYear, addr, mobile1, mobile2, height, mDate)
      values('".$userID."','".$name."','".$birthYear."','".$addr."','".$mobile1."','".$mobile2."',".$height.",'".$mDate."')";

$ret =mysqli_query($con,$sql);

echo "<h1>신규 회원 입력 결과</h1>";
if($ret){
    echo "데이터 입력 성공";
}
else {
    echo "데이터 입력 실패";
    echo "실패 원인 : ".mysqli_error($con);
}
mysqli_close($con);
echo "<br> <a href='main.html'>첫화면</a>";
?>