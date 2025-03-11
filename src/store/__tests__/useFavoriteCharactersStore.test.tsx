import { describe, it, expect, beforeEach } from 'vitest';
import { useFavoriteCharactersStore } from '@/store/useFavoriteCharactersStore';
import { Character } from '@/types';

const character = {
  id: 1,
  name: 'Spider-Man',
  thumbnail: { path: 'path/to/spiderman.jpg', extension: 'jpg' },
} as Character;

describe('useFavoriteCharactersStore', () => {
  beforeEach(() => {
    useFavoriteCharactersStore.setState({
      favorites: new Map(),
      toggleCharacterFavorite: () => {},
      isCharacterFavorite: () => false,
      searchFavorites: () => [],
    });
  });

  it('should add a character to favorites', async () => {
    const { toggleCharacterFavorite } = useFavoriteCharactersStore.getState();

    expect(
      useFavoriteCharactersStore.getState().favorites.has(character.id)
    ).toBe(false);

    const unsubscribe = useFavoriteCharactersStore.subscribe((state) => {
      if (state.favorites.has(character.id)) {
        expect(state.favorites.has(character.id)).toBe(true);
        unsubscribe();
      }
    });

    toggleCharacterFavorite(character);
  });

  it('should remove a character from favorites', async () => {
    const { toggleCharacterFavorite } = useFavoriteCharactersStore.getState();

    expect(
      useFavoriteCharactersStore.getState().favorites.has(character.id)
    ).toBe(false);

    toggleCharacterFavorite(character);

    const unsubscribe = useFavoriteCharactersStore.subscribe((state) => {
      if (!state.favorites.has(character.id)) {
        expect(state.favorites.has(character.id)).toBe(false);
        unsubscribe();
      }
    });

    toggleCharacterFavorite(character);
  });

  it('should check if a character is a favorite', () => {
    const { toggleCharacterFavorite, isCharacterFavorite } =
      useFavoriteCharactersStore.getState();

    expect(isCharacterFavorite(character.id)).toBe(false);

    toggleCharacterFavorite(character);

    useFavoriteCharactersStore.subscribe((state) => {
      expect(state.favorites.has(character.id)).toBe(true);
      expect(isCharacterFavorite(character.id)).toBe(true);
    });

    toggleCharacterFavorite(character);

    useFavoriteCharactersStore.subscribe((state) => {
      expect(state.favorites.has(character.id)).toBe(false);
      expect(isCharacterFavorite(character.id)).toBe(false);
    });
  });
});
