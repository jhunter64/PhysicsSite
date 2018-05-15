function momentumCalculate() {
	var mass = document.getElementById("mass").value 
	var velocity = document.getElementById("velocity").value
	var momentum = mass * velocity
	document.getElementById("momentum").innerHTML = "Momentum: " + momentum
}

function changeColor() {
	var p = document.getElementById("momentum");
	p.style.color = "red"
}

function workCalculate() {
	var force = document.getElementById("force").value
	var distance = document.getElementById("distance").value
	var work = force * distance
	document.getElementById("work").innerHTML = "Work: " + work
}