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
		highlight("momentum");
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
		highlight("mass");
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
		highlight("velocity");
	}
}

function collisionCalculate() {
	var blankCount = 0;
	var m1 = document.getElementById("col_m1").value;
	if (m1 == "") blankCount++;
	var m2 = document.getElementById("col_m2").value;
	if (m2 == "") blankCount++;
	var vi1 = document.getElementById("col_vi1").value;
	if (vi1 == "") blankCount++;
	var vi2 = document.getElementById("col_vi2").value;
	if (vi2 == "") blankCount++;
	var vf1 = document.getElementById("col_vf1").value;
	if (vf1 == "") blankCount++;
	var vf2 = document.getElementById("col_vf2").value;
	if (vf2 == "") blankCount++;
	var isMagnitude = document.getElementById("collisionInputMagnitude").checked;
	var isVector = document.getElementById("collisionInputVector").checked;
	if (blankCount > 1) {
		alert("Too many blanks");
	} else {
		if (vf1 == "") {
			if (isMagnitude) {
				var pi = m1 * vi1 + m2 * vi2;
				var pf1 = pi - m2 * vf2;
				vf1 = pf1 / m1;
				document.getElementById("col_vf1").value = vf1;
			} else if (isVector) {
				vi1 = parseVector(vi1);
				vi2 = parseVector(vi2);
				vf2 = parseVector(vf2);
				var pi1 = multiplyVector(vi1, m1);
				var pi2 = multiplyVector(vi2, m2);
				var pi = addVector(pi1, pi2);
				var pf2 = multiplyVector(vf2, m2);
				var pf1 = subtractVector(pi, pf2);
				vf1 = multiplyVector(pf1, 1.0 / m1);
				document.getElementById("col_vf1").value = toStringVector(vf1);
			}
			highlight("col_vf1");
		} else if (vf2 == "") {
			if (isMagnitude) {
				var pi = m1 * vi1 + m2 * vi2;
				var pf2 = pi - m1 * vf1;
				vf2 = pf2 / m2;
				document.getElementById("col_vf2").value = vf2;
			} else if (isVector) {
				var v_i1 = parseVector(vi1);
				var v_i2 = parseVector(vi2);
				var v_f1 = parseVector(vf1);
				var pi1 = multiplyVector(v_i1, m1);
				var pi2 = multiplyVector(vi_2, m2);
				var pi = addVector(pi1, pi2);
				var pf1 = multiplyVector(vf_1, m1);
				var pf2 = subtractVector(pi, pf1);
				vf2 = multiplyVector(pf2, 1.0 / m2);
				document.getElementById("col_vf2").value = toStringVector(vf2);
			}
			highlight("col_vf2");
		} else if (vi1 == "") {
			if (isMagnitude) {
				var pi = vi2 * m2;
				var pf = (vf1 * m1) + (vf2 * m2);
				vi1 = (pf - pi) / m1;
				document.getElementById("col_vi1").value = vi1;
			} else if (isVector) {
				vi2 = parseVector(vi2);
				vf1 = parseVector(vf1);
				vf2 = parseVector(vf2);
				var pi2 = multiplyVector(vi2, m2);
				var pf1 = multiplyVector(vf1, m1);
				var pf2 = multiplyVector(vf2, m2);
				var pf = addVector(pf1, pf2);
				var pi1 = subtractVector(pf, pi2);
				vi1 = multiplyVector(pi1, 1.0 / m1);
				document.getElementById("col_vi1").value = toStringVector(vi1);
			}
			highlight("col_vi1");
		} else if (vi2 == "") {
			if (isMagnitude) {
				var pi1 = vi1 * m1;
				var pf = vf1 * m1 + vf2 * m2;
				vi2 = (pf - pi1) / m2;
				document.getElementById("col_vi2").value = vi2;
			} else if (isVector) {
				vi1 = parseVector(vi1);
				vf1 = parseVector(vf1);
				vf2 = parseVector(vf2);
				var pi1 = multiplyVector(vi1, m1);
				var pf1 = multiplyVector(vf1, m1);
				var pf2 = multiplyVector(vf2, m2);
				var pf = addVector(pf1, pf2);
				var pi2 = subtractVector(pf, pi1);
				vi2 = multiplyVector(pi2, 1.0 / m2);
				document.getElementById("col_vi2").value = toStringVector(vi2);
			}
			highlight("col_vi2");
		} else if (m1 == "") {
			if (isMagnitude) {

			} else if (isVector) {

			}
		} else if (m2 == "") {
			if (isMagnitude) {

			} else if (isVector) {

			}
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

function resetMomentum() {
	document.getElementById("mass").value = "";
	document.getElementById("mass").style.borderColor = "white";
	document.getElementById("velocity").value = "";
	document.getElementById("velocity").style.borderColor = "white";
	document.getElementById("momentum").value = "";
	document.getElementById("momentum").style.borderColor = "white";
}

function resetCollision() {
	document.getElementById("col_m1").value = "";
	document.getElementById("col_m1").style.borderColor = "white";
	document.getElementById("col_m2").value = "";
	document.getElementById("col_m2").style.borderColor = "white";
	document.getElementById("col_vi1").value = "";
	document.getElementById("col_vi1").style.borderColor = "white";
	document.getElementById("col_vi2").value = "";
	document.getElementById("col_vi2").style.borderColor = "white";
	document.getElementById("col_vf1").value = "";
	document.getElementById("col_vf1").style.borderColor = "white";
	document.getElementById("col_vf2").value = "";
	document.getElementById("col_vf2").style.borderColor = "white";
}

function resetTimeStep() {
	document.getElementById("ts_m").value = "";
	document.getElementById("ts_m").style.borderColor = "white";
	document.getElementById("ts_v").value = "";
	document.getElementById("ts_v").style.borderColor = "white";
	document.getElementById("ts_f").value = "";
	document.getElementById("ts_f").style.borderColor = "white";
	document.getElementById("ts_r").value = "";
	document.getElementById("ts_r").style.borderColor = "white";
	document.getElementById("ts_t").value = "";
	document.getElementById("ts_t").style.borderColor = "white";
}