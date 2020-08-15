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


function angularMomentum() {
    var moment = document.getElementById("amMoment").value;
    var angularVelocity = document.getElementById("amAngularVelocity").value;
    var angularMomentum = document.getElementById("angularMomentum").value;

    if (checkBlanks(1, 'amMoment', 'amAngularVelocity', 'angularMomentum')) {
        var result = angularMomentumCalculate(moment, angularVelocity, angularMomentum);

        if (moment == "") { // I = L / w
            document.getElementById("amMoment").value = result;
            highlight('amMoment');
        } else if (angularVelocity == "") { // w = L / I
            document.getElementById("amAngularVelocity").value = result;
            highlight('amAngularVelocity');
        } else if (angularMomentum == "") { // L = Iw
            document.getElementById("angularMomentum").value = result;
            highlight('angularMomentum');
        }
    }
}


function angularMomentumCalculate(moment, angularVelocity, angularMomentum) {
    // L = Iw
    if (moment == "") { // I = L / w
        moment = angularMomentum / angularVelocity;
        return moment;
    } else if (angularVelocity == "") { // w = L / I
        angularVelocity = angularMomentum / moment;
        return angularVelocity;
    } else if (angularMomentum == "") { // L = Iw
        angularMomentum = moment * angularVelocity;
        return angularMomentum;
    }
}


function moment() {
    var select = document.getElementById("momentSelect").value;
    var mass = document.getElementById("momentMass").value;
    var RL = document.getElementById("momentRL").value;
    var moment = document.getElementById("momentOfInertia").value;

    if (checkBlanks(1, 'momentMass', 'momentRL', 'momentOfIntertia')) {
        var result = momentCalculate(select, mass, RL, moment);

        if (mass == "") {
            document.getElementById("momentMass").value = result;
            highlight('momentMass');
        } else if (RL == "") {
            document.getElementById("momentRL").value = result;
            highlight('momentRL');
        } else if (moment == "") {
            document.getElementById("momentOfInertia").value = result;
            highlight('momentOfInertia');
        }
    }
}


function momentCalculate(select, mass, RL, moment) {
    if (select == "particle") { // I = MR^2
        if (mass == "") {
            mass = moment / (RL * RL);
            return mass;
        } else if (RL == "") {
            RL = Math.sqrt(moment / mass);
            return RL;
        } else if (moment == "") {
            moment = mass * RL * RL;
            return moment;
        }
    } else if (select == "solidSphere") { // I = (2/5)MR^2
        if (mass == "") {
            mass = (5 / 2) (moment / (RL * RL));
            return mass;
        } else if (RL == "") {
            RL = Math.sqrt((5 / 2) (moment / mass));
            return RL;
        } else if (moment == "") {
            moment = (2 / 5) * mass * RL * RL;
            return moment;
        }
    } else if (select == "hollowSphere") { // I = (2/3)MR^2
        if (mass == "") {
            mass = (3 / 2) (moment / (RL * RL));
            return mass;
        } else if (RL == "") {
            RL = Math.sqrt((3 / 2) (moment / mass));
            return RL;
        } else if (moment == "") {
            moment = (2 / 3) * (mass * RL * RL);
            return moment;
        }
    } else if (select == "solidCylinder" || select == "disk") { // I = (1/2)MR^2
        if (mass == "") {
            mass = 2 * (moment / (RL * RL));
            return mass;
        } else if (RL == "") {
            RL = Math.sqrt(2 * (moment / mass));
            return RL;
        } else if (moment == "") {
            moment = (1 / 2) * (mass * RL * RL);
            return moment;
        }
    } else if (select == "hollowCylinder" || select == "ring") { // I = MR^2
        if (mass == "") {
            mass = moment / (RL * RL);
            return mass;
        } else if (RL == "") {
            RL = Math.sqrt(moment / mass);
            return RL;
        } else if (moment == "") {
            moment = mass * RL * RL;
            return moment;
        }
    } else if (select == "rodCenter") { // I = (1/12)ML^2
        if (mass == "") {
            mass = 12 * (moment / (RL * RL));
            return mass;
        } else if (RL == "") {
            RL = Math.sqrt(12 * (moment / mass));
            return RL;
        } else if (moment == "") {
            moment = (1 / 12) * (mass * RL * RL);
            return moment;
        }
    } else if (select == "rodEnd") { // I = (1/3)ML^2
        if (mass == "") {
            mass = 3 * (moment / (RL * RL));
            return mass;
        } else if (RL == "") {
            RL = Math.sqrt(3 * (moment / mass));
            return RL;
        } else if (moment == "") {
            moment = (1 / 3) * (mass * RL * RL);
            return moment;
        }
    }
}


function torque() {
    // T = r * F * sin(theta)
    var radius = document.getElementById("torqueRadius").value;
    var force = document.getElementById("torqueForce").value;
    var angle = document.getElementById("torqueAngle").value;
    var torque = document.getElementById("torque").value;
    var _isMagnitude1 = isMagnitude(radius);
    var _isMagnitude2 = isMagnitude(force);
    var _isMagnitude = (_isMagnitude1 || _isMagnitude2);
    checkBlanks(2, 'torqueRadius', 'torqueForce', 'torqueAngle', 'torque');
    var result = torqueCalculate(radius, force, angle, torque, _isMagnitude)
}


function torqueCalculate(radius, force, angle, torque, isMagnitude) {
    if (angle != "") {
        var sin_theta = Math.sin(angle);
    }
    if (radius == "") {
        if (torqueVector) {
            alert("Cannot go from scalar to vector without direction");
        } else {
            radius = torque / (force * sin_theta);
            document.getElementById("torqueRadius").value = radius;
            highlight("torqueRadius");
        }
    } else if (force == "") {
        if (torqueVector) {
            alert("Cannot go from scalar to vector without direction");
        } else {
            force = torque / (radius * sin_theta);
            document.getElementById("torqueForce").value = force;
            highlight("torqueForce");
        }
    } else if (torqueMagnitude && angle == "") {
        var sin_theta = torque / (radius * force);
        angle = Math.asin(sin_theta);
        document.getElementById("torqueAngle").value = angle;
        highlight("torqueAngle");
    } else if (torque == "") {
        if (torqueVector) {
            radius = parseVector(radius);
            force = parseVector(force);
            torque = dotProduct(radius, force);
        } else {
            torque = radius * force * sin_theta;
        }
        document.getElementById("torque").value = torque;
        highlight("torque");
    }
}

function angularVelocityCalculate() {
    // w = v/r
    var linearVelocity = document.getElementById("linearVelocity").value;
    var radius = document.getElementById("avRadius").value;
    var angularVelocity = document.getElementById("angularVelocity").value;
    checkBlanks(1, 'linearVelocity', 'avRadius', 'angularVelocity');
    if (linearVelocity == "") {
        linearVelocity = angularVelocity * radius;
        document.getElementById("linearVelocity").value = linearVelocity;
        highlight('linearVelocity');
    } else if (radius == "") {
        radius = linearVelocity / angularVelocity;
        document.getElementById("avRadius").value = radius;
        highlight('avRadius');
    } else if (angularVelocity == "") {
        angularVelocity = linearVelocity / radius;
        document.getElementById("angularVelocity").value = angularVelocity;
        highlight('angularVelocity');
    }
}