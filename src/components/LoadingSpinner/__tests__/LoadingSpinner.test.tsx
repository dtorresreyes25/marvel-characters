import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LoadingSpinner from '../LoadingSpinner';
import '@testing-library/jest-dom';

describe('LoadingSpinner', () => {
  it('renders the spinner and loading text', () => {
    render(<LoadingSpinner />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
