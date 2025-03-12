import { FC } from 'react';
import { RouterNavLink } from './Favorites.style.ts';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { ReactComponent as HeartFilledIcon } from '@/assets/heart_filled.svg';
import Typography from '@/components/Typography';
import { useFavoriteCharactersStore } from '@/store/useFavoriteCharactersStore.ts';

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
