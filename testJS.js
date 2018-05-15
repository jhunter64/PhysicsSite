function momentumCalculate() {
		var mass = document.getElementById("mass").value 
		var velocity = document.getElementById("velocity").value
		var momentum = mass * velocity
		document.getElementById("momentum").innerHTML += momentum
}
function changeColor() {
		var p = document.getElementById("momentum");
		p.style.color = "red"
}