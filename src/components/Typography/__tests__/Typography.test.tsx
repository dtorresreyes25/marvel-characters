import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Typography from '../Typography';

describe('Typography', () => {
  it('applies default variant if none is provided', () => {
    render(<Typography>Default Variant</Typography>);
    const textElement = screen.getByText('Default Variant');

    const computedStyle = window.getComputedStyle(textElement);
    expect(computedStyle.fontSize).toBe('var(--mvl-font-size-md)');
  });
});
