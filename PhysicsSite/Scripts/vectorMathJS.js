function addSubtractCalculate(type) {
    var element = "addVectorResult";
    var v1, v2;
    var validInput;
    if (type == "add") {
        v1 = document.getElementById("addVector1").value;
        v2 = document.getElementById("addVector2").value;
        validInput = checkBlanks(0, 'addVector1', 'addVector2');
    } else {
        v1 = document.getElementById("subtractVector1").value;
        v2 = document.getElementById("subtractVector2").value;
        validInput = checkBlanks(0, 'subtractVector1', 'subtractVector2');
        element = "subtractVectorResult";
    }

    v1 = parseVector(v1);
    v2 = parseVector(v2);

    if (type == "add") {
        result = addVector(v1, v2);
    } else {
        result = subtractVector(v1, v2);
    }
    result = toStringVector(result);

    document.getElementById(element).value = result;
    highlight(element);
}

function calculateMagnitude() {
    var vector = document.getElementById("magnitudeVector").value;
    vector = parseVector(vector);
    var magnitude = getMagnitude(vector);
    document.getElementById("magnitude").value = magnitude;
    highlight("magnitude");
}

function calculateUnitVector() {
    var vector = document.getElementById("unitV1").value;
    vector = parseVector(vector);
    var unitVector = getUnitVector(vector);
    unitVector = toStringVector(unitVector);
    document.getElementById("unitVector").value = unitVector;
    highlight("unitVector");
}

function calculateDotProduct() {
    var v1 = document.getElementById("dotVector1").value;
    var v2 = document.getElementById("dotVector2").value;
    var v1 = parseVector(v1);
    var v2 = parseVector(v2);
    var product = dotProduct(v1, v2);
    document.getElementById("dotProduct").value = product;
    highlight("dotProduct");
}