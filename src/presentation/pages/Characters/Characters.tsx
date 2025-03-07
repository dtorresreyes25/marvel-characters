import { FC, useCallback, useState } from 'react';
import CharacterGallery from '@/presentation/components/CharacterGallery';
import { useCharactersRepository } from '@/infraestructure/repositories';
import LoadingSpinner from '@/presentation/components/LoadingSpinner';
import { Container, SearchBar } from './Characters.styles';

const PAGE_SIZE = 50;

const Characters: FC = () => {
  const [search, setSearch] = useState<string>('');

  const {
    data: characters,
    isSuccess,
    isFetching,
  } = useCharactersRepository({
    nameStartsWith: search || null,
    limit: PAGE_SIZE,
  });

  const handleOnSearchChange = useCallback((value: string) => {
    setSearch(value);
  }, []);

  return (
    <Container>
      <SearchBar
        onSearchChange={handleOnSearchChange}
        count={characters?.count}
      />
      {isFetching && <LoadingSpinner />}
      {isSuccess && !isFetching && characters?.results && (
        <CharacterGallery characters={characters.results} />
      )}
    </Container>
  );
};

export default Characters;
