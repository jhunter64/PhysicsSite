function changeType(id, newType) {
	console.log(id);
	console.log(document.getElementById(id).value);
	console.log(document.getElementById("velocity").value);
	var value = document.getElementById(id).value;
	console.log(value);
	document.getElementById(id).type = newType;
	document.getElementById(id).value = value;
}


function disableInput(elementId) {
	document.getElementById(elementId).disabled = true;
}


function enableInput(elementId) {
	document.getElementById(elementId).disabled = false;	
}


function highlight(elementId) {
	document.getElementById(elementId).style.border = "solid red";
}


function checkBlanks(maxBlanks) {
	var blanks = 0;
	for (i = 1; i < arguments.length; i++) {
		if (!document.getElementById(arguments[i]) || document.getElementById(arguments[i]).value == "") {
			blanks++;
		}
		if (blanks > maxBlanks) {
			alert("Too many blanks--try adding more input");
			return false;
		}
	}
	return true;
}


function numBlanks() {
	var blanks = 0;
	for (i = 1; i < arguments.length; i++) {
		if (!document.getElementById(arguments[i]) || document.getElementById(arguments[i]).value == "") {
			blanks++;
		}
	}
	return blanks;
}


function reset() {
	for (i = 0; i < arguments.length; i++) {
		document.getElementById(arguments[i]).value = "";
		document.getElementById(arguments[i]).style.borderColor = "white";
	}
}


function isMagnitude(value) {
	console.log(value);
	try {
		var numCommas = value.split(',').length - 1;
		console.log(numCommas);
		if (numCommas == 2) {
			return false;
		} else if (numCommas <= 1) {
			return true;
		}
	} catch(error) {
		return true;
	}
}
