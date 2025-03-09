import { create } from 'zustand';
import { Character } from '@/domain/model';

interface CharacterState {
  favorites: Map<number, Character>;
  toggleCharacterFavorite: (character: Character) => void;
  isCharacterFavorite: (id: number) => boolean;
}

export const useCharacterFavoritesStore = create<CharacterState>(
  (set, get) => ({
    favorites: new Map(),
    toggleCharacterFavorite: (character) =>
      set((state) => {
        const favorites = new Map(state.favorites);
        const isFavorite = favorites.has(character.id);

        if (isFavorite) {
          favorites.delete(character.id);
        } else {
          favorites.set(character.id, character);
        }
        return { favorites };
      }),
    isCharacterFavorite: (id) => get().favorites.has(id),
  })
);
