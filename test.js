function parseVector(str) {
	if (!str.includes(",")) {
        return null;
    }
	var x = parseFloat(str);
	
	str = str.slice(str.indexOf(",") + 1);
	var y = parseFloat(str);
	str = str.slice(str.indexOf(",") + 1);
	var z = parseFloat(str);
	var values = [x, y, z];
	return values;
}

function multiplyVector(v, n) {
	var vector = parseVector(v);
	var i;
	for (i = 0; i < vector.length; i++) {
		vector[i] *= n;
	}
	document.write(vector);
}

function testRadio() {
	var type = document.getElementById("inputMagnitude").checked;
	document.write(type);
}

function testVector() {
	v1 = new Vector([1, 2, 3]);
	v2 = new Vector([2, 3, 4]);
	document.write(add(v1, v2));
	//testSeparateFile();
}