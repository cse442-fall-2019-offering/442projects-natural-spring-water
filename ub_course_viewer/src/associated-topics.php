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
				mysqli_stmt_prepare($statement, "SELECT associated_topics FROM courses WHERE code=?");
				mysqli_stmt_bind_param($statement, "s", $_POST["code"]);
				mysqli_stmt_execute($statement);
				mysqli_stmt_bind_result($statement, $result);
				mysqli_stmt_fetch($statement);
				if(!is_null($result) && !empty($result)){
					echo $result;
				}else{
					echo "failed";
				}
				mysqli_stmt_close($statement);
				
				mysqli_close($conn);
		}
	}
?>
