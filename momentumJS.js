function momentumCalculate() {
	var mass = document.getElementById("mass").value 
	var velocity = document.getElementById("velocity").value
	var momentum = document.getElementById("momentum").value
	if (momentum == "") {
		momentum = mass * velocity
		document.getElementById("momentum").value = momentum
	}
	if (mass == "") {
		mass = momentum / velocity
		document.getElementById("mass").value = mass
	}
	if (velocity == "") {
		velocity = momentum / mass
		document.getElementById("velocity").value = velocity
	}
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
	return values;
}

function multiplyVector(v, n) {
	var vector = parseVector(v);
	var i;
	for (i = 0; i < vector.length; i++) {
		vector[i] *= n;
	}
	document.write(vector);
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

function resetMomentum() {
	document.getElementById("mass").value = ""
	document.getElementById("velocity").value = ""
	document.getElementById("momentum").value = ""
}

function resetCollision() {
	document.getElementById("m1").value = ""
	document.getElementById("m2").value = ""
	document.getElementById("vi1").value = ""
	document.getElementById("vi2").value = ""
	document.getElementById("vf1").value = ""
	document.getElementById("vf2").value = ""
}

function collisionCalculate() {
	var m1 = document.getElementById("m1").value
	var m2 = document.getElementById("m2").value
	var vi1 = document.getElementById("vi1").value
	var vi2 = document.getElementById("vi2").value
	var vf1 = document.getElementById("vf1").value
	var vf2 = document.getElementById("vf2").value
}






