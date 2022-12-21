// dependencies
const chai = require('chai');
const assert = chai.assert;
const countTrue = require('../countTrue')

describe('countTrue function', () => {
    it('returns expected output with arrays of all datatypes', (done) => {
        assert.equal(countTrue([2, 0]), 1); //numbers
        assert.equal(countTrue(['a', 'f', 'q']), 3); //"char"
        assert.equal(countTrue(['breeze', 'f@bbol', 'jSon']), 3); //strings
        assert.equal(countTrue([{}]), 1); //empty object
        assert.equal(countTrue([{key: 'value'}]), 1); //object
        assert.equal(countTrue([[], ['foo']]), 2); //array(s)
    done();
    })
})