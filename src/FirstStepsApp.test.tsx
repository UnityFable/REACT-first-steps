import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { FirstStepsApp } from './FirstStepsApp';

const mockItemCounter = vi.fn((_props: unknown) => {
  return (<div data-testid="ItemCounter" />);
});

vi.mock('./shopping-cart/ItemCounter', () => ({
  ItemCounter: (props: unknown) => mockItemCounter(props),
}));

// vi.mock('./shopping-cart/ItemCounter', () => ({
//   ItemCounter: (props: unknown) => <div data-testid="ItemCounter" item={props.item} quantity={props.quantity} />
// }));

describe('FirstStepsApp', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test('Should match snapshot', () => {
    const { container } = render(<FirstStepsApp />);

    expect(container).toMatchSnapshot();
  });

  test('Should render the correct number of ItemCounter components', () => {
    render(<FirstStepsApp />);
    const itemCounterComponents = screen.getAllByTestId('ItemCounter');

    expect(itemCounterComponents.length).toBe(3);
  });

  test('Should render ItemCounter with correct props', () => {
    render(<FirstStepsApp />);

    expect(mockItemCounter).toHaveBeenCalledTimes(3);
    expect(mockItemCounter).toHaveBeenCalledWith({ item: 'Nintendo Switch 2', quantity: 12 });
    expect(mockItemCounter).toHaveBeenCalledWith({ item: 'Pro Controller', quantity: 5 });
    expect(mockItemCounter).toHaveBeenCalledWith({ item: 'Super Smash', quantity: 10 });
  });
});