import { FC } from 'react';
import { Container } from './Favorites.style.ts';
import { ReactComponent as HeartFilledIcon } from '@/assets/heart_filled.svg';
import Typography from '@/presentation/components/Typography';
import { useCharacterFavoritesStore } from '@/application/store/useCharacterFavoritesStore';

const Favorites: FC = () => {
  const { favorites } = useCharacterFavoritesStore();

  return (
    <Container>
      <HeartFilledIcon />
      <Typography variant="md">{favorites?.size}</Typography>
    </Container>
  );
};

export default Favorites;
