function momentumCalculate() {
	var mass = document.getElementById("mass").value 
	var velocity = document.getElementById("velocity").value
	var momentum = document.getElementById("momentum").value
	var isMagnitude = document.getElementById("inputMagnitude").checked
	var isVector = document.getElementById("inputVector").checked
	if (momentum == "") {
		if (isMagnitude) {
			momentum = mass * velocity;
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
			mass = momentum / velocity;
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
		document.getElementById("mass").value = mass;
	}
	if (velocity == "") {
		if (isMagnitude) {
			velocity = momentum / mass;
		}
		if (isVector) {
			var m1 = parseVector(momentum);
			var v1 = multiplyVector(m1, 1.0 / mass);
			velocity = toStringVector(v1);
		}
		document.getElementById("velocity").value = velocity;
	}
}

function collisionCalculate() {
	var m1 = document.getElementById("col_m1").value;
	var m2 = document.getElementById("col_m2").value;
	var vi1 = document.getElementById("col_vi1").value;
	var vi2 = document.getElementById("col_vi2").value;
	var vf1 = document.getElementById("col_vf1").value;
	var vf2 = document.getElementById("col_vf2").value;
	var isMagnitude = document.getElementById("collisionInputMagnitude").checked;
	var isVector = document.getElementById("collisionInputVector").checked;
	if (vf1 == "") {
		if (isMagnitude) {
			var pi = m1 * vi1 + m2 * vi2;
			var pf1 = pi - m2 * vf2;
			vf1 = pf1 / m1;
			document.getElementById("col_vf1").value = vf1;
		} else if (isVector) {
			v_i1 = parseVector(vi1);
			v_i2 = parseVector(vi2);
			v_f2 = parseVector(vf2);
			var pi1 = multiplyVector(v_i1, m1);
			var pi2 = multiplyVector(v_i2, m2);
			// document.write(toStringVector(pi2));
			var pi = addVector(pi1, pi2);
			// document.write(toStringVector(pi));
			var pf2 = multiplyVector(v_f2, m2);
			// document.write(toStringVector(pf2));
			var pf1 = subtractVector(pi, pf2);
			// document.write(toStringVector(pf1));
			vf1 = multiplyVector(pf1, 1.0 / m1);
			// document.write(toStringVector(v_f1));
			document.getElementById("col_vf1").value = toStringVector(vf1);
		}
	}
	if (vf2 == "") {
		if (isMagnitude) {
			var pi = m1 * vi1 + m2 * vi2;
			var pf2 = pi - m1 * vf1;
			vf2 = pf2 / m2;
			document.getElementById("col_vf2").value = vf2;
		} else if (isVector) {

		}
	}
}

function timeStepCalculate() {
	var mass = document.getElementById("ts_m").value;
	var velocity = document.getElementById("ts_v").value;
	var force = document.getElementById("ts_f").value;
	var position = document.getElementById("ts_r").value;
	var timeInterval = document.getElementById("ts_t").value;

	var pi = mass * velocity;
	var pf = pi + force * timeInterval;
	var vf = pf / mass;
	var ri = position / 1;
	var rf = ri + vf * timeInterval;
	document.getElementById("ts_m").value = mass;
	document.getElementById("ts_v").value = vf;
	document.getElementById("ts_f").value = force;
	document.getElementById("ts_r").value = rf;
	document.getElementById("ts_t").value = timeInterval;
}

function changeType(curr, newType) {
	document.getElementById(curr).type = newType;
}

function resetMomentum() {
	document.getElementById("mass").value = "";
	document.getElementById("velocity").value = "";
	document.getElementById("momentum").value = "";
}

function resetCollision() {
	document.getElementById("col_m1").value = "";
	document.getElementById("col_m2").value = "";
	document.getElementById("col_vi1").value = "";
	document.getElementById("col_vi2").value = "";
	document.getElementById("col_vf1").value = "";
	document.getElementById("col_vf2").value = "";
}

function resetTimeStep() {
	document.getElementById("ts_m").value = "";
	document.getElementById("ts_v").value = "";
	document.getElementById("ts_f").value = "";
	document.getElementById("ts_r").value = "";
	document.getElementById("ts_t").value = "";
}