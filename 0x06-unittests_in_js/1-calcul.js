const calculateNumber = function (type, a, b) {
	if (type === 'SUM') return Math.round(a) + Math.round(b);
	if (type === 'SUBSTRACT') return Math.round(a) - Math.round(b);
	if (type === 'DIVIDE') {
		if (Math.round(b) === 0) return "Error";
		return Math.round(a) / Math.round(b);
	}
}
module.exports = calculateNumber;
