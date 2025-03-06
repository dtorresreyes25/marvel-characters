import { FC } from 'react';
import CharacterGallery from '@/presentation/components/CharacterGallery';
import { characterListMock } from '@/mocks/characterListMock.ts';
import SearchFilter from '@/presentation/components/SearchFilter';
import LoadingSpinner from '@/presentation/components/LoadingSpinner';

const Characters: FC = () => {
  return (
    <>
      <SearchFilter />
      <LoadingSpinner />
      <CharacterGallery characters={characterListMock} />
    </>
  );
};

export default Characters;
