function angularMomentumCalculate() {
    // L = Iw
    var moment = document.getElementById("amMoment").value;
    var angularVelocity = document.getElementById("amAngularVelocity").value;
    var angularMomentum = document.getElementById("angularMomentum").value;
    checkBlanks(1, 'amMoment', 'amAngularVelocity', 'angularMomentum');
    if (moment == "") { // I = L / w
        moment = angularMomentum / angularVelocity;
        document.getElementById("amMoment").value = moment;
        highlight('amMoment');
    } else if (angularVelocity == "") { // w = L / I
        angularVelocity = angularMomentum / moment;
        document.getElementById("amAngularVelocity").value = angularVelocity;
        highlight('amAngularVelocity');
    } else if (angularMomentum == "") { // L = Iw
        angularMomentum = moment * angularVelocity;
        document.getElementById("angularMomentum").value = angularMomentum;
        highlight('angularMomentum');
    }
}

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
    var validInput = checkBlanks(1, 'momentMass', 'momentRL', 'momentOfIntertia');

    if (select == "particle") { // I = MR^2
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

function torqueCalculate() {
    // T = r * F * sin(theta)
    var radius = document.getElementById("torqueRadius").value;
    var force = document.getElementById("torqueForce").value;
    var angle = document.getElementById("torqueAngle").value;
    var torque = document.getElementById("torque").value;
    checkBlanks(1, 'torqueRadius', 'torqueForce', 'torqueAngle', 'torque');

    if (angle != "") {
        var sin_theta = Math.sin(angle);
    }
    if (radius == "") {
        radius = torque / (force * sin_theta);
        document.getElementById("torqueRadius").value = radius;
        highlight("torqueRadius");
    } else if (force == "") {
        force = torque / (radius * sin_theta);
        document.getElementById("torqueForce").value = force;
        highlight("torqueForce");
    } else if (angle == "") {
        var sin_theta = torque / (radius * force);
        angle = Math.asin(sin_theta);
        document.getElementById("torqueAngle").value = angle;
        highlight("torqueAngle");
    } else if (torque == "") {
        torque = radius * force * sin_theta;
        document.getElementById("torque").value = torque;
        highlight("torque");
    }
}

function angularVelocityCalculate() {
    // w = v/r
    var linearVelocity = document.getElementById("linearVelocity").value;
    var radius = document.getElementById("avRadius").value;
    var angularVelocity = document.getElementById("angularVelocity").value;
    checkBlanks(1, 'linearVelocity', 'avRadius', 'angularVelocity');
    if (linearVelocity == "") {
        linearVelocity = angularVelocity * radius;
        document.getElementById("linearVelocity").value = linearVelocity;
        highlight('linearVelocity');
    } else if (radius == "") {
        radius = linearVelocity / angularVelocity;
        document.getElementById("avRadius").value = radius;
        highlight('avRadius');
    } else if (angularVelocity == "") {
        angularVelocity = linearVelocity / radius;
        document.getElementById("angularVelocity").value = angularVelocity;
        highlight('angularVelocity');
    }
}