function Vector(components) {
    this.arr = components;
    this.x = components[0];
    this.y = components[1];
    this.z = components[2];
}

function parseVector(str) {
    if (!str.includes(",")) {
        return null;
    }
    var x = parseFloat(str);
    str = str.slice(str.indexOf(",") + 1);
    var y = parseFloat(str);
    str = str.slice(str.indexOf(",") + 1);
    var z = parseFloat(str);
    var components = [x, y, z];
    return new Vector(components);
}

function toStringVector(v1) {
    var stringComponents = [];
    stringComponents[0] = v1.arr[0].toFixed(3);
    for (var i = 1; i < v1.arr.length; i++) {
        stringComponents[i] = " " + v1.arr[i].toFixed(3);
    }
    return "" + stringComponents + "";
}

function addVector(v1, v2) {
    newComponents = [];
    for (i = 0; i < v1.arr.length; i++) {
        newComponents[i] = v1.arr[i] + v2.arr[i];
    }
    return new Vector(newComponents);
}

function subtractVector(v1, v2) {
    newComponents = [];
    for (i = 0; i < v1.arr.length; i++) {
        newComponents[i] = v1.arr[i] - v2.arr[i];
    }
    return new Vector(newComponents); // v1 - v2
}

function multiplyVector(v1, num) {
    newComponents = [];
    for (i = 0; i < v1.arr.length; i++) {
        newComponents[i] = Number(v1.arr[i]) * Number(num);
    }
    return new Vector(newComponents);
}

function getMagnitude(v1) {
    sum = 0.0;
    for (i = 0; i < v1.arr.length; i++) {
        sum += v1.arr[i] * v1.arr[i];
    }
    return Math.sqrt(sum);
}

function getUnitVector(v1) {
    magnitude = getMagnitude(v1);
    newComponents = [];
    for (i = 0; i < v1.arr.length; i++) {
        newComponents[i] = v1.arr[i] / magnitude;
    }
    return new Vector(newComponents);
}

function dotProduct(v1, v2) {
    sum = 0;
    for (i = 0; i < v1.arr.length; i++) {
        sum += v1.arr[i] * v2.arr[i];
    }
    return sum;
}