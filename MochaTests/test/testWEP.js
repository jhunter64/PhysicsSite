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