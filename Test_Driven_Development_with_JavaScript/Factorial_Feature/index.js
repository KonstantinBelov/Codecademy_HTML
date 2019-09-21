var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
		it('Returns 120 if input is 5', () => {
      // Mocha
      // Setup
      const inputNumber = 5;
      const expectedResult = 120;
      // Exercise
      const result = Calculate.factorial(inputNumber);
      // Verify
      assert.equal(result, expectedResult);
    });
    it('Returns 24 if input is 4', () => {
      const inputNumber = 4;
      const expectedResult = 24;
      const result = Calculate.factorial(inputNumber);
      assert.equal(result, expectedResult);
    });
    it('Returns 1 if input is 0', () => {
      const inputNumber = 0;
      const expectedResult = 1;
      const result = Calculate.factorial(inputNumber);
    })
  });
});