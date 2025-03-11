import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Characters from '../Characters';
import { useCharactersRepository } from '@/hooks';
import { charactersListMock } from '@/tests/mocks';
import { MemoryRouter } from 'react-router-dom';

vi.mock('@/hooks', () => ({
  useCharactersRepository: vi.fn(),
}));

const queryClient = new QueryClient();

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <MemoryRouter>{children}</MemoryRouter>{' '}
    {/* Wrap the component in MemoryRouter */}
  </QueryClientProvider>
);

describe('Characters', () => {
  it('should display loading spinner when fetching data', async () => {
    useCharactersRepository.mockReturnValue({
      data: null,
      isSuccess: false,
      isFetching: true,
    });

    render(<Characters />, { wrapper });

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should display character gallery when data is successfully fetched', async () => {
    useCharactersRepository.mockReturnValue({
      data: charactersListMock.data,
      isSuccess: true,
      isFetching: false,
    });

    render(<Characters />, { wrapper });

    await waitFor(() => screen.getByTestId('character-gallery'));

    expect(screen.getByTestId('character-gallery')).toBeInTheDocument();
    expect(
      screen.getByText(charactersListMock.data.results[0].name)
    ).toBeInTheDocument();
  });

  it('should update search query when search input is changed', async () => {
    useCharactersRepository.mockReturnValue({
      data: charactersListMock.data,
      isSuccess: true,
      isFetching: false,
    });

    render(<Characters />, { wrapper });

    const searchInput = screen.getByPlaceholderText(
      'Search a character...'
    ) as HTMLInputElement;

    fireEvent.change(searchInput, { target: { value: 'Spider' } });

    expect(searchInput.value).toBe('Spider');

    await waitFor(() => {
      expect(screen.getByTestId('character-gallery')).toBeInTheDocument();
    });
  });
});
