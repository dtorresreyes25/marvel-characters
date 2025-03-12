import { Link } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { ReactComponent as MarvelLogo } from '@/assets/marvel_logo.svg';

const Logo = () => {
  return (
    <Link to="/">
      <MarvelLogo />
    </Link>
  );
};

export default Logo;
