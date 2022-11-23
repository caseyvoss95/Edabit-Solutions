// dependencies
const chai = require('chai');
const assert = chai.assert;
const binary = require('../binary')

//binary(decimbal) tests
describe('binary function', ()=> {
    it('returns expected value for edge-cases', (done) => {
        assert.equal(binary(0), '0');
        assert.equal(binary(1), '1');
        assert.equal(binary(2), '10');
        assert.equal(binary(-1), false);
        assert.equal(binary('foo'), false);
        assert.equal(binary({}), false);
        assert.equal(binary({'foo': 'bar'}), false);
        assert.equal(binary([]), false);
        assert.equal(binary([17, 48]), false);
        assert.equal(binary(new Date()), false);
        done();
    });
    it('returns expected value for a sequence of ascending integers', (done) => {
        assert.equal(binary(57), '111001');
        assert.equal(binary(58), '111010');
        assert.equal(binary(59), '111011');
        assert.equal(binary(60), '111100');
        assert.equal(binary(61), '111101');
        assert.equal(binary(62), '111110');
        assert.equal(binary(63), '111111');
        assert.equal(binary(64), '1000000');
        assert.equal(binary(65), '1000001');
        done();
    });
    it('returns expected value for larger numbers', (done) => {
        assert.equal(binary(512), '1000000000');
        assert.equal(binary(1024), '10000000000');
        assert.equal(binary(1025), '10000000001');
        assert.equal(binary(3010), '101111000010');
        assert.equal(binary(337796), '1010010011110000100');
        done();
    });
})