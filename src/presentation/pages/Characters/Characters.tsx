import { FC } from 'react';
import CharacterGallery from '@/presentation/components/CharacterGallery';
import { characterListMock } from '@/mocks/characterListMock.ts';
import SearchFilter from '@/presentation/components/SearchFilter';

const Characters: FC = () => {
  return (
    <>
      <SearchFilter />
      <CharacterGallery characters={characterListMock} />
    </>
  );
};

export default Characters;
