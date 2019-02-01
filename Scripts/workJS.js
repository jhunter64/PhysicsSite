function workCalculate() {
    var force = document.getElementById("force").value;
    var displacement = document.getElementById("displacement").value;
    var angle = document.getElementById("angle").value;
    var work = document.getElementById("work").value;
    var isMagnitude = document.getElementById("inputMagnitude").checked;
    var isVector = document.getElementById("inputVector").checked;
    if (angle == "") {
        if (force == "" || work == "" || displacement == "") {
            angle = 0.0;
        } else {
            angle = Math.acos(work / (force * displacement));
            document.getElementById("angle").value = angle;
            highlight("angle");
        }
    }
    if (work == "") {
        if (isMagnitude) {
            work = force * Math.cos(angle) * displacement;
            document.getElementById("work").value = work;
        } else if (isVector) {
            force = parseVector(force);
            displacement = parseVector(displacement);
            var x = force.arr[0] * displacement.arr[0];
            var y = force.arr[1] * displacement.arr[1];
            var z = force.arr[2] * displacement.arr[2];
            work = new Vector([x, y, z]);
            document.getElementById("work").value = toStringVector(work);
        }
        highlight("work");
    } else if (force == "") {
        if (isMagnitude) {
            force = work / Math.cos(angle) / displacement;
            document.getElementById("force").value = force;
        } else if (isVector) {
            work = parseVector(work);
            displacement = parseVector(displacement);
            var forceX = work.arr[0] / displacement.arr[0];
            var forceY = work.arr[1] / displacement.arr[1];
            var forceZ = work.arr[2] / displacement.arr[2];
            force = new Vector([forceX, forceY, forceZ]);
            document.getElementById("force").value = toStringVector(force);
        }
        highlight("force");
    } else if (displacement == "") {
        if (isMagnitude) {
            displacement = work / (force * Math.cos(angle));
            document.getElementById("displacement").value = displacement;
        } else if (isVector) {
            work = parseVector(work);
            force = parseVector(force);
            var dX = work.arr[0] / force.arr[0];
            var dY = work.arr[1] / force.arr[1];
            var dZ = work.arr[2] / force.arr[2];
            displacement = new Vector([dX, dY, dZ]);
            document.getElementById("displacement").value = 
                toStringVector(displacement);
        }
        highlight("displacement");
    }
}

function resetWork() {
    document.getElementById("force").value = "";
    document.getElementById("force").style.borderColor = "white";
    document.getElementById("displacement").value = "";
    document.getElementById("displacement").style.borderColor = "white";
    document.getElementById("angle").value = "";
    document.getElementById("angle").style.borderColor = "white";
    document.getElementById("work").value = "";
    document.getElementById("work").style.borderColor = "white";
}