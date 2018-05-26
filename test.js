function changeColor() {
	document.getElementById("title").innerHTML = "a";
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