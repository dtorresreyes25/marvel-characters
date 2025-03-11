import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import CharacterProfile from '../CharacterProfile';
import { useFavoriteCharactersStore } from '@/store/useFavoriteCharactersStore';
import { Character } from '@/types';
import '@testing-library/jest-dom';

vi.mock('@/store/useFavoriteCharactersStore', () => ({
  useFavoriteCharactersStore: vi.fn(),
}));

const mockCharacter = {
  id: 1,
  name: 'Iron Man',
  description: 'A genius billionaire in a powered suit.',
  thumbnail: { path: 'https://example.com/ironman', extension: 'jpg' },
} as Character;

describe('CharacterProfile', () => {
  it('renders character details correctly', () => {
    useFavoriteCharactersStore.mockReturnValue({
      isCharacterFavorite: () => false,
      toggleCharacterFavorite: vi.fn(),
    });

    render(<CharacterProfile character={mockCharacter} />);

    expect(screen.getByText('Iron Man')).toBeInTheDocument();
    expect(
      screen.getByText('A genius billionaire in a powered suit.')
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: '$ Thumbnail for character Iron Man' })
    ).toHaveAttribute('src', 'https://example.com/ironman.jpg');
  });

  it('toggles favorite status on button click', () => {
    const toggleCharacterFavorite = vi.fn();
    useFavoriteCharactersStore.mockReturnValue({
      isCharacterFavorite: () => false,
      toggleCharacterFavorite,
    });

    render(<CharacterProfile character={mockCharacter} />);

    const favoriteButton = screen.getByRole('button');
    fireEvent.click(favoriteButton);

    expect(toggleCharacterFavorite).toHaveBeenCalledWith(mockCharacter);
  });

  it('shows filled heart icon when character is favorite', () => {
    useFavoriteCharactersStore.mockReturnValue({
      isCharacterFavorite: () => true,
      toggleCharacterFavorite: vi.fn(),
    });

    render(<CharacterProfile character={mockCharacter} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
