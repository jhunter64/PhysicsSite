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
    var mass = document.getElementById("momentMass").value;
    var RL = document.getElementById("momentRL").value;
    var moment = document.getElementById("momentOfInertia").value;
    console.log(select);
    console.log(mass);
    console.log(RL);
    console.log(moment);
    var validInput = checkBlanks(2, 'momentMass', 'momentRL', 'momentOfIntertia');

    if (!validInput) {
        alert("Missing input");
    } else if (select == "particle") { // I = MR^2
        if (mass == "") {
            mass = moment / (RL * RL);
            document.getElementById("momentMass").value = mass;
            highlight('momentMass');
        } else if (RL == "") {
            RL = Math.sqrt(moment / mass);
            document.getElementById("momentRL").value = RL;
            highlight('momentRL');
        } else if (moment == "") {
            moment = mass * RL * RL;
            document.getElementById("momentOfInertia").value = moment;
            highlight('momentOfInertia');
        }
    } else if (select == "solidSphere") { // I = (2/5)MR^2
        if (mass == "") {
            mass = (5 / 2) (moment / (RL * RL));
            document.getElementById("momentMass").value = mass;
            highlight('momentMass');
        } else if (RL == "") {
            RL = Math.sqrt((5 / 2) (moment / mass));
            document.getElementById("momentRL").value = RL;
            highlight('momentRL');
        } else if (moment == "") {
            moment = (2 / 5) * mass * RL * RL;
            document.getElementById("momentOfInertia").value = moment;
            highlight('momentOfInertia');
        }
    } else if (select == "hollowSphere") {
        if (mass == "") {

        } else if (RL == "") {

        } else if (moment == "") {
            
        }
    } else if (select == "solidCylinder") {
        if (mass == "") {

        } else if (RL == "") {

        } else if (moment == "") {
            
        }
    } else if (select == "hollowCylinder") {
        if (mass == "") {

        } else if (RL == "") {

        } else if (moment == "") {
            
        }
    } else if (select == "ring") {
        if (mass == "") {

        } else if (RL == "") {

        } else if (moment == "") {
            
        }
    } else if (select == "disk") {
        if (mass == "") {

        } else if (RL == "") {

        } else if (moment == "") {
            
        }
    } else if (select == "rod") {
        if (mass == "") {

        } else if (RL == "") {

        } else if (moment == "") {
            
        }
    }
}