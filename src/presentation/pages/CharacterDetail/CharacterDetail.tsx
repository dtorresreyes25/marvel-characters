import { FC } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '@/presentation/components/LoadingSpinner';
import CharacterProfile from '@/presentation/components/CharacterProfile';
import { CharacterComics } from '@/presentation/components/CharacterComics/CharacterComics.tsx';
import {
  useCharacterComicsRepository,
  useCharacterDetailsRepository,
} from '@/infraestructure/repositories';

const ITEMS_PER_PAGE = 20;

const CharacterDetail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: character } = useCharacterDetailsRepository(id);
  const { data: comics = [], isLoading } = useCharacterComicsRepository(id, {
    limit: ITEMS_PER_PAGE,
  });

  const title = isLoading
    ? 'Loading Marvel hero...'
    : `Marvel Characters | ${character?.name} - Character Details`;

  return (
    <>
      <title>{title}</title>
      <section>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            {character && <CharacterProfile character={character} />}
            {comics?.length > 0 && <CharacterComics comics={comics} />}
          </>
        )}
      </section>
    </>
  );
};

export default CharacterDetail;
