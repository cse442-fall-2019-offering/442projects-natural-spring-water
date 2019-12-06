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
				$statement = mysqli_stmt_init($conn);
				mysqli_stmt_prepare($statement, "UPDATE courses SET associated_topics=? WHERE code=?");
				mysqli_stmt_bind_param($statement, "ss", $_POST["associated"], $_POST["code"]);
				mysqli_stmt_execute($statement);
			
				if(mysqli_stmt_affected_rows($statement) == 1){
					echo "success";
				}else{
					echo "failed";
				}
				mysqli_stmt_close($statement);
				
				mysqli_close($conn);
		}
	}
?>
