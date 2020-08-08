var Vector = require('./Vector');

function _parseVector(str) {
	try {
		var v = Vector.parseVector(str);
		return v;
	} catch(error) {
		return parseVector(str);
	}
}

function _toStringVector(v) {
	try {
		var s = Vector.toStringVector(v);
		return s;
	} catch(error) {
		return toStringVector(v);
	}
}

function _addVector(v1, v2) {
	try {
		var v = Vector.addVector(v1, v2);
		return v;
	} catch(error) {
		return addVector(v1, v2);
	}
}

function _subtractVector(v1, v2) {
	try {
		var v = Vector.subtractVector(v1, v2);
		return v;
	} catch(error) {
		return subtractVector(v1, v2);
	}
}

function _multiplyVector(v1, num) {
	try {
		var v = Vector.multiplyVector(v1, num);
		return v;
	} catch(error) {
		return multiplyVector(v1, num);
	}
}

function _getMagnitude(v) {
	try {
		var v = Vector.getMagnitude(v);
		return v;
	} catch(error) {
		return getMagnitude(v);
	}
}

function _getUnitVector(v) {
	try {
		var v = Vector.getUnitVector(v);
		return v;
	} catch(error) {
		return getUnitVector(v);
	}
}

function _dotProduct(v1, v2) {
	try {
		var v = Vector.dotProduct(v1, v2);
		return v;
	} catch(error) {
		return dotProduct(v1, v2);
	}
}

function linearMomentum() {
	var mass = document.getElementById("mass").value 
	var velocity = document.getElementById("velocity").value
	var momentum = document.getElementById("momentum").value
	var isMagnitude = document.getElementById("inputMagnitude").checked
	var isVector = document.getElementById("inputVector").checked
	if (checkBlanks(1, 'mass', 'velocity', 'momentum', 'inputMagnitude', 'inputVector')) {
		var result = momentumCalculate(mass, velocity, momentum, isMagnitude, isVector);

		if (momentum == "") {
			document.getElementById("momentum").value = result;
			highlight("momentum");
		} else if (mass == "") {
			document.getElementById("mass").value = result;
			highlight("mass");
		} else if (velocity == "") {
			document.getElementById("velocity").value = result;
			highlight("velocity");
		}
	}
}

function momentumCalculate(mass, velocity, momentum, isMagnitude) {
	if (momentum == "") {
		if (isMagnitude) {
			momentum = mass * velocity;
		}
		else {
			var v1 = _parseVector(velocity);
			var m1 = _multiplyVector(v1, mass);
			momentum = _toStringVector(m1);
		}
		return momentum;
	}
	if (mass == "") {
		if (isMagnitude) {
			mass = momentum / velocity;
		}
		else {
			var v1 = _parseVector(velocity);
			var m1 = _parseVector(momentum);
			if ((m1.arr[0] / v1.arr[0]) == (m1.arr[1] / v1.arr[1])) {
				mass = m1.arr[0] / v1.arr[0];
			} else {
				mass = 0;
			}
		}
		return mass;
	}
	if (velocity == "") {
		if (isMagnitude) {
			velocity = momentum / mass;
		}
		else {
			var m1 = _parseVector(momentum);
			var v1 = _multiplyVector(m1, 1.0 / mass);
			velocity = _toStringVector(v1);
		}
		return velocity;
	}
}
exports.momentumCalculate = momentumCalculate;

function collision() {
	var m1 = document.getElementById("col_m1").value;
	var m2 = document.getElementById("col_m2").value;
	var vi1 = document.getElementById("col_vi1").value;
	var vi2 = document.getElementById("col_vi2").value;
	var vf1 = document.getElementById("col_vf1").value;
	var vf2 = document.getElementById("col_vf2").value;
	var isMagnitude = document.getElementById("collisionInputMagnitude").checked;
	if (checkBlanks(2, 'col_m1', 'col_m2', 'col_vi1', 'col_vi2', 'col_vf1', 'col_vf2')) {
		blanks = numBlanks(2, 'col_m1', 'col_m2', 'col_vi1', 'col_vi2', 'col_vf1', 'col_vf2')
		if (blanks == 2 && vf2 == "" && vf1 != "") {
			vf2 = vf1;
		} else {
			console.log(blanks);
			console.log(vf2);
		}
		var result = collisionCalculate(m1, m2, vi1, vi2, vf1, vf2, isMagnitude);
		if (m1 == "") {
			document.getElementById("col_m1").value = result;
			highlight("col_m1");
		} else if (m2 == "") {
			document.getElementById("col_m2").value = result;
			highlight("col_m2");
		} else if (vf1 == "" && vf2 == "") {
			document.getElementById("col_vf1").value = result;
			highlight("col_vf1");
		} else if (vf1 == "") {
			document.getElementById("col_vf1").value = result;
			highlight("col_vf1");
		} else if (vi1 == "") {
			document.getElementById("col_vi1").value = result;
			highlight("col_vi1");
		} else if (vi2 == "") {
			document.getElementById("col_vi2").value = result;
			highlight("col_vi2");
		}
	}
}

function collisionCalculate(m1, m2, vi1, vi2, vf1, vf2, isMagnitude) {
	if (vf1 == "" && vf2 == "") {
		if (isMagnitude) {
			var pi = m1 * vi1 + m2 * vi2;
			vf1 = pi / (1 * m1 + 1 * m2);
		} else {
			vi1 = _parseVector(vi1);
			vi2 = _parseVector(vi2);
			vf2 = _parseVector(vf2);
			var pi1 = _multiplyVector(vi1, m1);
			var pi2 = _multiplyVector(vi2, m2);
			var pi = _addVector(pi1, pi2);
			var m_total = 1 * m1 + 1 * m2;
			vf1 = _multiplyVector(pi, 1.0 / m_total);
			vf1 = _toStringVector(vf1);
		}
		return vf1;
	} else if (vf1 == "") {
		if (isMagnitude) {
			var pi = m1 * vi1 + m2 * vi2;
			var pf1 = pi - m2 * vf2;
			vf1 = pf1 / m1;
		} else {
			vi1 = _parseVector(vi1);
			vi2 = _parseVector(vi2);
			vf2 = _parseVector(vf2);
			var pi1 = _multiplyVector(vi1, m1);
			var pi2 = _multiplyVector(vi2, m2);
			var pi = _addVector(pi1, pi2);
			var pf2 = _multiplyVector(vf2, m2);
			var pf1 = _subtractVector(pi, pf2);
			vf1 = _multiplyVector(pf1, 1.0 / m1);
			vf1 = _toStringVector(vf1);
		}
		return vf1;
	} else if (vf2 == "") {
		if (isMagnitude) {
			var pi = m1 * vi1 + m2 * vi2;
			var pf2 = pi - m1 * vf1;
			vf2 = pf2 / m2;
		} else {
			var vi1 = _parseVector(vi1);
			var vi2 = _parseVector(vi2);
			var vf1 = _parseVector(vf1);
			var pi1 = _multiplyVector(vi1, m1);
			var pi2 = _multiplyVector(vi2, m2);
			var pi = _addVector(pi1, pi2);
			var pf1 = _multiplyVector(vf1, m1);
			var pf2 = _subtractVector(pi, pf1);
			vf2 = _multiplyVector(pf2, 1.0 / m2);
			vf2 = _toStringVector(vf2);
		}
		return vf2;
	} else if (vi1 == "") {
		if (isMagnitude) {
			var pi = vi2 * m2;
			var pf = (vf1 * m1) + (vf2 * m2);
			vi1 = (pf - pi) / m1;
		} else {
			vi2 = _parseVector(vi2);
			vf1 = _parseVector(vf1);
			vf2 = _parseVector(vf2);
			var pi2 = _multiplyVector(vi2, m2);
			var pf1 = _multiplyVector(vf1, m1);
			var pf2 = _multiplyVector(vf2, m2);
			var pf = _addVector(pf1, pf2);
			var pi1 = _subtractVector(pf, pi2);
			vi1 = _multiplyVector(pi1, 1.0 / m1);
			vi1 = _toStringVector(vi1);
		}
		return vi1;
	} else if (vi2 == "") {
		if (isMagnitude) {
			var pi1 = vi1 * m1;
			var pf = vf1 * m1 + vf2 * m2;
			vi2 = (pf - pi1) / m2;
		} else {
			vi1 = _parseVector(vi1);
			vf1 = _parseVector(vf1);
			vf2 = _parseVector(vf2);
			var pi1 = _multiplyVector(vi1, m1);
			var pf1 = _multiplyVector(vf1, m1);
			var pf2 = _multiplyVector(vf2, m2);
			var pf = _addVector(pf1, pf2);
			var pi2 = _subtractVector(pf, pi1);
			vi2 = _multiplyVector(pi2, 1.0 / m2);
			vi2 = _toStringVector(vi2);
		}
		return vi2;
	} else if (m1 == "") {
		if (isMagnitude) {
			var rhs = m2 * (vf2 - vi2);
			m1 = rhs / (vi1 - vf1);
		} else {
			vi1 = _parseVector(vi1);
			vi2 = _parseVector(vi2);
			vf1 = _parseVector(vf1);
			vf2 = _parseVector(vf2);
			var p2i = _multiplyVector(vi2, m2);
			var p2f = _multiplyVector(vf2, m2);
			var rhs = _subtractVector(p2f, p2i);
			var lhs = _subtractVector(vf1, vi1);
			m1 = _getMagnitude(rhs) / _getMagnitude(lhs);
		}
		return m1;
	} else if (m2 == "") {
		if (isMagnitude) {
			var rhs = m1 * (vf1 - vi1);
			m2 = rhs / (vi2 - vf2);
		} else {
			vi1 = _parseVector(vi1);
			vi2 = _parseVector(vi2);
			vf1 = _parseVector(vf1);
			vf2 = _parseVector(vf2);
			var p1i = _multiplyVector(vi1, m1);
			var p1f = _multiplyVector(vf1, m1);
			var rhs = _subtractVector(p1f, p1i);
			var lhs = _subtractVector(vf2, vi2);
			m2 = _getMagnitude(rhs) / _getMagnitude(lhs);
		}
		return m2;
	}
}
exports.collisionCalculate = collisionCalculate;


function timeStep() {
	var mass = document.getElementById("ts_m").value;
	var velocity = document.getElementById("ts_v").value;
	var _isMagnitude = isMagnitude(velocity);
	console.log(_isMagnitude);
	var force = document.getElementById("ts_f").value;
	var position = document.getElementById("ts_r").value;
	if (position == "") {
		if (_isMagnitude) {
			position = 0.0;
		} else {
			position = '0,0,0';
		}
	}
	var timeInterval = document.getElementById("ts_t").value;

	var result = timeStepCalculate(mass, velocity, force, position, timeInterval, _isMagnitude);

	document.getElementById("ts_m").value = mass;
	document.getElementById("ts_v").value = result[0];
	document.getElementById("ts_f").value = force;
	document.getElementById("ts_r").value = result[1];
	document.getElementById("ts_t").value = timeInterval;
}


function timeStepCalculate(mass, velocity, force, position, timeInterval, _isMagnitude) {
	var vf, rf;
	if (_isMagnitude) {
		var pi = mass * velocity;
		var pf = pi + force * timeInterval;
		vf = pf / mass;
		var ri = position * 1;
		rf = ri + vf * timeInterval;
	} else {
		velocity = _parseVector(velocity);
		force = _parseVector(force);
		position = _parseVector(position);

		var pi = _multiplyVector(velocity, mass);
		var impulse = _multiplyVector(force, timeInterval);
		var pf = _addVector(pi, impulse);
		var _vf = _multiplyVector(pf, 1 / mass);
		vf = _toStringVector(_vf);
		var delta = _multiplyVector(_vf, timeInterval);
		rf = _addVector(position, delta);
		rf = _toStringVector(rf);
	}
	return [vf, rf];
}
exports.timeStepCalculate = timeStepCalculate;

function launchedProjectile() {
	var heightInitial = document.getElementById("lp_hi").value;
	var velocity = document.getElementById("lp_vi").value;
	var angle = document.getElementById("lp_angle").value;
	var maxHeight = document.getElementById("lp_mh").value;
	var maxDistance = document.getElementById("lp_md").value;
	var timeMaxDistance = document.getElementById("lp_tmd").value;
	var timeMaxHeight = document.getElementById("lp_tmh").value;
	var isMagnitude = document.getElementById("lpInputMagnitude").checked;

	var result = launchedProjectileCalculate(heightInitial, velocity, angle, maxHeight,
		maxDistance, timeMaxDistance, timeMaxHeight, isMagnitude);
}
function launchedProjectileCalculate(heightInitial, velocity, angle, maxHeight,
	maxDistance, timeMaxDistance, timeMaxHeight, isMagnitude) {
	var g = 9.8;

	var eq1 = (heightInitial != "" && velocity != "" && (angle != "" || isVector)); // solve for max distance and height and times
	var eq2 = (maxDistance != "" && angle != "" && heightInitial != "" && velocity == ""); // solve for velocity
	var eq3 = (heightInitial != "" && velocity != "" && angle == ""); // solve for optimum launch angle
	var eq4 = (velocity != "" && maxDistance != "" && angle == ""); // solve for actual launch angle
	var eq5; // solve for initial height 

	if (eq1) {
		var viy;
		if (isMagnitude) {
			viy = velocity * Math.sin(angle);
		} else if (isVector) {
			v = _parseVector(velocity);
			viy = v.y;
			velocity = _getMagnitude(v);
		}
		maxHeight = heightInitial + ((viy * viy) / (2 * 9.8));

		var leftSide = (velocity * velocity / (2 * g));
		var rightSide = 1 + Math.sqrt(1 + ((2 * g * heightInitial) / (viy * viy)));
		maxDistance = leftSide * rightSide * Math.sin(2 * angle);

		timeMaxHeight = (Math.sin(angle) * velocity) / g;

		var vix;
		if (isMagnitude) {
			vix = Math.cos(angle) * velocity;
		} else {
			v = _parseVector(velocity);
			vix = v.x;
		}
		timeMaxDistance = maxDistance / vix;

		document.getElementById("lp_mh").value = maxHeight;
		highlight("lp_mh");
		document.getElementById("lp_md").value = maxDistance;
		highlight("lp_md");
		document.getElementById("lp_tmh").value = timeMaxHeight;
		highlight("lp_tmh");
		document.getElementById("lp_tmd").value = timeMaxDistance;
		highlight("lp_tmd");
	} else if (eq2) {
		if (isMagnitude) {
			var lhs = 1 / Math.cos(angle);
			var numerator = (1/2) * g * maxDistance * maxDistance;
			var denominator = maxDistance * Math.tan(angle) + heightInitial;
			var rhs = Math.sqrt(numerator / denominator);
			velocity = lhs * rhs;
			console.log("Velocity: " + velocity);
		} else if (isVector) {
			alert("This calculation is not supported because it would require an initial direction.\n" + 
			"If you have an initial direction, use the magnitude calculation and plug the result into your direction unit _");
		}
		document.getElementById("lp_vi").value = velocity;
	} else if (eq3) {
		if (isVector) {
			alert("The velocity given is a _\nThe angle can be calculated using the vector components");
		} else {
			var lambda = 9.8 * heightInitial / (velocity * velocity);
			angle = 1 / (Math.sqrt(2 * (1 + lambda)));
			angle = Math.asin(angle);
			document.getElementById("lp_angle").value = angle;
			highlight("lp_angle");
		}
	} else if (eq4) {
		if (heightInitial && heightInitial != 0) {
			alert("Sorry! This equation isn't supported yet with a non-zero height...");
		} else if (isVector) {
			alert("The velocity given is a _\nThe angle can be calculated using the vector components");
		} else {
			angle = (1 / 2) * Math.asin((maxDistance * 9.8) / (velocity * velocity));
			if (isNaN(angle)) {
				alert("Invalid input");
			}
			document.getElementById("lp_angle").value = angle;
			highlight("lp_angle");
		}
	} else if (eq5) {
		alert("Sorry! This equation isn't supported yet...");
	} else {
		alert("Sorry! The inputs given don't correspond to a currently supported equation...");
	}
}
exports.launchedProjectileCalculate = launchedProjectileCalculate;
