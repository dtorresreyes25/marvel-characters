import { FC, useCallback, useState } from 'react';
import CharacterGallery from '@/presentation/components/CharacterGallery';
import SearchFilter from '@/presentation/components/SearchFilter';
import { useCharactersRepository } from '@/infraestructure/repositories';
import LoadingSpinner from '@/presentation/components/LoadingSpinner';

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
    <>
      <SearchFilter
        onSearchChange={handleOnSearchChange}
        count={characters?.total}
      />
      {isFetching && <LoadingSpinner />}
      {isSuccess && !isFetching && characters?.results && (
        <CharacterGallery characters={characters.results} />
      )}
    </>
  );
};

export default Characters;
