var assert = require('chai').assert;
var LinearMomentum = require('../../PhysicsSite/Scripts/linearMomentumJS');


describe('#momentumCalculate()', function() {
    it('should calculate momentum (magnitude)', function() {
        let momentum = LinearMomentum.momentumCalculate("17", "43", "", true);
        assert(momentum == 731);
    });
    it('should calculate mass (magnitude)', function() {
        let mass = LinearMomentum.momentumCalculate("", "28", "728", true);
        assert(mass == 26);
    });
    it('should calculate velocity (magnitude)', function() {
        let velocity = LinearMomentum.momentumCalculate("33", "", "2112", true);
        assert(velocity == 64);
    });
    it('should calculate momentum (vector)', function() {
        let momentum = LinearMomentum.momentumCalculate("4", "23, 67, 1", "", false);
        assert(momentum == "92.000, 268.000, 4.000");
    });
    it('should calculate mass (vector)', function() {
        let mass = LinearMomentum.momentumCalculate("", "7, 22, 3", "21, 66, 9", false);
        assert(mass == 3);
    });
    it('should calculate velocity (vector)', function() {
        let velocity = LinearMomentum.momentumCalculate("12", "", "24, 84, 120", false);
        assert(velocity == "2.000, 7.000, 10.000")
    });
});

describe('#collisionCalculate()', function() {
    it('should calculate m1 (magnitude)', function() {
        let m1 = LinearMomentum.collisionCalculate("", "4", "3", "-12", "-3", "-3", true);
        assert(m1 == 6);
    });
    it('should calculate m2 (magnitude)', function() {
        let m2 = LinearMomentum.collisionCalculate("6", "", "3", "-12", "-3", "-3", true);
        assert(m2 == 4);
    });    
    it('should calculate vi1 (magnitude)', function() {
        let vi1 = LinearMomentum.collisionCalculate("1", "3", "", "-2", "-4", "1", true);
        assert(vi1 == 5);
    });
    it('should calculate vi2 (magnitude)', function() {
        let vi2 = LinearMomentum.collisionCalculate("1", "3", "5", "", "-4", "1", true);
        assert(vi2 == -2);
    });
    it('should calculate vf1 (magnitude)', function() {
        let vf1 = LinearMomentum.collisionCalculate("6", "4", "3", "-12", "", "", true);
        assert(vf1 == -3);
    });
    it('should calculate vf2 (magnitude)', function() {
        let vf2 = LinearMomentum.collisionCalculate("6", "4", "3", "-12", "-3", "", true);
        assert(vf2 == -3);
    });
    it('should calculate m1 (vector)', function() {
        let m1 = LinearMomentum.collisionCalculate("", "4", "3,0,0", "-12,0,0", "-3,0,0", "-3,0,0", false);
        assert(m1 == 6);
    });
    it('should calculate m2 (vector)', function() {
        let m2 = LinearMomentum.collisionCalculate("6", "", "3,0,0", "-12,0,0", "-3,0,0", "-3,0,0", false);
        assert(m2 == 4);
    });
    it('should calculate vi1 (vector)', function() {
        let vi1 = LinearMomentum.collisionCalculate("6", "4", "", "-12,0,0", "-3,0,0", "-3,0,0", false);
        assert(vi1 == "3.000, 0.000, 0.000");
    });
    it('should calculate vi2 (vector)', function() {
        let vi2 = LinearMomentum.collisionCalculate("6", "4", "3,0,0", "", "-3,0,0", "-3,0,0", false);
        assert(vi2 == "-12.000, 0.000, 0.000");
    });
    it('should calculate vf1 (vector)', function() {
        let vf1 = LinearMomentum.collisionCalculate("6", "4", "3,0,0", "-12,0,0", "", "-3,0,0", false);
        assert(vf1 == "-3.000, 0.000, 0.000");
    });
    it('should calculate vf2 (vector)', function() {
        let vf2 = LinearMomentum.collisionCalculate("6", "4", "3,0,0", "-12,0,0", "-3,0,0", "", false);
        assert(vf2 == "-3.000, 0.000, 0.000");
    });
});


describe('#timeStepCalculate()', function() {
    it('should calculate velocity (magnitude)', function() {
        let result = LinearMomentum.timeStepCalculate("5", "2", "7", "0", "1", true);
        assert(result[0] == 3.4);
    });
    it('should calculate position (magnitude)', function() {
        let result1 = LinearMomentum.timeStepCalculate("5", "1", "0", "0", "1", true);
        let result2 = LinearMomentum.timeStepCalculate("5", result1[0], "0", result1[1], "1", true);
        assert(result1[1] == 1 && result2[1] == 2);
    });
    it('should calculate velocity (vector)', function() {
        let result = LinearMomentum.timeStepCalculate("5", "2,0,0", "7,0,0", "0,0,0", "1", false);
        assert(result[0] == '3.400, 0.000, 0.000');
    });
    it('should calculate position (vector)', function() {
        let result = LinearMomentum.timeStepCalculate("5", "2,0,0", "7,0,0", "0,0,0", "1", false);
        assert(result[1] == '3.400, 0.000, 0.000');
    });
});


describe('#launchedProjectileCalculate()', function() {
    it('should calculate eq1 (magnitude)', function() {
        let result = LinearMomentum.launchedProjectileCalculate("83.69", "1.524", "0.78", "", "", "", "", true);
        assert(result[0] > 4.59 && result[0] < 4.6); // max distance
        assert(result[1] > 83.74 && result[1] < 83.75); // max height
        assert(result[2] > 4.24 && result[2] < 4.25); // time max distance
        assert(result[3] > 0.10 && result[3] < 0.11); // time max height
    });
    it('should calculate eq2 (magnitude)', function() {
        let result = LinearMomentum.launchedProjectileCalculate("5", "", "0.5", "", "5.63", "", "", true);
        assert(result[0] > 4.99 && result[0] < 5.00);
    });
    it('should calculate eq3 (magnitude)', function() {
        let result = LinearMomentum.launchedProjectileCalculate("0", "7", "", "", "5", "", "", true);
        assert(result.length == 1);
        assert(result[0] > 0.78 && result[0] < 0.79);
    });
    it('should calculate eq4 (magnitude)', function() {
        let result = LinearMomentum.launchedProjectileCalculate("0", "7", "", "", "5", "", "", true);
        
    });
    it('should calculate eq1 (vector, x-only)', function() {
        let result = LinearMomentum.launchedProjectileCalculate("83.69", "1.524,0,0", "", "", "", "", "", false);
        assert(result[0] > 6.29 && result[0] < 6.30); // max distance
        assert(result[1] == 83.69); // max height
        assert(result[2] > 4.13 && result[2] < 4.14); // time max distance
        assert(result[3] == 0); // time max height
    });
    it('should calculate eq1 (vector, y-only)', function() {
        let result = LinearMomentum.launchedProjectileCalculate("5", "0,1.524,0", "", "", "", "", "", false);
        assert(result[0] == 0); // max distance
        assert(result[1] > 5.11 && result[1] < 5.12); // max height
        assert(result[2] == 0); // time max distance
        assert(result[3] > 0.15 && result[3] < 0.16); // time max height
    });
    it('should calculate eq1 (vector, X & Y)', function() {
        let result = LinearMomentum.launchedProjectileCalculate("83.69", "1.0834,1.0718,0", "", "", "", "", "", false);
        assert(result[0] > 4.59 && result[0] < 4.6); // max distance
        assert(result[1] > 83.74 && result[1] < 83.75); // max height
        assert(result[2] > 4.24 && result[2] < 4.25); // time max distance
        assert(result[3] > 0.10 && result[3] < 0.11); // time max height
    });
    it('should calculate eq2 (vector)', function() {
        let caught = false;
        try {
            let result = LinearMomentum.launchedProjectileCalculate("83.69", "", "0.5", "", "15", "", "", false);
        } catch(error) {
            caught = true;
        }
        assert(caught);
    });
    it('should calculate eq3 (vector)', function() {
        let caught = false;
        try {
            let result = LinearMomentum.launchedProjectileCalculate("123", "123", "", "", "", "", "", false);
        } catch(error) {
            caught = true;
        }
        assert(caught);
    });
});
