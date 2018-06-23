function Vector(components) {
    this.arr = components;
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

function toString(v1) {
    return v1.arr;
}

function add(v1, v2) {
    newComponents = [];
    for (i = 0; i < v1.arr.length; i++) {
        newComponents[i] = v1.arr[i] + v2.arr[i];
    }
    return new Vector(newComponents);
}

function subtract(v1, v2) {
    for (i = 0; i < v1.arr.length; i++) {
        newComponents[i] = v1.arr[i] - v2.arr[i];
    }
    return new Vector(newComponents);
}

function multiply(v1, v2) {
    for (i = 0; i < v1.arr.length; i++) {
        newComponents[i] = v1.arr[i] * v2.arr[i];
    }
    return new Vector(newComponents);
}

function getMagnitude(v1) {
    sum = 0.0;
    for (i = 0; i < v1.length; i++) {
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