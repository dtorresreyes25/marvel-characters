import { Comic } from '@/domain/model';
import { FC } from 'react';
import { List, Section, Header, Container } from './CharacterComics.styles';
import ComicCard from '@/presentation/components/CharacterComics/ComicCard';

export interface CharacterComicsProps {
  comics: Comic[];
}

export const CharacterComics: FC<CharacterComicsProps> = ({ comics }) => {
  return (
    <Section>
      <Container>
        <Header variant="md">Comics</Header>
        <List>
          {comics.map((comic) => (
            <ComicCard key={comic.id} comic={comic} />
          ))}
        </List>
      </Container>
    </Section>
  );
};
