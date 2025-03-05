import { FC } from 'react';
import CharacterGallery from '@/presentation/components/CharacterGallery';
import { characterListMock } from '@/mocks/characterListMock.ts';

const Characters: FC = () => {
  return <CharacterGallery characters={characterListMock} />;
};

export default Characters;
