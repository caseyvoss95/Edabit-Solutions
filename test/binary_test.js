const chai = require('chai');
const binary = require('../script')
const assert = chai.assert;

describe('binary function', ()=> {
    it('works for edge-cases', (done) => {
        assert.equal(binary(0), '0');
        assert.equal(binary(1), '1');
        assert.equal(binary(2), '10');
        assert.equal(binary(3), '11');
        done();
    })
})