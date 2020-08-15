function Vector(components) {
    this.arr = components;
    this.x = components[0];
    this.y = components[1];
    this.z = components[2];
}


function createVector(x, y, z) { return new Vector([x, y, z]); }
exports.createVector = createVector;


function parseVector(str) {
    if (!str || str == '') {
        return null;
    }
    str = str + '';
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
exports.parseVector = parseVector;


function toStringVector(v) {
    if (!v) {
        return '';
    }
    var stringComponents = [];
    stringComponents[0] = v.arr[0].toFixed(3);
    for (var i = 1; i < v.arr.length; i++) {
        stringComponents[i] = " " + v.arr[i].toFixed(3);
    }
    return "" + stringComponents + "";
}
exports.toStringVector = toStringVector;


function addVector(v1, v2) {
    newComponents = [];
    for (i = 0; i < v1.arr.length; i++) {
        newComponents[i] = v1.arr[i] + v2.arr[i];
    }
    return new Vector(newComponents);
}
exports.addVector = addVector;


/**
 * subtracts two Vector objects
 * @param {*} v1 
 * @param {*} v2 
 * @returns v1 - v2
 */
function subtractVector(v1, v2) {
    newComponents = [];
    for (i = 0; i < v1.arr.length; i++) {
        newComponents[i] = v1.arr[i] - v2.arr[i];
    }
    return new Vector(newComponents); // v1 - v2
}
exports.subtractVector = subtractVector;


function multiplyVector(v1, num) {
    newComponents = [];
    for (i = 0; i < v1.arr.length; i++) {
        newComponents[i] = Number(v1.arr[i]) * Number(num);
    }
    return new Vector(newComponents);
}
exports.multiplyVector = multiplyVector;


function getMagnitude(v) {
    sum = 0.0;
    for (i = 0; i < v.arr.length; i++) {
        sum += v.arr[i] * v.arr[i];
    }
    return Math.sqrt(sum);
}
exports.getMagnitude = getMagnitude;


function getUnitVector(v) {
    magnitude = getMagnitude(v);
    newComponents = [];
    for (i = 0; i < v.arr.length; i++) {
        newComponents[i] = v.arr[i] / magnitude;
    }
    return new Vector(newComponents);
}
exports.getUnitVector = getUnitVector;


function dotProduct(v1, v2) {
    if (!v1 || !v2) {
        return 0;
    }
    sum = 0;
    for (i = 0; i < v1.arr.length; i++) {
        sum += v1.arr[i] * v2.arr[i];
    }
    return sum;
}
exports.dotProduct = dotProduct;


function crossProduct(a, b) {
    var i_term = (a.y * b.z) - (a.z * b.y);
    var j_term = (a.x * b.z) - (a.z * b.x);
    var k_term = (a.x * b.y) - (a.y * b.x);
    var components = [i_term, j_term, k_term];
    var product = new Vector(components);

    return product;
}
exports.crossProduct = crossProduct;
