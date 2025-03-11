import { create } from 'zustand';
import MiniSearch, { SearchResult } from 'minisearch';
import { Character } from '../types';

interface CharacterState {
  favorites: Map<number, Character>;
  toggleCharacterFavorite: (character: Character) => void;
  isCharacterFavorite: (id: number) => boolean;
  searchFavorites: (query: string) => Character[];
}

export const useFavoriteCharactersStore = create<CharacterState>((set, get) => {
  const miniSearch = new MiniSearch<Character>({
    fields: ['name'],
    storeFields: ['id', 'name'],
    searchOptions: {
      fuzzy: 0.2,
      prefix: true,
    },
    idField: 'id',
  });

  const updateMiniSearch = (): void => {
    miniSearch.removeAll();
    miniSearch.addAll(Array.from(get().favorites.values()));
  };

  const toggleCharacterFavorite = (character: Character): void => {
    set((state) => {
      const favorites = new Map(state.favorites);

      if (favorites.has(character.id)) {
        favorites.delete(character.id);
      } else {
        favorites.set(character.id, character);
      }

      updateMiniSearch();
      return { favorites };
    });
  };

  const isCharacterFavorite = (id: number): boolean => get().favorites.has(id);

  const searchFavorites = (query: string): Character[] => {
    if (!query.trim()) return Array.from(get().favorites.values());

    updateMiniSearch();
    return miniSearch
      .search(query)
      .map((res: SearchResult) => get().favorites.get(res.id)) as Character[];
  };

  return {
    favorites: new Map<number, Character>(),
    toggleCharacterFavorite,
    isCharacterFavorite,
    searchFavorites,
  };
});
