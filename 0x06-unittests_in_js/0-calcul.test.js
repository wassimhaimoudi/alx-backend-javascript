const assert = require('assert');
const calculateNumber = require('./0-calcul.js')

describe('calculateNumber', function() {
	it('should return the sum of the rounded a and b', function () {
		assert.strictEqual(calculateNumber(1.2, 3.2), 4);
	});

	it('some edge case', function () {
		assert.strictEqual(calculateNumber(-5.5, 1.3), -4);
	});
});
