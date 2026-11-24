const test = require('node:test');
const assert = require('node:assert');
const { menu, totalFor } = require('../menu');

test('every dish has a name and a positive price', () => {
  for (const item of menu) {
    assert.ok(item.dish.length > 0);
    assert.ok(item.price > 0);
  }
});

test('order total adds the prices', () => {
  assert.strictEqual(totalFor([1, 3]), 55);
});
