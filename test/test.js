import * as assert from 'assert';
import {power, sqrt, square} from '../js/operations.js'
// BDD
describe("Testing the Calculatrice scientists Functions", function() {
    it('The square of a number', function () {
        assert.equal(square(2), 4)
        assert.equal(square(4), 16)
        assert.equal(square(2), 4)
    });

    it('The power of two numbers', function () {
        assert.equal(power(2, 4), 16)
        assert.equal(power(2.2, 9), 1207.269217792001)
        assert.equal(power(2, 0), 1)
        assert.equal(power(0, 1), 0)
    });

    it('The sqrt of a number', function () {
        assert.equal(sqrt(16), 4)
        assert.equal(sqrt(4), 2)
        assert.equal(sqrt(9), 3)
        assert.equal(sqrt(33), 5.7445626465380286598506114682189)
    });
});