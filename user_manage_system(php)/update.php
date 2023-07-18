<?php
$con = mysqli_connect("localhost", "root", "0920", "sqldb") or die("connect failed");
$sql = "select * from usertbl where userID='" . $_GET['userID'] . "'";

$ret = mysqli_query($con, $sql);
if ($ret) {
    $count = mysqli_num_rows($ret);
    if ($count == 0) {
        echo $_GET['userID'] . " 등록된 회원의 없음" . "<br>";
        echo "<br><a href='main.html'>첫 화면</a>";
        exit();
    }
} else {
    echo "데이터 조회 실패"."<br>";
    echo "실패 원인 : ".mysqli_error($con);
    echo "<br><a href='main.html'>첫 화면</a>";
    exit();
}
    $row=mysqli_fetch_array($ret);
    $userID = $row["userID"];
    $name = $row["name"];
    $birthYear = $row["birthYear"];
    $addr = $row["addr"];
    $mobile1 = $row["mobile1"];
    $mobile2 = $row["mobile2"];
    $height = $row["height"];
    $mDate = $row["mDate"];

?>
<html>
<head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8">
    </head>
    <body>
        <h1>회원 정보 수정</h1>
        <form method="post" action="update_result.php">
            아이디 : <input type="text" name="userID" value=<?php echo $userID ?> readonly><br>
            이름 : <input type="text" name="name" value=<?php echo $name ?> ><br>
            출생년도 : <input type="text" name="birthYear" value=<?php echo $birthYear ?> ><br>
            지역 : <input type="text" name="addr" value=<?php echo $addr ?> ><br>
            휴대폰 앞자리 : <input type="text" name="mobile1" value=<?php echo $mobile1 ?> ><br>
            휴대폰 뒷자리 : <input type="text" name="mobile2" value=<?php echo $mobile2 ?> ><br>
            신장 : <input type="text" name="height" value=<?php echo $height ?> ><br>
            회원가입일 : <input type="text" name="mDate" value=<?php echo $mDate ?> readonly><br>
            <br>
            <input type="submit" value="정보 수정">
        </form>
        <a href="main.html">첫 화면</a>
    </body>
</html>
