const chai = require('chai');
const binary = require('../script')
const assert = chai.assert;

describe('binary function', ()=> {
    it('works for edge-cases', (done) => {
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
    it('works for large numbers', (done) => {
        assert.equal(binary(1024), '10000000000');
        done();
    })
})