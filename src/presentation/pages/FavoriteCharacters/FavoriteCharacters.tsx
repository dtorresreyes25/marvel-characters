import { FC, useCallback, useState } from 'react';
import { Container, Header, SearchBar } from './FavoriteCharacters.styles';
import CharacterGallery from '@/presentation/components/CharacterGallery';
import { useFavoriteCharactersStore } from '@/application/store/useFavoriteCharactersStore.ts';

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
