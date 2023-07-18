<?php
$con = mysqli_connect("localhost", "root", "0920", "sqldb") or die("connect failed");

$userID = $_POST["userID"];
$name = $_POST["name"];
$birthYear = $_POST["birthYear"];
$addr = $_POST["addr"];
$mobile1 = $_POST["mobile1"];
$mobile2 = $_POST["mobile2"];
$height = $_POST["height"];
$mDate = $_POST["mDate"];

$sql = "update usertbl set "
    . "name = '" . $name . "', "
    . "birthYear = '" . $birthYear . "', "
    . "addr = '" . $addr . "', "
    . "mobile1 = '" . $mobile1 . "', "
    . "mobile2 = '" . $mobile2 . "', "
    . "height = " . $height . ", "
    . "mDate = '" . $mDate . "' "
    . "where userID = '" . $userID . "'";


$ret = mysqli_query($con, $sql);

echo "<h1>신규 회원 수정 결과</h1>";
if ($ret) {
    echo "데이터 수정 성공";
} else {
    echo "데이터 수정 실패";
    echo "실패 원인 : " . mysqli_error($con);
}
mysqli_close($con);
echo "<br><a href='main.html'>첫 화면</a>";
?>