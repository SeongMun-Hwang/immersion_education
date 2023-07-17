<?php
$db_host="localhost";
$db_user="root";
$db_password="0920";
$db_name="sqldb";
$con=mysqli_connect($db_host, $db_user, $db_password, $db_name);
if(mysqli_connect_errno()){
    echo "mysql connect failed!","<br>";
    echo "error : ",mysqli_connect_error();
    exit();
}
echo "mysql connect success!"."<br>";

$sql="
select * from usertbl;
";
$ret=mysqli_query($con, $sql);

if($ret){
    echo mysqli_num_rows($ret), " : numbers detected<br>";
    while($row =mysqli_fetch_array($ret)){
        echo $row['userID']," ",$row['name']," ",$row['height']," ","<br>";
    }
}
else {
    echo "create failed"."<br>";
    echo "error occured: ".mysqli_error($con);
}
mysqli_close($con);
?>
