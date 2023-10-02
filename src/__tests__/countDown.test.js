import { countDown } from "../countDown.js";

describe('srfhgyh', () => {
    it('should operate correctly with numbers from 1 to 50', () => {
        expect(countDown(3)).toBe(' 3 2 1');
    });
    it('should operate correctly with non-integer values', () => {
        expect(countDown('H')).toBe(`The entered value isn't an integer`);
        expect(countDown(true)).toBe(`The entered value isn't an integer`);
        expect(countDown()).toBe(`The entered value isn't an integer`);
    });

    it('should operate correctly with numbers less than 1 and more than 100', () => {
        expect(countDown(-6)).toBe(`The entered value isn't positive`);
        expect(countDown(500)).toBe(`The entered value is very large`);
    });
});