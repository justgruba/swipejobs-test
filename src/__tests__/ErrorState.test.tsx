import React from 'react';
import { render, userEvent } from '@testing-library/react-native';
import { ErrorState } from '../components/ErrorState';

describe('<ErrorState />', () => {
  it('renders the default error message', () => {
    const { getByText } = render(<ErrorState onRetry={jest.fn()} />);

    getByText('Something went wrong.');
  });

  it('renders the custom error message when provided', () => {
    const { getByText } = render(<ErrorState message="Custom error message." onRetry={jest.fn()} />);

    getByText('Custom error message.');
  });

  it('calls onRetry when "Try again" is pressed', async  () => {
    const user = userEvent.setup()
    const mockRetry = jest.fn();
    const { getByText } = render(<ErrorState onRetry={mockRetry} />);

    await user.press(getByText('Try again'));

    expect(mockRetry).toHaveBeenCalledTimes(1);
  });
});
