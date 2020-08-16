var assert = require('chai').assert;
var Vector = require('../../PhysicsSite/Scripts/Vector');


describe('#parseVector()', function() {
    it('should handle null String', function() {
        let result = Vector.parseVector();
        assert(!result);
    });
    it('should handle empty String', function() {
        let result = Vector.parseVector('');
        assert(!result);
    });
    it('should handle number', function() {
        let result = Vector.parseVector(123);
        assert(!result);
    });
    it('should handle non-vector String', function() {
        let result = Vector.parseVector('123');
        assert(!result);
    });
    it('should handle improper arguments', function() {
        let v0 = Vector.parseVector(',1,2');
        assert(v0.x == 0);
        assert(v0.y == 1);
        assert(v0.z == 2);
        let v1 = Vector.parseVector('1,,2');
        assert(v1.x == 1);
        assert(v1.y == 0);
        assert(v1.z == 2);
        let v2 = Vector.parseVector('1,2,');
        assert(v2.x == 1);
        assert(v2.y == 2);
        assert(v2.z == 0);
    });
    it('should parse vector String with spaces', function() {
        let result = Vector.parseVector('3, 2, 1');
        assert(result.x == 3);
        assert(result.y == 2);
        assert(result.z == 1);
    });
    it('should parse vector String without spaces', function() {
        let result = Vector.parseVector('1,2,3');
        assert(result.x == 1);
        assert(result.y == 2);
        assert(result.z == 3);
    });
});


describe('#toStringVector()', function() {
    it('should handle null input', function() {
        let result = Vector.toStringVector();
        assert(result == '');
    });
    it('should convert Vector to String', function() {
        let v = Vector.createVector(1, 2, 3);
        let result = Vector.toStringVector(v);
        assert(result == '1.000, 2.000, 3.000');
    });
});


describe('#addVector()', function() {
    it('should handle null inputs', function() {
        let v1 = Vector.parseVector('1,2,3');
        let result1 = Vector.addVector(v1, null);
        assert(result1.x == 1);
        assert(result1.y == 2);
        assert(result1.z == 3);
        let result2 = Vector.addVector(null, v1);
        assert(result2.x == 1);
        assert(result2.y == 2);
        assert(result2.z == 3);
        let result3 = Vector.addVector(null, null);
        assert(!result3);
    });
    it('should add two Vectors', function() {
        let v1 = Vector.parseVector('1,2,3');
        let v2 = Vector.parseVector('0.234, 1.123, 5.05');
        let result = Vector.addVector(v1, v2);
        assert(result.x == 1.234);
        assert(result.y == 3.123);
        assert(result.z == 8.05);
    });
});


describe('#subtractVector', function() {
    it('should handle null inputs', function() {
        let v1 = Vector.parseVector('1,2,3');
        let result1 = Vector.subtractVector(v1, null);
        assert(result1.x == 1);
        assert(result1.y == 2);
        assert(result1.z == 3);
        let result2 = Vector.addVector(null, v1);
        assert(result2.x == 1);
        assert(result2.y == 2);
        assert(result2.z == 3);
        let result3 = Vector.addVector(null, null);
        assert(!result3);
    });
    it('should add two Vectors', function() {
        let v1 = Vector.parseVector('1.234,3.123,8.05');
        let v2 = Vector.parseVector('0.234, 1.123, 5.05');
        let result = Vector.subtractVector(v1, v2);
        assert(result.x.toFixed(3) == 1.000);
        assert(result.y.toFixed(3) == 2.000);
        assert(result.z.toFixed(3) == 3.000);
    });
});


describe('#multiplyVector()', function() {
    it('should handle null inputs', function() {
        let v1 = Vector.parseVector('1,2,3');
        let result1 = Vector.multiplyVector(v1, null);
        assert(result1.x == 1);
        assert(result1.y == 2);
        assert(result1.z == 3);
        let result2 = Vector.multiplyVector(null, v1);
        assert(!result2);
        let result3 = Vector.multiplyVector(null, null);
        assert(!result3);
    });
    it('should multiply a Vector', function() {
        let v1 = Vector.parseVector('1.5,3.2,8.6');
        let result = Vector.multiplyVector(v1, 2);
        assert(result.x.toFixed(3) == 3.000);
        assert(result.y.toFixed(3) == 6.400);
        assert(result.z.toFixed(3) == 17.200);
    });
});


describe('#getMagnitude()', function() {
    it('should handle null inputs', function() {
        let result = Vector.getMagnitude(null);
        assert(!result);
    });
    it('should get Vector magnitude', function() {
        let v1 = Vector.parseVector('1,2,3');
        let result = Vector.getMagnitude(v1);
        assert(result = Math.sqrt(6));
    });
});


describe('#getUnitVector()', function() {
    it('should handle null input', function() {
        let result = Vector.getUnitVector(null);
        assert(!result);
    });
    it('should get unit Vector', function() {
        let v1 = Vector.parseVector('1, 2, 2');
        let result = Vector.getUnitVector(v1);
        assert(result.x == 1/3);
        assert(result.y == 2/3);
        assert(result.z == 2/3);
    });
});


describe('#dotProduct()', function() {
    it('should handle null input', function() {
        let v1 = Vector.parseVector('1,2,3');
        let result1 = Vector.dotProduct(v1, null);
        let result2 = Vector.dotProduct(null, v1);
        let result3 = Vector.dotProduct(null, null);
        assert(result1 == 0 && result2 == 0 && result3 == 0);
    });
    it('should compute Vector dot product', function() {
        let v1 = Vector.parseVector('1,2,3');
        let v2 = Vector.parseVector('3, 3,3');
        let result = Vector.dotProduct(v1, v2);
        assert(result == 18);
    });
});


describe('#crossProduct()', function() {
    it('should handle null input', function() {
        let v1 = Vector.parseVector('1,2,3');
        let result1 = Vector.crossProduct(v1, null);
        let result2 = Vector.crossProduct(null, v1);
        let result3 = Vector.crossProduct(null, null);
        assert(!result1 && !result2 && !result3);
    });
    it('should computer Vector cross product', function() {
        let v1 = Vector.parseVector('1,3,4');
        let v2 = Vector.parseVector('2,7,-5');
        let result = Vector.crossProduct(v1, v2);
        assert(result.x == -43);
        assert(result.y == 13);
        assert(result.z == 1);
    });
});
