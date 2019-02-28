const addFunction = require('./addNumbers');

test('adds 2, 4 results in 6', () => {
	expect(addFunction(2, 4)).toBe(6);
});
