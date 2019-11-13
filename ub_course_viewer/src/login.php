<?php
	$value = isset($_SERVER["REQUEST_METHOD"]) ? $_SERVER['REQUEST_METHOD'] : null;
	if($value == null){
		echo "null\n";
	}else{
		switch($value){
			case "GET":
				//do nothing
			case "POST":
				$host = "tethys.cse.buffalo.edu";
    			$user = "wwong9";
    			$password = "50193191";
    			$dbname = "cse442_542_2019_fall_teamn_db";

    			$conn = mysqli_connect($host, $user, $password, $dbname);

				if (mysqli_connect_errno()) {
					printf("Connect failed: %s\n", mysqli_connect_error());
					exit();
				}

				$statement = mysqli_stmt_init($conn);
				mysqli_stmt_prepare($statement, "SELECT user_id FROM users WHERE user=? AND password=?");
				mysqli_stmt_bind_param($statement, "ss", $_POST["user"], htmlspecialchars($_POST["password"]));
				mysqli_stmt_execute($statement);

				mysqli_stmt_bind_result($statement, $result);

				mysqli_stmt_fetch($statement);

				if($result > -1){
					echo "Success";
				}else{
					echo json_encode("temporary delays");
				}

				mysqli_stmt_close($statement);
				
				mysqli_close($conn);
		}
	}
?>
