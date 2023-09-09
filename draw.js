canvas = document.getElementById('canvas');
context = canvas.getContext("2d");
function redraw(){
	context.clearRect(0,0,300,300);
	context.fillStyle='rgb(51,153,255)';
	context.strokeStyle = 'rgba(0,0,0,0)';
	context.moveTo(150,100);
	context.lineTo(250,150);
	context.lineTo(150,150);
	context.fill();
	
	context.fillRect(150,150,100,50);
	
	context.beginPath();
	context.moveTo(150,150);
	context.fillStyle='rgb(51,153,255)';
	context.arc(150,150,50,Math.PI/2,Math.PI);
	context.lineTo(150,150);
	context.fill();

	context.beginPath();
	
	context.strokeStyle = 'rgba(0,0,0,1)';
	context.fillStyle='rgb(0,0,0)';
	
	context.moveTo(150,0);
	context.lineTo(145,10);
	context.moveTo(150,0);
	context.lineTo(155,10);

	context.font = "15px sans-serif";
	context.fillText('y',160,10);

	context.moveTo(150,0);
	context.lineTo(150,300);//ось y
	
	context.moveTo(300,150);
	context.lineTo(290,145);
	context.moveTo(300,150);
	context.lineTo(290,155);
	
	context.fillText('x',290,140);
	
	context.moveTo(0,150);
	context.lineTo(300,150);//ось x
    context.closePath();
	context.stroke();
	
	context.fillText("R/2",155,100);
	context.fillText("R/2",190,145);
	context.fillText("R/2",155,200);
	context.fillText("R/2",90,145);
	context.fillText("R",240,145);
	
	cookies = document.cookie
		.split('; ')
		.find((row) => row.startsWith("history="))
		?.split("=")[1];
	if(cookies == undefined)
		return;
	cookies = decodeURI(cookies);
	cookies.split('$').forEach((el) => {
		els = el.split(',');
		els = [els[1],els[2],els[3],els[0]];
		if(els[3] == 'bad')
			els[3] = 'red';
		else
			els[3]='green';
		context.beginPath();
		let x = parseFloat(els[0])/parseFloat(els[2])*100+150;
		let y = 150 - parseFloat(els[1])/parseFloat(els[2])*100;
		context.moveTo(x,y);
		context.arc(x,y,3,0,Math.PI*2);
		context.fillStyle=els[3];
		context.fill();

	});
	}
redraw();
