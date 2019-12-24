function f_coul_calculate() {
    var isMagnitude = document.getElementById("F_coul_Magnitude").checked;
    var isVector = document.getElementById("F_coul_Vector").checked;
    var q1 = document.getElementById("F_coul_q1").value;
    var q2 = document.getElementById("F_coul_q2").value;
    var radius = document.getElementById("F_coul_radius").value;
    var force = document.getElementById("F_coul").value;

    var coulomb_constant = 9 * Math.pow(10, 9);

    if (isVector) {
        if (radius == "") {
            alert("Cannot go from magnitude to vector values");
        } else {

        }
    }
}