/**
 * Change the text for the input box on the moment of inertia
 * form since rods have Length and the other shapes have Radii
 */
function momentSelect() {
    var select = document.getElementById("momentSelect").value;
    var radiusOrLength = document.getElementById("momentRL_text");
    if (select == "rodCenter" || select == "rodEnd") {
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
    var validInput = checkBlanks(2, 'momentMass', 'momentRL', 'momentOfIntertia');

    if (!validInput) {
        alert("Missing input");
    } else if (select == "particle") { // I = MR^2
        if (mass == "") {
            mass = moment / (RL * RL);
        } else if (RL == "") {
            RL = Math.sqrt(moment / mass);
        } else if (moment == "") {
            moment = mass * RL * RL;
        }
    } else if (select == "solidSphere") { // I = (2/5)MR^2
        if (mass == "") {
            mass = (5 / 2) (moment / (RL * RL));
        } else if (RL == "") {
            RL = Math.sqrt((5 / 2) (moment / mass));
        } else if (moment == "") {
            moment = (2 / 5) * mass * RL * RL;
        }
    } else if (select == "hollowSphere") { // I = (2/3)MR^2
        if (mass == "") {
            mass = (3 / 2) (moment / (RL * RL));
        } else if (RL == "") {
            RL = Math.sqrt((3 / 2) (moment / mass));
        } else if (moment == "") {
            moment = (2 / 3) * (mass * RL * RL);
        }
    } else if (select == "solidCylinder" || select == "disk") { // I = (1/2)MR^2
        if (mass == "") {
            mass = 2 * (moment / (RL * RL));
        } else if (RL == "") {
            RL = Math.sqrt(2 * (moment / mass));
        } else if (moment == "") {
            moment = (1 / 2) * (mass * RL * RL);
        }
    } else if (select == "hollowCylinder" || select == "ring") { // I = MR^2
        if (mass == "") {
            mass = moment / (RL * RL);
        } else if (RL == "") {
            RL = Math.sqrt(moment / mass);
        } else if (moment == "") {
            moment = mass * RL * RL;
        }
    } else if (select == "rodCenter") { // I = (1/12)ML^2
        if (mass == "") {
            mass = 12 * (moment / (RL * RL));
        } else if (RL == "") {
            RL = Math.sqrt(12 * (moment / mass));
        } else if (moment == "") {
            moment = (1 / 12) * (mass * RL * RL);
        }
    } else if (select == "rodEnd") { // I = (1/3)ML^2
        if (mass == "") {
            mass = 3 * (moment / (RL * RL));
        } else if (RL == "") {
            RL = Math.sqrt(3 * (moment / mass));
        } else if (moment == "") {
            moment = (1 / 3) * (mass * RL * RL);
        }
    }
    if (validInput) {
        if (document.getElementById("momentMass").value == "") {
            document.getElementById("momentMass").value = mass;
            highlight('momentMass');
        } else if (document.getElementById("momentRL").value == "") {
            document.getElementById("momentRL").value = RL;
            highlight('momentRL');
        } else if (document.getElementById("momentOfInertia").value == "") {
            document.getElementById("momentOfInertia").value = moment;
            highlight('momentOfInertia');
        }
    }
}