import styled from 'styled-components';
import * as media from '@/styles/media-query.ts';
import SearchFilter from '@/components/SearchFilter';
import Typography from '@/components/Typography';

export const Container = styled.main`
  padding: var(--mvl-space-48);

  ${media.extraSmallMedia} {
    padding: var(--mvl-space-16);
    padding-top: var(--mvl-space-24);
  }
`;

export const Header = styled(Typography)`
  text-transform: uppercase;
  margin-bottom: var(--mvl-space-36);
`;

export const SearchBar = styled(SearchFilter)`
  margin-bottom: var(--mvl-space-36);
`;
