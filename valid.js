let x = document.getElementById("x");
let y = document.getElementById("y");
let r = document.getElementById("r");
let checkButton = document.getElementById("button");
function checkFields(){
	if(y.value == "")
	{
		alert("Введите значение y");
		return false;
	}
	if(isNaN(parseFloat(y.value)))
	{
		alert("Введите в поле y число!");
		return false;
	}
	if(y.value<-3 || y.value > 5)
	{
		alert("Введенный y не входит в интервал [-3;5]!");
		return false;
	}
	if(r.value == "")
	{
		alert("Введите значение R");
		return false;
	}
	if(isNaN(parseFloat(r.value)))
	{
		alert("Введите в поле R число!");
		return false;
	}
	if(r.value<2 || r.value > 5)
	{
		alert("Введенный R не входит в интервал [2;5]!");
		return false;
	}
	return true;
}