import { act, render, screen, waitFor } from '@testing-library/react';
import { useDebouncedValue } from '../useDebouncedValue';
import { expect, it, describe } from 'vitest';

const TestComponent = ({ value, delay }: { value: string; delay: number }) => {
  const debouncedValue = useDebouncedValue(value, delay);
  return <div>{debouncedValue}</div>;
};

describe('useDebouncedValue', () => {
  it('should return the debounced value after the specified delay', async () => {
    render(<TestComponent value="initial" delay={500} />);

    expect(screen.getByText('initial')).toBeInTheDocument();

    act(() => {
      render(<TestComponent value="updated" delay={500} />);
    });

    expect(screen.getByText('initial')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('updated')).toBeInTheDocument();
    });
  });

  it('should clear the timeout when value changes before the debounce delay', async () => {
    render(<TestComponent value="initial" delay={500} />);

    expect(screen.getByText('initial')).toBeInTheDocument();

    act(() => {
      render(<TestComponent value="firstUpdate" delay={500} />);
    });

    act(() => {
      render(<TestComponent value="secondUpdate" delay={500} />);
    });

    await waitFor(() => {
      expect(screen.getByText('secondUpdate')).toBeInTheDocument();
    });
  });

  it('should handle no delay correctly', async () => {
    render(<TestComponent value="initial" delay={0} />);

    expect(screen.getByText('initial')).toBeInTheDocument();

    act(() => {
      render(<TestComponent value="updated" delay={0} />);
    });

    await waitFor(() => {
      expect(screen.getByText('updated')).toBeInTheDocument();
    });
  });
});
