import { FC, useCallback, useState } from 'react';
import { Container, Header, SearchBar } from './FavoriteCharacters.styles.ts';
import CharacterGallery from '@/components/CharacterGallery';
import { useFavoriteCharactersStore } from '@/store/useFavoriteCharactersStore.ts';

const FavoriteCharacters: FC = () => {
  const [search, setSearch] = useState<string>('');
  const { searchFavorites, favorites } = useFavoriteCharactersStore();

  const characters = search
    ? searchFavorites(search)
    : Array.from(favorites.values());

  const handleOnSearchChange = useCallback((value: string) => {
    setSearch(value);
  }, []);

  return (
    <Container>
      <title>Marvel Characters | Favorites</title>
      <Header variant="xxl">Favorites</Header>
      <SearchBar
        onSearchChange={handleOnSearchChange}
        count={characters.length}
      />
      <CharacterGallery characters={characters} />
    </Container>
  );
};

export default FavoriteCharacters;
