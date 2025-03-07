import styled from 'styled-components';
import * as media from '@/styles/media-query';
import Typography, {
  typographyVariants,
} from '@/presentation/components/Typography';

const { gteMediumMedia, smallMedia, lteSmallMedia, lteExtraSmallMedia } = media;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  padding: var(--mvl-space-48) 0 var(--mvl-space-24);
`;

export const Container = styled.div`
  width: 100%;

  ${gteMediumMedia} {
    max-width: 96rem;
  }
`;

export const Header = styled(Typography)`
  text-transform: uppercase;

  ${lteSmallMedia} {
    ${typographyVariants.md};
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
  margin: 0;
  padding: var(--mvl-space-24) 0;

  ${smallMedia}, ${lteExtraSmallMedia} {
    & > :first-child {
      margin-left: var(--mvl-space-48);
    }
    & > :last-child {
      margin-right: var(--mvl-space-48);
    }
  }

  ${lteExtraSmallMedia} {
    & > :first-child {
      margin-left: var(--mvl-space-16);
    }
    & > :last-child {
      margin-right: var(--mvl-space-16);
    }
  }
`;
