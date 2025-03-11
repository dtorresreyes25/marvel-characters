import { FC, useCallback, useState } from 'react';
import CharacterGallery from '@/components/CharacterGallery';
import { useCharactersRepository } from '@/hooks';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Container, SearchBar } from './Characters.styles.ts';

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
      <title>Marvel Characters | Characters</title>
      <SearchBar
        onSearchChange={handleOnSearchChange}
        count={characters?.count}
      />
      {isFetching && <LoadingSpinner />}
      {isSuccess && !isFetching && characters?.results && (
        <div data-testid="character-gallery">
          <CharacterGallery
            characters={characters.results}
            data-testid="character-gallery"
          />
        </div>
      )}
    </Container>
  );
};

export default Characters;
