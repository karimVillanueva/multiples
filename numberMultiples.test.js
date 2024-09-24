const { entryIsInteger, multiples } = require('./index');

describe('entryIsInteger', () => {
  test('should return true for positive integers', () => {
    expect(entryIsInteger(1)).toBe(true);
    expect(entryIsInteger(100)).toBe(true);
  });

  test('should return false for non-integers', () => {
    expect(entryIsInteger(1.5)).toBe(false);
    expect(entryIsInteger('abc')).toBe(false);
    expect(entryIsInteger(NaN)).toBe(false);
  });

  test('should return false for negative integers', () => {
    expect(entryIsInteger(-1)).toBe(false);
  });
});

describe('multiples', () => {
  test('should return multiples of 3 up to 100', () => {
    expect(multiples(3)).toEqual([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99]);
  });

  test('should return multiples of 5 up to 100', () => {
    expect(multiples(5)).toEqual([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]);
  });

  test('should return an empty array for numbers greater than 100', () => {
    expect(multiples(101)).toEqual([]);
  });

  test('should return an empty array for 0', () => {
    expect(multiples(0)).toEqual([]);
  });
});
