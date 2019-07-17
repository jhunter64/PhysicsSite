function workCalculate() {
    var force = document.getElementById("force").value;
    var displacement = document.getElementById("displacement").value;
    var angle = document.getElementById("angle").value;
    var work = document.getElementById("work").value;
    var isMagnitude = document.getElementById("workMagnitude").checked;
    var isVector = document.getElementById("workVector").checked;
    if (isMagnitude && angle == "") {
        if (force == "" || work == "" || displacement == "") {
            angle = 0.0;
        } else {
            angle = Math.acos(work / (force * displacement));
            document.getElementById("angle").value = angle;
            highlight("angle");
        }
    }
    if (work == "") {
        if (isMagnitude) {
            work = force * Math.cos(angle) * displacement;
            document.getElementById("work").value = work;
        } else if (isVector) {
            force = parseVector(force);
            displacement = parseVector(displacement);
            var x = force.arr[0] * displacement.arr[0];
            var y = force.arr[1] * displacement.arr[1];
            var z = force.arr[2] * displacement.arr[2];
            work = new Vector([x, y, z]);
            document.getElementById("work").value = getMagnitude(work);
        }
        highlight("work");
    } else if (force == "") {
        if (isMagnitude) {
            force = work / Math.cos(angle) / displacement;
            document.getElementById("force").value = force;
        } else if (isVector) {
            work = parseVector(work);
            displacement = parseVector(displacement);
            var forceX = work.arr[0] / displacement.arr[0];
            var forceY = work.arr[1] / displacement.arr[1];
            var forceZ = work.arr[2] / displacement.arr[2];
            force = new Vector([forceX, forceY, forceZ]);
            document.getElementById("force").value = toStringVector(force);
        }
        highlight("force");
    } else if (displacement == "") {
        if (isMagnitude) {
            displacement = work / (force * Math.cos(angle));
            document.getElementById("displacement").value = displacement;
        } else if (isVector) {
            work = parseVector(work);
            force = parseVector(force);
            var dX = work.arr[0] / force.arr[0];
            var dY = work.arr[1] / force.arr[1];
            var dZ = work.arr[2] / force.arr[2];
            displacement = new Vector([dX, dY, dZ]);
            document.getElementById("displacement").value = 
                toStringVector(displacement);
        }
        highlight("displacement");
    }
}

function powerCalculate() {
    var force = document.getElementById("power_force").value;
    var displacement = document.getElementById("power_displacement").value;
    var angle = document.getElementById("power_angle").value;
    var time = document.getElementById("power_time").value;
    var power = document.getElementById("power").value;
    var isMagnitude = document.getElementById("powerMagnitude").checked;
    var isVector = document.getElementById("powerVector").checked;

    checkBlanks(2, "power_force", "power_displacement", "power_angle", "power_time", "power");

    if (power == "") {
        if (isMagnitude) {
            power = (force * displacement * Math.cos(angle)) / time;
        } else if (isVector) {
            force = parseVector(force);
            displacement = parseVector(displacement);
            work = dotProduct(force, displacement);
            power = getMagnitude(work) / time;
        }
        document.getElementById("power").value = power;
        highlight("power");
    }

    if (force == "") {
        if (isMagnitude) {
            force = (power * time) / displacement;
        } else if (isVector) {
            displacement = parseVector(displacement);
        }
    }
}

function kineticCalculate() {
    var mass = document.getElementById("mass").value;
    var velocity = document.getElementById("velocity").value;
    var kineticEnergy = document.getElementById("kineticEnergy").value;
    var isMagnitude = document.getElementById("inputMagnitude").checked;
    var isVector = document.getElementById("inputVector").checked;
    if (kineticEnergy == "") {
        if (isMagnitude) {
            document.getElementById("kineticEnergy").value = 0.5 * mass * velocity * velocity;
        } else if (isVector) {
            var v = parseVector(velocity);
            velocity = getMagnitude(v);
            document.getElementById("kineticEnergy").value = 0.5 * mass * velocity * velocity;
        }
        highlight("kineticEnergy");
    } else if (velocity == "") {
        if (isMagnitude) {
            document.getElementById("velocity").value = Math.sqrt(2.0 * kineticEnergy / mass);
        } else if (isVector) {
            alert("Cannot calculate velocity vector, only magnitude");
            document.getElementById("velocity").value = Math.sqrt(2.0 * kineticEnergy / mass);
        }
        highlight("velocity");
    } else if (mass == "") {
        if (isMagnitude) {
            document.getElementById("mass").value = 2.0 * kineticEnergy / (velocity * velocity);
        } else if (isVector) {
            var v = parseVector(velocity);
            var vMag = getMagnitude(v);
            document.getElementById("mass").value = 2.0 * kineticEnergy / (vMag * vMag);
        }
        highlight("mass");
    }
}

function uGravCalculate() {
    var mass = document.getElementById("uGravMass").value;
    var height = document.getElementById("uGravHeight").value;
    var uGrav = document.getElementById("uGravEnergy").value;
    var g = 9.8;
    if (checkBlanks(1, "uGravMass", "uGravHeight", "uGravEnergy")) {
        if (uGrav == "") {
            uGrav = mass * g * height;
            document.getElementById("uGravEnergy").value = uGrav;
            highlight("uGravEnergy");
        } else if (height == "") {
            height = uGrav / (mass * g);
            document.getElementById("uGravHeight").value = height;
            highlight("uGravHeight");
        } else if (mass == "") {
            mass = uGrav / (g * height);
            document.getElementById("uGravMass").value = mass;
            highlight("uGravMass");
        }
    }
}

function uSpringCalculate() {
    var relaxedLength = document.getElementById("uSpringRelaxed").value;
    var currentLength = document.getElementById("uSpringCurrent").value;
    var springCoefficient = document.getElementById("uSpringK").value;
    var uSpring = document.getElementById("uSpring").value;
    if (uSpring == "") {
        var dx = Math.abs(relaxedLength - currentLength);
        uSpring = .5 * dx * dx * springCoefficient;
        document.getElementById("uSpring").value = uSpring;
        highlight("uSpring");
    } else if (relaxedLength == "") {
        var dx = Math.sqrt((2 * uSpring) / springCoefficient);
        var relaxed1 = currentLength + dx;
        var relaxed2 = currentLength - dx;
        alert("Relaxed length could be " + relaxed1 + " or " + relaxed2
             + "\n(relaxed = current +/- deltaX)");
        document.getElementById("uSpringRelaxed").value = relaxed1;
        highlight("uSpringRelaxed");
    } else if (currentLength == "") {
        var dx = Math.sqrt((2 * uSpring) / springCoefficient);
        var current1 = relaxedLength + dx;
        var current2 = relaxedLength - dx;
        alert("Relaxed length could be " + current1 + " or " + current2
             + "\n(current = relaxed +/- deltaX)");
        document.getElementById("uSoringCurrent").value = current1;
        highlight("uSpringCurrent");
    } else if (springCoefficient == "") {
        var dx = Math.abs(relaxedLength - currentLength);
        springCoefficient = (2 * uSpring) / (dx * dx);
        document.getElementById("uSpringK").value = springCoefficient;
        highlight("uSpringK");
    }
}

function resetKinetic() {
    document.getElementById("mass").value = "";
    document.getElementById("mass").style.borderColor = "white";
    document.getElementById("velocity").value = "";
    document.getElementById("velocity").style.borderColor = "white";
    document.getElementById("kineticEnergy").value = "";
    document.getElementById("kineticEnergy").style.borderColor = "white";
}

function resetUGrav() {
    document.getElementById("uGravMass").value = "";
    document.getElementById("uGravMass").style.borderColor = "white";
    document.getElementById("uGravHeight").value = "";
    document.getElementById("uGravHeight").style.borderColor = "white";
    document.getElementById("uGravEnergy").value = "";
    document.getElementById("uGravEnergy").style.borderColor = "white";
}

function resetUSpring() {
    document.getElementById("uSpringRelaxed").value = "";
    document.getElementById("uSpringRelaxed").style.borderColor = "white";
    document.getElementById("uSpringCurrent").value = "";
    document.getElementById("uSpringCurrent").style.borderColor = "white";
    document.getElementById("uSpringK").value = "";
    document.getElementById("uSpringK").style.borderColor = "white";
    document.getElementById("uSpring").value = "";
    document.getElementById("uSpring").style.borderColor = "white";
}