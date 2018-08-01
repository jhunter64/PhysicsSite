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