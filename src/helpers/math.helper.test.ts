import { describe, expect, test } from 'vitest';
import { add, divide, multiply, subtract } from './math.helper';

describe('add', () => {
  test('Should add two positive numbers', () => {
    //! 1. Arrange
    const a = 1;
    const b = 2;

    //! 2. Act
    const result = add(a, b);

    //! 3. Assert
    expect(result).toBe(a + b);
  });

  test('Should add two negative numbers', () => {
    //! 1. Arrange
    const a = -2;
    const b = -5;

    //! 2. Act
    const result = add(a, b);

    //! 3. Assert
    expect(result).toBe(a + b);
  });
});

describe('subtract', () => {
  test('Should subtract 2 positive numbers', () => {
    const a = 5;
    const b = 10;

    const result = subtract(a, b);

    expect(result).toBe(a - b);
  });

  test('Should subtract 2 negative numbers', () => {
    const a = -5;
    const b = -2;

    const result = subtract(a, b);

    expect(result).toBe(a - b);
  });
});

describe('multiply', () => {
  test('Should multiply 2 positive numbers', () => {
    const a = 12;
    const b = 2;

    const result = multiply(a, b);

    expect(result).toBe(a * b);
  });

  test('Should multiply 2 negative numbers', () => {
    const a = -6;
    const b = -5;

    const result = multiply(a, b);

    expect(result).toBe(a * b);
  });
});

describe('divide', () => {
  test('Should divide 2 positive numbers', () => {
    const a = 10;
    const b = 2;

    const result = divide(a, b);

    expect(result).toBe(a / b);
  });
});
