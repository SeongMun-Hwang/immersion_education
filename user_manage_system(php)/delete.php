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
    echo "데이터 조회 실패" . "<br>";
    echo "실패 원인 : " . mysqli_error($con);
    echo "<br><a href='main.html'>첫 화면</a>";
    exit();
}
$row = mysqli_fetch_array($ret);
$userID = $row["userID"];
$name = $row["name"];
?>
<html>

<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
</head>

<body>
    <h1>회원 정보 수정</h1>
    <form method="post" action="delete_result.php">
        아이디 : <input type="text" name="userID" value=<?php echo $userID ?> readonly><br>
        이름 : <input type="text" name="name" value=<?php echo $name ?>><br>
        <br>
        위 회원을 삭제하시겠습니까?
        <input type="submit" value="회원 삭제">
    </form>
    <a href="main.html">첫 화면</a>
</body>

</html>