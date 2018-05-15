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

function parseVector(str) {
	if (!str.includes(",")) {
        return null;
    }
	var x = parseFloat(str);
	str = str.slice(str.indexOf(",") + 1);
	var y = parseFloat(str);
	str = str.slice(str.indexOf(",") + 1);
	var z = parseFloat(str);
	var values = [x, y, z];
	document.getElementById("vec").innerHTML = "Vector: " + values;
	return values;
}

function getMagnitude(str) {
	var values = parseVector(str);
	var sum = 0;
	for (var i = 0; i < values.length; i++) {
		sum += values[i];
	}
	document.getElementById("mag").innerHTML = "Magnitude: " + Math.sqrt(sum);
}

function changeType(curr, newType) {
	var f = "force";
	var n = "text";
	document.getElementById(curr).type = newType;
}