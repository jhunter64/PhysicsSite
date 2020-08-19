var assert = require('chai').assert;
var AngularMomentum = require('../../PhysicsSite/Scripts/angularMomentumJS');


describe('#angularMomentumCalculate()', function() {
    it('should calculate moment', function() {
        let result = AngularMomentum.angularMomentumCalculate('', '47', '16');
        assert(result.toFixed(3) == 0.340);
    });
    it('should calculate angular velocity', function() {
        let result = AngularMomentum.angularMomentumCalculate('0.5', '', '22');
        assert(result.toFixed(3) == 44);
    });
    it('should calculate angular momentum', function() {
        let result = AngularMomentum.angularMomentumCalculate('0.5', '27', '');
        assert(result.toFixed(3) == 13.5);
    });
});


describe('#momentCalculate()', function() {
    it('should calculate Particle values', function() {
        // m=5, r=2, I=20
        let mass = AngularMomentum.momentCalculate('particle', '', '2', '20');
        let RL = AngularMomentum.momentCalculate('particle', '5', '', '20');
        let moment = AngularMomentum.momentCalculate('particle', '5', '2', '');

        assert(mass == 5);
        assert(RL == 2);
        assert(moment == 20);
    });
    it('should calculate Solid Sphere values', function() {
        // m=2, r=5, I=20
        let mass = AngularMomentum.momentCalculate('solidSphere', '', '5', '20');
        let RL = AngularMomentum.momentCalculate('solidSphere', '2', '', '20');
        let moment = AngularMomentum.momentCalculate('solidSphere', '2', '5', '');

        assert(mass == 2);
        assert(RL == 5);
        assert(moment == 20);
    });
    it('should calculate Hollow Sphere values', function() {
        // m=3, r=10, I=200
        let mass = AngularMomentum.momentCalculate('hollowSphere', '', '10', '200');
        let RL = AngularMomentum.momentCalculate('hollowSphere', '3', '', '200');
        let moment = AngularMomentum.momentCalculate('hollowSphere', '3', '10', '');

        assert(mass == 3);
        assert(RL == 10);
        assert(moment == 200);
    });
    it('should calculate Solid Cylinder values', function() {
        // m=1,r=10,I=50
        let mass = AngularMomentum.momentCalculate('solidCylinder', '', '10', '50');
        let RL = AngularMomentum.momentCalculate('solidCylinder', '1', '', '50');
        let moment = AngularMomentum.momentCalculate('solidCylinder', '1', '10', '');

        assert(mass == 1);
        assert(RL == 10);
        assert(moment == 50);
    });
    it('should calculate Hollow Cylinder and Ring values', function() {
        // m=12,r=3,I=108
        let mass = AngularMomentum.momentCalculate('hollowCylinder', '', '3', '108');
        let RL = AngularMomentum.momentCalculate('hollowCylinder', '12', '', '108');
        let moment = AngularMomentum.momentCalculate('hollowCylinder', '12', '3', '');

        assert(mass == 12);
        assert(RL == 3);
        assert(moment == 108);
    });
    it('should calculate Rod (Center) values', function() {
        // m=2,r=12,I=24
        let mass = AngularMomentum.momentCalculate('rodCenter', '', '12', '24');
        let RL = AngularMomentum.momentCalculate('rodCenter', '2', '', '24');
        let moment = AngularMomentum.momentCalculate('rodCenter', '2', '12', '');

        assert(mass == 2);
        assert(RL == 12);
        assert(moment == 24);
    });
    it('should calculate Rod (End) values', function() {
        // m=16,r=3,I=48
        let mass = AngularMomentum.momentCalculate('rodEnd', '', '3', '48');
        let RL = AngularMomentum.momentCalculate('rodEnd', '16', '', '48');
        let moment = AngularMomentum.momentCalculate('rodEnd', '16', '3', '');

        assert(mass == 16);
        assert(RL == 3);
        assert(moment == 48);
    });
});


describe('#torqueCalculate()', function() {
    it('should calculate radius (magnitude)', function() {
        let result = AngularMomentum.torqueCalculate();
    });
});
