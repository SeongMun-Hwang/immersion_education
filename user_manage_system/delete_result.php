<?php
$con = mysqli_connect("localhost", "root", "0920", "sqldb") or die("connect failed");

$userID = $_POST["userID"];


$sql = "delete from usertbl where userID='".$userID."'";
$ret = mysqli_query($con, $sql);

echo "<h1>회원 삭제 결과</h1>";
if ($ret) {
    echo $userID. "회원이 삭제됨";
} else {
    echo "데이터 삭제 실패";
    echo "실패 원인 : " . mysqli_error($con);
}
mysqli_close($con);

echo "<br><a href='main.html'>첫 화면</a>";
?>