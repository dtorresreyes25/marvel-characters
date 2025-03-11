import { screen, fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import ButtonWithIcon, { ButtonWithIconProps } from '../ButtonWithIcon';

const MockIcon: ButtonWithIconProps['icon'] = (props) => (
  <svg data-testid="mock-icon" {...props}></svg>
);

describe('ButtonWithIcon', () => {
  it('renders the button with the provided icon', () => {
    render(<ButtonWithIcon icon={MockIcon} onClick={vi.fn()} size="md" />);

    expect(screen.getByTestId('mock-icon')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<ButtonWithIcon icon={MockIcon} onClick={handleClick} size="md" />);

    fireEvent.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledOnce();
  });

  it('prevents default when clicked', () => {
    const handleClick = vi.fn((e) => e.preventDefault());
    render(<ButtonWithIcon icon={MockIcon} onClick={handleClick} size="md" />);

    const button = screen.getByRole('button');
    const event = new MouseEvent('click', { bubbles: true, cancelable: true });

    fireEvent(button, event);
    expect(event.defaultPrevented).toBe(true);
  });

  it.each(['sm', 'md', 'xl'] as const)(
    'applies the correct size variable for %s',
    (size) => {
      render(<ButtonWithIcon icon={MockIcon} onClick={vi.fn()} size={size} />);

      const icon = screen.getByTestId('mock-icon');
      const computedStyle = window.getComputedStyle(icon);

      expect(computedStyle.width).toBe(`var(--mvl-icon-size-${size})`);
    }
  );
});
