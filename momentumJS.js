function momentumCalculate() {
	var mass = document.getElementById("mass").value 
	var velocity = document.getElementById("velocity").value
	var momentum = document.getElementById("momentum").value
	var isMagnitude = document.getElementById("inputMagnitude").checked
	var isVector = document.getElementById("inputVector").checked
	if (momentum == "") {
		if (isMagnitude) {
			momentum = mass * velocity	
		}
		else if (isVector) {
			var v1 = parseVector(velocity);
			var m1 = multiplyVector(v1, mass);
			momentum = toStringVector(m1);
		}
		document.getElementById("momentum").value = momentum;
	}
	if (mass == "") {
		if (isMagnitude) {
			mass = momentum / velocity	
		}
		else if (isVector) {
			var v1 = parseVector(velocity);
			var m1 = parseVector(momentum);
			if ((m1.arr[0] / v1.arr[0]) == (m1.arr[1] / v1.arr[1])) {
				mass = m1.arr[0] / v1.arr[0];
			} else {
				mass = 0;
			}
		}
		document.getElementById("mass").value = mass
	}
	if (velocity == "") {
		if (isMagnitude) {
			velocity = momentum / mass
		}
		if (isVector) {
			var m1 = parseVector(momentum);
			var v1 = multiplyVector(m1, 1.0 / mass);
			velocity = toStringVector(v1);
		}
		document.getElementById("velocity").value = velocity
	}
}

function collisionCalculate() {
	var m1 = document.getElementById("m1").value
	var m2 = document.getElementById("m2").value
	var vi1 = document.getElementById("vi1").value
	var vi2 = document.getElementById("vi2").value
	var vf1 = document.getElementById("vf1").value
	var vf2 = document.getElementById("vf2").value
	var isMagnitude = document.getElementById("inputMagnitude").checked
	var isVector = document.getElementById("inputVector").checked
	if (vf1 == "") {
		var pi = m1 * vi1 + m2 * vi2;
		var pf1 = pi - m2 * vf2;
		vf1 = pf1 / m1;
		document.getElementById("vf1").value = vf1;
	}
	if (vf2 == "") {
		var pi = m1 * vi1 + m2 * vi2;
		var pf2 = pi - m1 * vf1;
		vf2 = pf2 / m2;
		document.getElementById("vf2").value = vf2;
	}
}

function timeStepCalculate() {
	var position;
	var force;
	var velocity;
	var mass;
	var timeInterval;
}

function workCalculate() {
	var force = document.getElementById("force").value
	var distance = document.getElementById("distance").value
	var work = force * distance
	document.getElementById("work").innerHTML = "Work: " + work
}

function changeType(curr, newType) {
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