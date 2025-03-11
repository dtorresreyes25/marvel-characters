import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SearchFilter from '../SearchFilter';
import '@testing-library/jest-dom';

vi.mock('@/hooks/useDebouncedValue', () => ({
  useDebouncedValue: (value: string) => value,
}));

describe('SearchFilter', () => {
  it('renders input and search icon', () => {
    render(<SearchFilter onSearchChange={vi.fn()} />);

    expect(
      screen.getByPlaceholderText('Search a character...')
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText('Search Marvel characters')
    ).toBeInTheDocument();
  });

  it('calls onSearchChange when input value changes', () => {
    const onSearchChange = vi.fn();
    render(<SearchFilter onSearchChange={onSearchChange} />);

    const input = screen.getByPlaceholderText('Search a character...');
    fireEvent.change(input, { target: { value: 'Spider-Man' } });

    expect(onSearchChange).toHaveBeenCalledWith('Spider-Man');
  });

  it('displays the correct results count', () => {
    render(<SearchFilter onSearchChange={vi.fn()} count={5} />);
    expect(screen.getByText('5 RESULTS')).toBeInTheDocument();
  });

  it('does not display results count when count is undefined', () => {
    render(<SearchFilter onSearchChange={vi.fn()} />);
    expect(screen.queryByText(/RESULTS/)).not.toBeInTheDocument();
  });
});
