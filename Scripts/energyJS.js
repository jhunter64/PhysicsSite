function kineticCalculate() {
    var mass = document.getElementById("mass").value;
    var velocity = document.getElementById("velocity").value;
    var kineticEnergy = document.getElementById("kineticEnergy").value;
    var isMagnitude = document.getElementById("inputMagnitude").checked;
    var isVector = document.getElementById("inputVector").checked;
    if (kineticEnergy == "") {
        if (isMagnitude) {
            document.getElementById("kineticEnergy").value = 0.5 * mass * velocity * velocity;
        }
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
    }
}

function resetKinetic() {
    document.getElementById("mass").value = "";
    document.getElementById("velocity").value = "";
    document.getElementById("kineticEnergy").value = "";
}

function resetUGrav() {
    document.getElementById("uGravMass").value = "";
    document.getElementById("uGravHeight").value = "";
    document.getElementById("uGravEnergy").value = "";
}