var assert = require('chai').assert;
var WEP = require('../../PhysicsSite/Scripts/wepJS');


describe('#workCalculate()', function() {
    it('should calculate angle (magnitude)', function() {
        let result = WEP.workCalculate('100', '5', '', '433', true);
        assert(result.toFixed(3) == 0.524);
    });
    it('should calculate work (magnitude)', function() {
        let result = WEP.workCalculate('100', '5', '0.524', '', true);
        assert(result.toFixed(3) == 432.912);
    });
    it('should calculate force (magnitude)', function() {
        let result = WEP.workCalculate('', '5', '0.524', '433', true);
        assert(result.toFixed(3) == 100.020);
    });
    it('should calculate displacement (magnitude)', function() {
        let result = WEP.workCalculate('100', '', '0.524', '433', true);
        assert(result.toFixed(3) == 5.001);
    });
    it('should calculate work (vector)', function() {
        let result = WEP.workCalculate('1,2,3', '3,3,3', '', '', false);
        assert(result == 18);
    });
    it('should calculate force (vector)', function() {
        let result = WEP.workCalculate('', '3,3,3', '', '18', false);
        assert(result == '6.000, 0.000, 0.000');
    });
    it('should calculate displacement (vector)', function() {
        let result = WEP.workCalculate('3,3,3', '', '', '18', false);
        assert(result == '6.000, 0.000, 0.000');
    });
});


describe('#powerCalculate()', function() {
    it('should calculate power (magnitude)', function() {
        let result = WEP.powerCalculate('100', '5', '0.524', '10', '', true);
        assert(result.toFixed(3) == 43.291);
    });
    it('should calculate force (magnitude)', function() {
        let result = WEP.powerCalculate('', '5', '0.524', '10', '43.291', true);
        assert(result.toFixed(0) == 100);
    });
    it('should calculate displacement (magnitude)', function() {
        let result = WEP.powerCalculate('100', '', '0.524', '10', '43.291', true);
        assert(result.toFixed(0) == 5);
    });
    it('should calculate angle (magnitude)', function() {
        let result = WEP.powerCalculate('100', '5', '', '10', '43.291', true);
        assert(result.toFixed(3) == 0.524);
    });
    it('should calculate time (magnitude)', function() {
        let result = WEP.powerCalculate('100', '5', '0.524', '', '43.291', true);
        assert(result.toFixed(0) == 10);
    });
    it('should calculate power (vector)', function() {
        let result = WEP.powerCalculate('1,2,3', '3,3,3', '', '3', '', false);
        assert(result == 6);
    });
    it('should calculate force (vector)', function() {
        let result = WEP.powerCalculate('', '3,3,3', '', '18', '6', false);
        assert(result == '36.000, 0.000, 0.000');
    });
    it('should calculate displacement (vector)', function() {
        let result = WEP.powerCalculate('3,3,3', '', '', '18', '6', false);
        assert(result == '36.000, 0.000, 0.000');
    });
    it('should calculate time (vector)', function() {
        let result = WEP.powerCalculate('1,2,3', '3,3,3', '', '', '6', false);
        assert(result == 3);
    });
});


describe('#kineticCalculate()', function() {
    it('should calculate kinetic energy (magnitude)', function() {
        let result = WEP.kineticCalculate('4.7', '67.3', '', true);
        assert(result == 10643.8315);
    });
    it('should calculate velocity (magnitude)', function() {
        let result = WEP.kineticCalculate('17.3', '', '45.2', true);
        assert(result.toFixed(3) == 2.286);
    });
    it('should calculate mass (magnitude)', function() {
        let result = WEP.kineticCalculate('', '2.6', '12.1', true);
        assert(result.toFixed(3) == 3.580);
    });
    it('should calculate kinetic energy (vector)', function() {
        let result = WEP.kineticCalculate('3.4', '1,2,3', '', false);
        assert(result == 23.8);
    });
    it('should calculate mass (vector)', function() {
        let result = WEP.kineticCalculate('', '1,2,3', '23.8', false);
        assert(result == 3.4);
    });
});


describe('#uGravCalculate()', function() {
    it('should calculate uGrav', function() {
        let result = WEP.uGravCalculate('14.7', '54.9', '');
        assert(result == 7908.894);
    });
    it('should calculate height', function() {
        let result = WEP.uGravCalculate('24.2', '', '63.3');
        assert(result.toFixed(3) == 0.267);
    });
    it('should calculate mass', function() {
        let result = WEP.uGravCalculate('', '13.8', '249.4');
        assert(result.toFixed(3) == 1.844);
    });
});


describe('#uSpringCalculate()', function() {
    it('should calculate uSpring', function() {
        let result = WEP.uSpringCalculate('3', '1', '0.7', '');
        assert(result == 1.4);
    });
    it('should calculate relaxed length', function() {
        let result = WEP.uSpringCalculate('', '1', '0.7', '1.4');
        assert(result[0] == 3);
        assert(result[1] == -1);
    });
    it('should calculate current length', function() {
        let result = WEP.uSpringCalculate('3', '', '0.7', '1.4');
        assert(result[0] == 5);
        assert(result[1] == 1);
    });
    it('should calculate spring coefficient', function() {
        let result = WEP.uSpringCalculate('3', '5', '', '1.4');
        assert(result == 0.7);
    });
});
