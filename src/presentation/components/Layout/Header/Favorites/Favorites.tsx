import { FC } from 'react';
import { Container } from './Favorites.style.ts';
import { ReactComponent as HeartFilledIcon } from '@/assets/heart_filled.svg';
import Typography from '@/presentation/components/Typography';

const Favorites: FC = () => {
  return (
    <Container>
      <HeartFilledIcon />
      <Typography variant="md">3</Typography>
    </Container>
  );
};

export default Favorites;
