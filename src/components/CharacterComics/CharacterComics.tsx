import { Comic } from '../../types';
import { FC } from 'react';
import { List, Section, Header, Container } from './CharacterComics.styles.ts';
import ComicCard from '@/components/CharacterComics/ComicCard';

export interface CharacterComicsProps {
  comics: Comic[];
}

export const CharacterComics: FC<CharacterComicsProps> = ({ comics }) => {
  return (
    <Section>
      <Container>
        <Header variant="xxl">Comics</Header>
        <List>
          {comics.map((comic) => (
            <ComicCard key={comic.id} comic={comic} />
          ))}
        </List>
      </Container>
    </Section>
  );
};
