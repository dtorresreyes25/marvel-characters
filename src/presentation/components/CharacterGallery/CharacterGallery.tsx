import { Container } from './CharacterGallery.styles';
import { FC } from 'react';
import CharacterCard from './CharacterCard';
import { Character } from '@/domain/model/Character.ts';

interface PropTypes {
  characters: Character[];
}

const CharacterGallery: FC<PropTypes> = ({ characters }) => {
  return (
    <Container>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </Container>
  );
};

export default CharacterGallery;
