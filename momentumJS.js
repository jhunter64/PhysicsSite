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
			momentum = multiplyVector(velocity, mass)
		}
		document.getElementById("momentum").value = momentum
	}
	if (mass == "") {
		if (isMagnitude) {
			mass = momentum / velocity	
		}
		else if (isVector) {
			mass = 0
		}
		document.getElementById("mass").value = mass
	}
	if (velocity == "") {
		if (isMagnitude) {
			velocity = momentum / mass
		}
		if (isVector) {
			velocity = multiplyVector(momentum, 1.0 / mass)
		}
		document.getElementById("velocity").value = velocity
	}
}

function workCalculate() {
	var force = document.getElementById("force").value
	var distance = document.getElementById("distance").value
	var work = force * distance
	document.getElementById("work").innerHTML = "Work: " + work
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






