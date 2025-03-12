import styled from 'styled-components';
import * as media from '@/styles/media-query.ts';
import SearchFilter from '@/components/SearchFilter';

export const Container = styled.main`
  position: relative;
  padding: var(--mvl-space-48);
  padding-top: var(--mvl-space-60);

  ${media.extraSmallMedia} {
    padding: var(--mvl-space-16);
    padding-top: var(--mvl-space-36);
  }
`;

export const SearchBar = styled(SearchFilter)`
  margin-bottom: var(--mvl-space-36);
`;
