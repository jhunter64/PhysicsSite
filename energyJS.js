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

function resetKinetic() {
    document.getElementById("mass").value = "";
    document.getElementById("velocity").value = "";
    document.getElementById("kineticEnergy").value = "";
}