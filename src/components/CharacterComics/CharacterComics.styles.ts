import styled from 'styled-components';
import * as media from '@/styles/media-query.ts';
import Typography, { typographyVariants } from '@/components/Typography';

const { gteMediumMedia, smallMedia, lteSmallMedia, lteExtraSmallMedia } = media;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  padding: var(--mvl-space-48) 0 var(--mvl-space-24);
`;

export const Container = styled.div`
  width: 100%;

  ${gteMediumMedia} {
    max-width: 62.4rem;
  }
`;

export const Header = styled(Typography)`
  text-transform: uppercase;

  ${lteSmallMedia} {
    ${typographyVariants.xl};
  }

  ${smallMedia}, ${lteExtraSmallMedia} {
    padding: 0 var(--mvl-space-48);
  }

  ${lteExtraSmallMedia} {
    padding: 0 var(--mvl-space-16);
  }
`;

export const List = styled.ul`
  display: flex;
  gap: var(--mvl-space-16);
  overflow-x: auto;
  list-style: none;
  margin: var(--mvl-space-0);
  padding: var(--mvl-space-24) var(--mvl-space-0);

  ${media.smallMedia} {
    & > :first-child {
      margin-left: var(--mvl-space-48));
    }
    & > :last-child {
      margin-right: var(--mvl-space-48));
    }
  }
  ${media.lteExtraSmallMedia} {
    & > :first-child {
      margin-left: var(--mvl-space-16);
    }
    & > :last-child {
      margin-right: var(--mvl-space-16);
    }
  }
`;
