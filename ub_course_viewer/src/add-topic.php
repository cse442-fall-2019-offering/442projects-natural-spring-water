<?php
	$value = isset($_SERVER["REQUEST_METHOD"]) ? $_SERVER['REQUEST_METHOD'] : null;
	if(is_null($value)){
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

				/*$num_rows = 0;
				if($result=mysqli_query($conn, "SELECT * FROM topics")){
					$num_rows = mysqli_num_rows($result);
				}*/

				//if($num_rows != 0){
					/*$next_row = $num_rows+1;*/
					$statement = mysqli_stmt_init($conn);
					mysqli_stmt_prepare($statement, "INSERT INTO topics VALUES(?, ?, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')");
					mysqli_stmt_bind_param($statement, "is", $_POST["id"], $_POST["topic"]);
					mysqli_stmt_execute($statement);

					if(mysqli_stmt_affected_rows($statement) > 0){
						echo "success";
					}else{
						echo "failed";
					}
					mysqli_stmt_close($statement);
				//}

				mysqli_close($conn);
		}
	}
?>
