import { sum } from './index.js';

describe("tests", () => {
    it('adds 1 + 2 to equal 3', () => {
        const res = sum(1, 2);
        expect(res).toBe(3);
    }),
    it('adds 1 + 0 to equal 1', () => {
        const res = sum(1, 0);
        expect(res).toBe(1);
    });
});