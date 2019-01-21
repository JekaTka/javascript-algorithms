import sort from '../BubbleSort';

describe('BubbleSort', () => {
    it('should sort array', () => {
        expect(sort([10, 2, 5, 4, 12, 8])).toEqual([2, 4, 5, 8, 10, 12]);
        expect(sort([1])).toEqual([1]);
    });
});