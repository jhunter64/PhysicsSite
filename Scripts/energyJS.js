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

        }
        highlight("velocity");
    } else if (mass == "") {
        if (isMagnitude) {
            document.getElementById("mass").value = 2.0 * kineticEnergy / (velocity * velocity);
        } else if (isVector) {
            
        }
        highlight("mass");
    }
}

function uGravCalculate() {
    var mass = document.getElementById("uGravMass").value;
    var height = document.getElementById("uGravHeight").value;
    var uGrav = document.getElementById("uGravEnergy").value;
    var g = 9.8;
    if (uGrav == "") {
        uGrav = mass * g * height;
        document.getElementById("uGravEnergy").value = uGrav;
        highlight("uGravEnergy");
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