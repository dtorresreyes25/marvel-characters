import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';
import CharacterDetail from '../CharacterDetail';
import {
  useCharacterDetailsRepository,
  useCharacterComicsRepository,
} from '@/hooks';
import { characterComicsMock, charactersListMock } from '@/tests/mocks';

vi.mock('@/hooks', () => ({
  useCharacterDetailsRepository: vi.fn(),
  useCharacterComicsRepository: vi.fn(),
}));

const queryClient = new QueryClient();

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <MemoryRouter>{children}</MemoryRouter>
  </QueryClientProvider>
);

const characterDetailMock = charactersListMock.data.results[0];

describe('CharacterDetail', () => {
  it('should show loading spinner while data is loading', async () => {
    useCharacterDetailsRepository.mockReturnValue({
      data: null,
      isLoading: true,
    });
    useCharacterComicsRepository.mockReturnValue({ data: [], isLoading: true });

    render(<CharacterDetail />, { wrapper });

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should display character details and comics when data is successfully fetched', async () => {
    useCharacterDetailsRepository.mockReturnValue({
      data: characterDetailMock,
      isLoading: false,
    });

    useCharacterComicsRepository.mockReturnValue({
      data: characterComicsMock.data.results,
      isLoading: false,
    });

    render(<CharacterDetail />, { wrapper });

    expect(screen.getByText(characterDetailMock.name)).toBeInTheDocument();

    characterComicsMock.data.results.forEach((comic) => {
      expect(screen.getByText(comic.title)).toBeInTheDocument();
    });
  });
});
