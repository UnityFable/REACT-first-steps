import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { ItemCounter } from './ItemCounter';

describe('ItemCounter', () => {
  test('Should render with default values', () => {
    const item = 'Test Item';
    render(<ItemCounter item={item} />);

    expect(screen.getByText(item)).toBeDefined();
    expect(screen.getByText(item)).not.toBeNull();
  });

  test('Should render with custom quantity', () => {
    const item = 'Test Item';
    const quantity = 10;
    render(<ItemCounter item={item} quantity={quantity} />);

    expect(screen.getByText(quantity)).toBeDefined();
  });

  test('Should increase count when +1 button is pressed', () => {
    render(<ItemCounter item='Test Item' quantity={1} />);

    const [, buttonAdd] = screen.getAllByRole('button');

    fireEvent.click(buttonAdd);

    expect(screen.getByText('2')).toBeDefined();
  });

  test('Should decrease count when -1 button is pressed', () => {
    const quantity = 5;
    render(<ItemCounter item='Test Item' quantity={quantity} />);

    const [buttonSubtract] = screen.getAllByRole('button');

    fireEvent.click(buttonSubtract);

    expect(screen.getByText(quantity - 1)).toBeDefined();
  });

  test('Should decrease count when -1 button is pressed and quantity is 1', () => {
    render(<ItemCounter item='Test Item' quantity={1} />);

    const [buttonSubtract] = screen.getAllByRole('button');

    fireEvent.click(buttonSubtract);

    expect(screen.getByText(1)).toBeDefined();
  });

  test('should change color to red when quantity is 1', () => {
    const quantity = 1;
    const item = 'Test item';
    render(<ItemCounter item={item} quantity={quantity} />)

    const itemText = screen.getByText(item);

    expect(itemText.style.color).toBe('red');
  });

  test('should change color to black when quantity is greater than 1', () => {
    const quantity = 2;
    const item = 'Test item';
    render(<ItemCounter item={item} quantity={quantity} />)

    const itemText = screen.getByText(item);

    expect(itemText.style.color).toBe('black');
  });
});