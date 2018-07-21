function workCalculate() {
    var force = document.getElementById("force").value;
    var displacement = document.getElementById("displacement").value;
    var angle = document.getElementById("angle").value;
    var work = document.getElementById("work").value;
    var isMagnitude = document.getElementById("inputMagnitude").checked;
    var isVector = document.getElementById("inputVector").checked;
    if (work == "") {
        if (isMagnitude) {
            work = force * Math.cos(angle) * displacement;
        }
        document.getElementById("work").value = work;
    }
}

function resetWork() {
    document.getElementById("force").value = "";
    document.getElementById("displacement").value = "";
    document.getElementById("angle").value = "";
    document.getElementById("work").value = "";
}