// BDD
import {add, substract, multiply, divide} from '../js/operations.js'
import * as assert from 'assert';

describe("Addition", function() {
    it('add a negative integer to a positive floating', function () {
        assert.equal(add(-1,1.0000), 0)
    });
    it('add a floating point number to an integer', function () {
        assert.equal(add(10.1,2), 12.1)
    });
    it('add an integer to a floating point number', function () {
        assert.equal(add(10,9.9999), 19.9999)
    });
    it('add two floating point numbers', function () {
        assert.equal(add(34.999,1.0), 35.999)
    });
    it('add a negative integer and zero', function () {
        assert.equal(add(-5,0 ), -5)
    });
});

describe("Substraction", function() {
    it('subtract a floating point number from a negativ', function () {
        assert.equal(substract(-1,2.25), -3.25)
    });
    it('subtract an integer from a floating point number', function () {
        assert.equal(substract(9.35,1), 8.35)
    });
    it('subtract a floating point number from an integer', function () {
        assert.equal(substract(9,1.35), 7.65)
    });
    it('subtract two floating point numbers', function () {
        assert.equal(substract(0.29,1.35), -1.06)
    });
    it('subtract two max-input floating point numbers', function () {
        assert.equal(substract(7.1234567,2.2109876 ), 4.9124691)
    });
});

describe("Multiplication", function() {
    it('multiply two positive integers', function () {
        assert.equal(multiply(1500,2000), 3000000)
    });
    it('multiply a floating point multiplicand with an integer multipliplier', function () {
        assert.equal(multiply(1.212,8), 9.696)
    });
    it('multiply an integer multiplicand with a floating', function () {
        assert.equal(multiply(3,1.212), 3.636)
    });
    it('multiply two floating point numbers', function () {
        assert.equal(multiply(0.133,1.212), 0.161196)
    });
    it('multiply a integer multiplicand with zero', function () {
        assert.equal(multiply(1500,0), 0)
    });
});

describe("Division", function() {
    it('divide two positive integers', function () {
        assert.equal(divide(1500,2000), 0.75)
    });
    it('divide 0 by a integer divisor', function () {
        assert.equal(divide(0,2000), 0)
    });
    it('divide a negative dividend by a positive divisor', function () {
        assert.equal(divide(-1500,2000), -0.75)
    });
    it('divide a negative floating point dividend by a positive divisor', function () {
        assert.equal(divide(-3.123,5), -0.6246)
    });
    it('divide a negative integer dividend by a positive floating point divisor', function () {
        assert.equal(divide(-5,3.123 ), -1.601024655779699)
    });
});