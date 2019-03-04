function changeType(curr, newType) {
	document.getElementById(curr).type = newType;
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
	blanks = 0;
	for (i = 1; i < arguments.length; i++) {
		if (document.getElementById(arguments[i]).value == "") {
			blanks++;
		}
		if (blanks > maxBlanks) {
			alert("Not enough input");
			return false;
		}
	}
	return true;
}

function reset() {
	for (i = 0; i < arguments.length; i++) {
		document.getElementById(arguments[i]).value = "";
		document.getElementById(arguments[i]).style.borderColor = "white";
	}
}