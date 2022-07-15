// These tests will be skipped. To use them, remove the ".skip" annotation!
// ========================================================================

const { test, expect } = require('@playwright/test');

test.describe.skip('block with a tag @regression', () => {

    test('example tag test one @firstTag @secondTag', () => {
        expect(true).toBe(true);
    });

    test('example tag test two @firstTag', () => {
        expect(true).toBe(true);
    });

});