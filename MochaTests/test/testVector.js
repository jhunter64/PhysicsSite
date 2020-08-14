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
