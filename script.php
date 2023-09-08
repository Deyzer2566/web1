<?php
	$curtime = microtime(true);
	if($_SERVER['REQUEST_METHOD'] === "POST"){
		$x = $_POST['x'];
		$y = $_POST['y'];
		$R = $_POST['r'];
		$flag = 'bad';
		if($x >= 0 && $y >= 0){
			$k = -1/2;
			if($k*$x + $R/2 >= $y)
				$flag = 'good';
		}
		else if($x >= 0 && $y < 0){
			if($x >= $R && $y>=-$R/2)
				$flag = 'good';
		}
		else if($x <= 0 && $y <= 0){
			if($x*$x + $y*$y <= $R*$R/4)
				$flag = 'good';
		}
		echo $flag.','.$x.','.$y.','.$R.','.((new DateTime("now", new DateTimeZone('Europe/Moscow')))->format('d/m/Y H:i:s')).','.(microtime(true)-$curtime);
	}
?>