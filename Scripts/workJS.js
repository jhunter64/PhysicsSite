function workCalculate() {
    var force = document.getElementById("force").value;
    var displacement = document.getElementById("displacement").value;
    var angle = document.getElementById("angle").value;
    var work = document.getElementById("work").value;
    var isMagnitude = document.getElementById("inputMagnitude").checked;
    var isVector = document.getElementById("inputVector").checked;
    if (angle == "") {
        angle = 0.0;
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
    } else if (force == "") {
        if (isMagnitude) {
            
        }
    }
}

function resetWork() {
    document.getElementById("force").value = "";
    document.getElementById("displacement").value = "";
    document.getElementById("angle").value = "";
    document.getElementById("work").value = "";
}