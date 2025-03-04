import Logo from './Logo';
import Favorites from './Favorites';
import { FC } from 'react';
import { Container } from './Header.styles';

const Header: FC = () => {
  return (
    <Container>
      <Logo />
      <Favorites />
    </Container>
  );
};

export default Header;
