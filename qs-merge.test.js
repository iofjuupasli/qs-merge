/**
 * @jest-environment node
 */
const qsMerge = require(`./`);

describe(`qs-merge package`, () => {
    it(`should merge two objects`, () => {
        expect(qsMerge({a: `aa`})({b: `bb`})).toEqual(`b=bb&a=aa`);
    });
    it(`should merge object and string`, () => {
        expect(qsMerge({a: `aa`})(`b=bb`)).toEqual(`b=bb&a=aa`);
    });
    it(`should merge string and object`, () => {
        expect(qsMerge(`a=aa`)({b: `bb`})).toEqual(`b=bb&a=aa`);
    });
    it(`should merge two strings`, () => {
        expect(qsMerge(`a=aa`)(`b=bb`)).toEqual(`b=bb&a=aa`);
    });
    it(`should prefer values from first argument`, () => {
        expect(qsMerge(`a=x`)(`a=y`)).toEqual(`a=x`);
    });
    it(`should handle null`, () => {
        expect(qsMerge(null)(null)).toEqual(``);
    });
    it(`should handle undefined`, () => {
        expect(qsMerge(undefined)(undefined)).toEqual(``);
    });
});
