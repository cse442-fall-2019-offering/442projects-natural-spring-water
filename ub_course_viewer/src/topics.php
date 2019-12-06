<?php
$host = "tethys.cse.buffalo.edu";
$user = "wwong9";
$password = "50193191";
$dbname = "cse442_542_2019_fall_teamn_db";

$conn = mysqli_connect($host, $user, $password, $dbname);

if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
}

//print("Connection Success\n");

$sql = "SELECT * FROM topics"; // testing statement
$result = mysqli_query($conn, $sql);

$course_data = array();

if (mysqli_num_rows($result) > 0) {
        for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
                array_push($course_data, json_encode(mysqli_fetch_object($result)));
    }
        echo json_encode($course_data);
} else {
        //print("0 results");
}

mysqli_close($conn);

?>

