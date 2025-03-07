import styled from 'styled-components';
import * as media from '@/styles/media-query';

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(11.8rem, 1fr));
  gap: var(--mvl-space-16);

  margin: var(--mvl-space-0);
  padding: var(--mvl-space-0);
  list-style: none;

  ${media.lteSmallMedia} {
    grid-template-columns: repeat(auto-fill, minmax(17.2rem, 1fr));
  }
`;
