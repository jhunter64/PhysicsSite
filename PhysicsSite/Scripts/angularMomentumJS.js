/**
 * Change the text for the input box on the moment of inertia
 * form since rods have Length and the other shapes have Radii
 */
function momentSelect() {
    var select = document.getElementById("momentSelect").value;
    var radiusOrLength = document.getElementById("momentRL_text");
    if (select == "rod") {
        radiusOrLength.textContent = "Length:";
    } else {
        radiusOrLength.textContent = "Radius:";
    }
}

function momentCalculate() {
    var select = document.getElementById("momentSelect").value;
    var validInput = checkBlanks(2, 'momentMass', 'momentRL', 'momentOfIntertia');
    if (!validInput) {
        alert("Missing input");
    } else if (select == "particle") {

    } else if (select == "solidSphere") {

    } else if (select == "hollowSphere") {

    } else if (select == "solidCylinder") {
        
    } else if (select == "hollowCylinder") {
        
    } else if (select == "ring") {
        
    } else if (select == "disk") {
        
    } else if (select == "rod") {
        
    }
}