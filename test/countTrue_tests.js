// dependencies
const chai = require('chai');
const assert = chai.assert;
const countTrue = require('../countTrue')

describe('countTrue function', () => {
    it('returns expected output with arrays of all datatypes', (done) => {
        assert.equal(countTrue([2, 0]), 1);
    done();
    })
    
})