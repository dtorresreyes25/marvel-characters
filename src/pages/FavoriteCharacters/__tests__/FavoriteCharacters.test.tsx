import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';
import FavoriteCharacters from '../FavoriteCharacters';
import { useFavoriteCharactersStore } from '@/store/useFavoriteCharactersStore';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';

vi.mock('@/store/useFavoriteCharactersStore', () => ({
  useFavoriteCharactersStore: vi.fn(),
}));

const queryClient = new QueryClient();

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <MemoryRouter>{children}</MemoryRouter>
  </QueryClientProvider>
);

const mockFavorites = new Map([
  [
    '1',
    {
      id: '1',
      name: 'Spider-Man',
      thumbnail: {
        path: 'https://i.annihil.us/u/prod/marvel/i/mg/c/50/64e3c09ade63c',
        extension: 'jpg',
      },
    },
  ],
  [
    '2',
    {
      id: '2',
      name: 'Iron Man',
      thumbnail: {
        path: 'https://i.annihil.us/u/prod/marvel/i/mg/c/50/64e3c09ade63c',
        extension: 'jpg',
      },
    },
  ],
]);

describe('FavoriteCharacters', () => {
  it('should display CharacterGallery when there are favorite characters', async () => {
    useFavoriteCharactersStore.mockReturnValue({
      searchFavorites: vi.fn().mockReturnValue([]),
      favorites: mockFavorites,
      isCharacterFavorite: vi.fn().mockReturnValue(true),
    });

    render(<FavoriteCharacters />, { wrapper });

    expect(screen.getByText('Spider-Man')).toBeInTheDocument();
    expect(screen.getByText('Iron Man')).toBeInTheDocument();
  });

  it('should update the search and display characters based on the search query', async () => {
    useFavoriteCharactersStore.mockReturnValue({
      searchFavorites: vi.fn((searchTerm) => {
        return Array.from(mockFavorites.values()).filter((character) =>
          character.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }),
      favorites: mockFavorites,
      isCharacterFavorite: vi.fn().mockReturnValue(true),
    });

    render(<FavoriteCharacters />, { wrapper });

    const searchInput = screen.getByPlaceholderText(
      'Search a character...'
    ) as HTMLInputElement;

    fireEvent.change(searchInput, { target: { value: 'Iron' } });

    await waitFor(() => {
      expect(screen.getByText('Iron Man')).toBeInTheDocument();
      expect(screen.queryByText('Spider-Man')).not.toBeInTheDocument();
    });
  });

  it('should render the correct count of characters based on search', async () => {
    useFavoriteCharactersStore.mockReturnValue({
      searchFavorites: vi.fn().mockReturnValue(mockFavorites),
      favorites: mockFavorites,
      isCharacterFavorite: vi.fn().mockReturnValue(true),
    });

    render(<FavoriteCharacters />, { wrapper });

    const searchInput = screen.getByPlaceholderText(
      'Search a character...'
    ) as HTMLInputElement;

    fireEvent.change(searchInput, { target: { value: 'Iron' } });

    await waitFor(() => {
      expect(screen.getByText('Iron Man')).toBeInTheDocument();
    });
  });
});
