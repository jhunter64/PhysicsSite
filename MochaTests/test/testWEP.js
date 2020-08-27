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
        let result = WEP.powerCalculate('', '3,3,3', '', '18', false);
    });
    it('should calculate displacement (vector)', function() {

    });
    it('should calculate time (vector)', function() {

    });
});


describe('#kineticCalculate()', function() {
    it('should calculate kinetic energy (magnitude)', function() {

    });
    it('should calculate velocity (magnitude)', function() {

    });
    it('should calculate mass (magnitude)', function() {

    });
    it('should calculate kinetic energy (vector)', function() {

    });
    it('should calculate mass (vector)', function() {

    });
});
