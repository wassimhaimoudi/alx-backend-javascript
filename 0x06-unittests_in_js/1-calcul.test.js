const assert = require('assert');
const calculateNumber = require('./1-calcul.js');


describe('calculateNumber', function () {
	it('When type is SUM, round the two numbers, and add a and b', function () {
		assert.strictEqual(calculateNumber(1.4, 0.2, 'SUM'), 1);
	});

	it('When type is SUBTRACT, round the two numbers, and subtract b from a', function () {
		assert.strictEqual(calculateNumber(1.6, 1.2, 'SUBSTRACT'), 1);
	});

	it('When type is SUBTRACT, round the two numbers, and subtract b from a', function () {
		assert.strictEqual(calculateNumber(1.6, 0.2, 'DIVIDE'), "Error");
	});
});
