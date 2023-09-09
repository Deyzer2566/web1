<?php
	$curtime = microtime(true);
	if($_SERVER['REQUEST_METHOD'] === "POST"){
		$flag = '';
		if(!is_numeric($_POST['x']))
			$flag = 'x';
		else if(!is_numeric($_POST['y']))
			$flag = 'y';
		else if(!is_numeric($_POST['r']))
			$flag = 'r';
		else
			{
				$x = (float)$_POST['x'];
				$y = (float)$_POST['y'];
				$R = (float)$_POST['r'];
				if(!($x == -2 || $x==-1.5 || $x==-1 || $x==-0.5 || $x==0
				|| $x == 2 || $x==1.5 || $x==1 || $x==0.5))
					$flag = 'x';
				else if($y > 5 || $y<-3)
					$flag = 'y';
				else if($R < 2 || $R >5)
					$flag = 'r';
				else{
					$flag = 'bad';
					if($x >= 0 && $y >= 0){
						$k = -1/2;
						if($k*$x + $R/2 >= $y)
							$flag = 'good';
					}
					else if($x >= 0 && $y < 0){
						if($x <= $R && $y>=-$R/2)
							$flag = 'good';
					}
					else if($x <= 0 && $y <= 0){
						if($x*$x + $y*$y <= $R*$R/4)
							$flag = 'good';
					}
				}
			}
		echo $flag.','.$x.','.$y.','.$R.','.((new DateTime("now", new DateTimeZone('Europe/Moscow')))->format('d/m/Y H:i:s')).','.(microtime(true)-$curtime);
	}
?>
