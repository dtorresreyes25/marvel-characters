import { create } from 'zustand';
import { Character } from '@/domain/model';

interface CharacterState {
  favorites: Map<number, Character>;
  toggleFavorite: (character: Character) => void;
  isFavorite: (id: number) => boolean;
}

export const useCharacterFavoritesStore = create<CharacterState>(
  (set, get) => ({
    favorites: new Map(),

    toggleFavorite: (character) =>
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

    isFavorite: (id) => get().favorites.has(id),
  })
);
