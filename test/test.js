// TDD
describe("Testing the Calculatrice Functions", function() {
    it("correctly calculates the sum of 1 and 2", function() {
        expect(operations.add(1,2)).to.equal(3);
    });
    it("correctly calculates the sum of -1 and -1", function() {
        expect(operations.add(-1,-1)).to.equal(-2);
    });
    it("correctly calculates the difference of 33 and 3", function() {
        expect(operations.substract(33,3)).to.equal(30);
    });
    it("correctly calculates the difference of 1 and -2", function() {
        expect(operations.substract(1,-2)).to.equal(3);
    });
    it("correctly calculates the product of 12 and 12", function() {
        expect(operations.multiply(12,12)).to.equal(144);
    });
    it("correctly calculates the product of 12 and -12", function() {
        expect(operations.multiply(12,-12)).to.equal(-144);
    });
    it("correctly calculates the quotient of 10 and 2", function() {
        expect(operations.divide(10,2)).to.equal(5);
    });
    it("correctly calculates the quotient of -10 and 2", function() {
        expect(operations.divide(10,2)).to.equal(-5);
    });
    it("correctly calculates the square of 2", function() {
        expect(operations.square(2)).to.equal(4);
    });
    it("correctly calculates the square of -2", function() {
        expect(operations.square(-2)).to.equal(4);
    });
    it("correctly calculates 5 power 3", function() {
        expect(operations.power(5,3)).to.equal(125);
    });
    it("correctly calculates -3 power 3", function() {
        expect(operations.power(-3,3)).to.equal(-27);
    });
    it("correctly calculates the sqrt of 49", function() {
        expect(operations.sqrt(49)).to.equal(7);
    });
    it("correctly calculates the sqrt of -18", function() {
        expect(operations.sqrt(-18)).to.equal("undefined");
    });
});