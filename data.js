checkButton.onclick = function(){
	if(checkFields())
	{		
		let xhr = new XMLHttpRequest();
		xhr.onload = function(){
			let cookies = document.cookie
			.split("; ")
			.find((row) => row.startsWith("history="))
			?.split("=")[1];
			
			if(xhr.response.startsWith('x'))
			{
				alert('Неккоректное значение x');
				return;
			}
			if(xhr.response.startsWith('y'))
			{
				alert('Неккоректное значение y');
				return;
			}
			if(xhr.response.startsWith('r'))
			{
				alert('Неккоректное значение R');
				return;
			}
			if(cookies !== undefined)
			{
				cookies = decodeURI(cookies);
				cookies += '$'+xhr.response;
			}
			else
				cookies = xhr.response;
			document.cookie = 'history='+encodeURI(cookies);
			updateTable();
			redraw();
		}
		xhr.open("POST","script.php");
		let formData = new FormData(document.getElementById("form")); // создаём объект, по желанию берём данные формы <form>
		formData.append('x',selectedX);
		xhr.send(formData);
	}
};
function updateTable(){
	table = document.getElementById('table');
	content = String.raw`<thead><tr>
	<th>X</th>
	<th>Y</th>
	<th>R</th>
	<th>Результат</th>
	<th>Время</th>
	<th>Время исполнения скрипта</th>
	</tr>
	</thead>
	<tbody>`;
	cookies = document.cookie
		.split('; ')
		.find((row) => row.startsWith("history="))
		?.split("=")[1];
	if(cookies == undefined)
		return;
	cookies = decodeURI(cookies);
	cookies.split('$').forEach((el) => {
		content += "<tr>";
		els = el.split(',');
		els = [els[1],els[2],els[3],els[0],els[4],els[5]];
		if(els[3] == 'bad')
			els[3] = '-';
		else
			els[3]='+';
		els.forEach((elem)=>{
			content+="<td>"+elem+"</td>";
		});
		content += "</tr>";
	});
	content += "</tbody>";
	table.innerHTML = content;
}
updateTable();
