import { FC } from 'react';
import { Wrapper, Thumbnail, Heading } from './ComicCard.styles.ts';
import { Comic } from '../../../types';
import Typography from '@/components/Typography';

interface Props {
  comic: Comic;
}

const ComicCard: FC<Props> = ({ comic }) => {
  const releaseInfo = comic.dates.find(({ type }) => type === 'onsaleDate');
  const publicationYear = releaseInfo
    ? new Date(releaseInfo.date).getFullYear()
    : null;

  return (
    <Wrapper>
      <Thumbnail
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        alt={`Cover of ${comic.title}`}
      />
      <Heading variant="md">{comic.title}</Heading>
      {publicationYear && (
        <Typography variant="xs">{publicationYear}</Typography>
      )}
    </Wrapper>
  );
};

export default ComicCard;
