import { FC } from 'react';
import { RouterNavLink } from './Favorites.style.ts';
import { ReactComponent as HeartFilledIcon } from '@/assets/heart_filled.svg';
import Typography from '@/presentation/components/Typography';
import { useFavoriteCharactersStore } from '@/application/store/useFavoriteCharactersStore.ts';

const Favorites: FC = () => {
  const { favorites } = useFavoriteCharactersStore();

  return (
    <RouterNavLink to="/favorites">
      <HeartFilledIcon />
      <Typography variant="md">{favorites?.size}</Typography>
    </RouterNavLink>
  );
};

export default Favorites;
