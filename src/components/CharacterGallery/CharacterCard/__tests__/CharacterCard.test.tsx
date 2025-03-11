import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import CharacterCard from '../CharacterCard';
import { useFavoriteCharactersStore } from '@/store/useFavoriteCharactersStore';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Character } from '@/types';

vi.mock('@/store/useFavoriteCharactersStore', () => ({
  useFavoriteCharactersStore: vi.fn(),
}));

const mockCharacter = {
  id: 1,
  name: 'Spider-Man',
  thumbnail: { path: 'https://example.com/spiderman', extension: 'jpg' },
} as Character;

describe('CharacterCard', () => {
  it('renders character details correctly', () => {
    useFavoriteCharactersStore.mockReturnValue({
      isCharacterFavorite: () => false,
      toggleCharacterFavorite: vi.fn(),
    });

    render(
      <BrowserRouter>
        <CharacterCard character={mockCharacter} />
      </BrowserRouter>
    );

    expect(screen.getByText('Spider-Man')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Spider-Man' })).toHaveAttribute(
      'src',
      'https://example.com/spiderman.jpg'
    );
  });

  it('toggles favorite status on button click', () => {
    const toggleCharacterFavorite = vi.fn();
    useFavoriteCharactersStore.mockReturnValue({
      isCharacterFavorite: () => false,
      toggleCharacterFavorite,
    });

    render(
      <BrowserRouter>
        <CharacterCard character={mockCharacter} />
      </BrowserRouter>
    );

    const favoriteButton = screen.getByRole('button', {
      name: 'Add Spider-Man to favorites',
    });
    fireEvent.click(favoriteButton);

    expect(toggleCharacterFavorite).toHaveBeenCalledWith(mockCharacter);
  });

  it('shows filled heart icon when character is favorite', () => {
    useFavoriteCharactersStore.mockReturnValue({
      isCharacterFavorite: () => true,
      toggleCharacterFavorite: vi.fn(),
    });

    render(
      <BrowserRouter>
        <CharacterCard character={mockCharacter} />
      </BrowserRouter>
    );

    expect(
      screen.getByRole('button', { name: 'Remove Spider-Man from favorites' })
    ).toBeInTheDocument();
  });
});
