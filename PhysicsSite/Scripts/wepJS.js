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

function _crossProduct(v1, v2) {
    try {
        var v = Vector.crossProduct(v1, v2);
        return v;
    } catch(error) {
        return crossProduct(v1, v2);
    }
}

function _createVector(x, y, z) {
    try {
        var v = Vector.createVector(x, y, z);
        return v;
    } catch(error) {
        return createVector(x, y, z);
    }
}


function work() {
    var force = document.getElementById("force").value;
    var displacement = document.getElementById("displacement").value;
    var angle = document.getElementById("angle").value;
    var work = document.getElementById("work").value;
    var _isMagnitude = isMagnitude(force) || isMagnitude(displacement);

    if (checkBlanks(2, 'force', 'displacement', 'angle', 'work')) {
        var result = workCalculate(force, displacement, angle, work, _isMagnitude);
        if (_isMagnitude && angle == "") {
            document.getElementById("angle").value = result;
            highlight("angle");
        } else if (work == "") {
            document.getElementById("work").value = result;
            highlight("work");
        } else if (force == "") {
            if (!_isMagnitude) {
                alert("Multiple possible answers exist going from scalar to vector."
                + "\nThis calculator will assume the force is in one direction only.");
            }
            document.getElementById("force").value = result;
            highlight("force");
        } else if (displacement == "") {
            if (!_isMagnitude) {
                alert("Multiple possible answers exist going from scalar to vector."
                + "\nThis calculator will assume the displacement is in one direction only.");
            }
            document.getElementById("displacement").value = result;
            highlight("displacement");
        }
    }
}


function workCalculate(force, displacement, angle, work, isMagnitude) {    
    if (isMagnitude && angle == "") {
        angle = Math.acos(work / (force * displacement));
        return angle;
    } else if (work == "") {
        if (isMagnitude) {
            work = force * Math.cos(angle) * displacement;
            return work;
        } else {
            force = _parseVector(force);
            displacement = _parseVector(displacement);
            work = _dotProduct(force, displacement);
            return work;
        }
    } else if (force == "") {
        if (isMagnitude) {
            force = work / Math.cos(angle) / displacement;
            return force;
        } else {
            displacement = _parseVector(displacement);
            var vectorComponents = [0, 0, 0];
            if (displacement.x && displacement.x != 0) {
                vectorComponents[0] = work / displacement.x;
            } else if (displacement.y && displacement.y != 0) {
                vectorComponents[1] = work / displacement.y;
            } else if (displacement.z && displacement.z != 0) {
                vectorComponents[2] = work / displacement.z;
            } else {
                alert("Error parsing displacement vector. Vector input should be in format 'x, y, z'");
            }
            force = _createVector(vectorComponents[0], vectorComponents[1], vectorComponents[2]);
            force = _toStringVector(force);
            return force;
        }
    } else if (displacement == "") {
        if (isMagnitude) {
            displacement = work / (force * Math.cos(angle));
            return displacement;
        } else {
            force = _parseVector(force);
            var vectorComponents = [0, 0, 0];
            if (force.x && force.x != 0) {
                vectorComponents[0] = work / force.x;
            } else if (force.y && force.y != 0) {
                vectorComponents[1] = work / force.y;
            } else if (force.z && force.z != 0) {
                vectorComponents[2] = work / force.z;
            } else {
                alert("Error parsing force vector. Vector input should be in format 'x, y, z'");
            }
            displacement = _createVector(vectorComponents[0], vectorComponents[1], vectorComponents[2]);
            displacement = _toStringVector(displacement);
            return displacement;
        }
    }
}
exports.workCalculate = workCalculate;


function power() {
    var force = document.getElementById("power_force").value;
    var displacement = document.getElementById("power_displacement").value;
    var angle = document.getElementById("power_angle").value;
    var time = document.getElementById("power_time").value;
    var power = document.getElementById("power").value;
    var _isMagnitude = isMagnitude(force) || isMagnitude(displacement);

    if (checkBlanks(2, "power_force", "power_displacement", "power_angle", "power_time", "power")) {
        var result = powerCalculate(force, displacement, angle, time, power, _isMagnitude);
        if (_isMagnitude && angle == "") {
            document.getElementById("power_angle").value = result;
            highlight("power_angle");
        } else if (power == "") {
            document.getElementById("power").value = result;
            highlight("power");
        } else if (force == "") {
            if (!_isMagnitude) {
                alert("Multiple possible answers exist going from scalar to vector."
                + "\nThis calculator will assume the force is in one direction only.");
            }
            document.getElementById("power_force").value = result;
            highlight("power_force");
        } else if (displacement == "") {
            if (!_isMagnitude) {
                alert("Multiple possible answers exist going from scalar to vector."
                + "\nThis calculator will assume the displacement is in one direction only.");
            }
            document.getElementById("power_displacement").value = result;
            highlight("power_displacement");
        } else if (time == "") {
            document.getElementById("power_time").value = result;
            highlight("power_time");
        }
    }
}


function powerCalculate(force, displacement, angle, time, power, isMagnitude) {
    if (power == "") {
        if (isMagnitude) {
            power = (force * displacement * Math.cos(angle)) / time;
        } else {
            force = _parseVector(force);
            displacement = _parseVector(displacement);
            work = _dotProduct(force, displacement);
            power = work / time;
        }
        return power;
    } else if (force == "") {
        var work = power * time;
        if (isMagnitude) {
            force = work / Math.cos(angle) / displacement;
        } else {
            displacement = _parseVector(displacement);
            var vectorComponents = [0, 0, 0];
            if (displacement.x && displacement.x != 0) {
                vectorComponents[0] = work / displacement.x;
            } else if (displacement.y && displacement.y != 0) {
                vectorComponents[1] = work / displacement.y;
            } else if (displacement.z && displacement.z != 0) {
                vectorComponents[2] = work / displacement.z;
            } else {
                alert("Error parsing displacement vector. Vector input should be in format 'x, y, z'");
            }
            force = _createVector(vectorComponents[0], vectorComponents[1], vectorComponents[2]);
            force = _toStringVector(force);
        }
        return force;
    } else if (displacement == "") {
        var work = power * time;
        if (isMagnitude) {
            displacement = work / (force * Math.cos(angle));
        } else {
            force = _parseVector(force);
            var vectorComponents = [0, 0, 0];
            if (force.x && force.x != 0) {
                vectorComponents[0] = work / force.x;
            } else if (force.y && force.y != 0) {
                vectorComponents[1] = work / force.y;
            } else if (force.z && force.z != 0) {
                vectorComponents[2] = work / force.z;
            } else {
                alert("Error parsing force vector. Vector input should be in format 'x, y, z'");
            }
            displacement = _createVector(vectorComponents[0], vectorComponents[1], vectorComponents[2]);
            displacement = _toStringVector(displacement);
        }
        return displacement;
    } else if (isMagnitude && angle == "") {
        angle = power * time / (force * displacement);
        angle = Math.acos(angle);
        return angle;
    } else if (time == "") {
        if (isMagnitude) {
            var work = force * Math.cos(angle) * displacement;
            time = work / power;
        } else {
            force = _parseVector(force);
            displacement = _parseVector(displacement);
            var work = _dotProduct(force, displacement);
            time = work / power;
        }
        return time;
    }
}
exports.powerCalculate = powerCalculate;


function kineticEnergy() {
    var mass = document.getElementById("mass").value;
    var velocity = document.getElementById("velocity").value;
    var kineticEnergy = document.getElementById("kineticEnergy").value;
    var _isMagnitude = isMagnitude(velocity);

    if (checkBlanks(1, 'mass', 'velocity', 'kineticEnergy')) {
        var result = kineticCalculate(mass, velocity, kineticEnergy, _isMagnitude);

        if (kineticEnergy == "") {
            document.getElementById("kineticEnergy").value = result;
            highlight("kineticEnergy");
        } else if (velocity == "") {
            document.getElementById("velocity").value = result;
            highlight('velocity');
        } else if (mass == "") {
            document.getElementById("mass").value = result;
            highlight("mass");
        }
    }
}


function kineticCalculate(mass, velocity, kineticEnergy, isMagnitude) {
    if (kineticEnergy == "") {
        if (!isMagnitude) {
            var v = _parseVector(velocity);
            velocity = _getMagnitude(v);
        }
        return 0.5 * mass * velocity * velocity;
    } else if (velocity == "") {
        return Math.sqrt(2.0 * kineticEnergy / mass);
    } else if (mass == "") {
        if (!isMagnitude) {
            var v = _parseVector(velocity);
            velocity = _getMagnitude(v);
        }
        return 2.0 * kineticEnergy / (velocity * velocity);
    }
}
exports.kineticCalculate = kineticCalculate;


function uGrav() {
    var mass = document.getElementById("uGravMass").value;
    var height = document.getElementById("uGravHeight").value;
    var uGrav = document.getElementById("uGravEnergy").value;

    if (checkBlanks(1, "uGravMass", "uGravHeight", "uGravEnergy")) {
        let result = uGravCalculate(mass, height, uGrav);
        if (uGrav == "") {
            document.getElementById("uGravEnergy").value = result;
            highlight("uGravEnergy");
        } else if (height == "") {
            document.getElementById("uGravHeight").value = result;
            highlight("uGravHeight");
        } else if (mass == "") {
            document.getElementById("uGravMass").value = result;
            highlight("uGravMass");
        }
    }
}


function uGravCalculate(mass, height, uGrav) {
    var g = 9.8;
    if (uGrav == "") {
        uGrav = mass * g * height;
        return uGrav;
    } else if (height == "") {
        height = uGrav / (mass * g);
        return height;
    } else if (mass == "") {
        mass = uGrav / (g * height);
        return mass;
    }
}
exports.uGravCalculate = uGravCalculate;


function uSpring() {
    var relaxedLength = document.getElementById("uSpringRelaxed").value;
    var currentLength = document.getElementById("uSpringCurrent").value;
    var springCoefficient = document.getElementById("uSpringK").value;
    var uSpring = document.getElementById("uSpring").value;

    if (checkBlanks(1, 'uSpringRelaxed', 'uSpringCurrent', 'uSpringK', 'uSpring')) {
        var result = uSpringCalculate(relaxedLength, currentLength, springCoefficient, uSpring);
        if (uSpring == "") {
            document.getElementById("uSpring").value = result;
            highlight("uSpring");
        } else if (relaxedLength == "") {
            alert("Relaxed length could be " + result[0] + " or " + result[1]
            + "\n(relaxed = current +/- deltaX)");
            document.getElementById("uSpringRelaxed").value = result[0];
            highlight("uSpringRelaxed");
        } else if (currentLength == "") {
            alert("Relaxed length could be " + result[0] + " or " + result[1]
            + "\n(current = relaxed +/- deltaX)");
            document.getElementById("uSpringCurrent").value = result[0];
            highlight("uSpringCurrent");
        } else if (springCoefficient == "") {
            document.getElementById("uSpringK").value = result;
            highlight("uSpringK");
        }
    }
}

function uSpringCalculate(relaxedLength, currentLength, springCoefficient, uSpring) {
    if (uSpring == "") {
        var dx = Math.abs(relaxedLength - currentLength);
        uSpring = .5 * dx * dx * springCoefficient;
        return uSpring;
    } else if (relaxedLength == "") {
        var dx = Math.sqrt((2 * uSpring) / springCoefficient);
        var relaxed1 = 1 * currentLength + dx;
        var relaxed2 = 1 * currentLength - dx;
        return [relaxed1, relaxed2];
    } else if (currentLength == "") {
        var dx = Math.sqrt((2 * uSpring) / springCoefficient);
        var current1 = 1 * relaxedLength + dx;
        var current2 = 1 * relaxedLength - dx;
        return [current1, current2];
    } else if (springCoefficient == "") {
        var dx = Math.abs(relaxedLength - currentLength);
        springCoefficient = (2 * uSpring) / (dx * dx);
        return springCoefficient;
    }
}
exports.uSpringCalculate = uSpringCalculate;
