import styled from 'styled-components';
import * as media from '@/styles/media-query.ts';
import Typography, {
  typographyVariants,
} from '@/presentation/components/Typography';

export const Header = styled.header`
  display: flex;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: var(--mvl-color-black);

  ${media.gteMediumMedia} {
    justify-content: center;
  }

  &:after {
    content: '';
    position: absolute;
    background-color: var(--mvl-color-white);

    width: 2.4rem;
    height: 2.4rem;
    right: -1.2rem;
    bottom: -1.2rem;
    transform: rotate(45deg);
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  ${media.gteMediumMedia} {
    max-width: 96rem;
  }
  ${media.gteSmallMedia} {
    gap: var(--mvl-space-48);
  }
  ${media.smallMedia} {
    padding-right: var(--mvl-space-48);
  }
  ${media.lteExtraSmallMedia} {
    flex-direction: column;
  }
`;

export const Avatar = styled.img`
  width: 32rem;
  height: 32rem;
  object-fit: cover;

  ${media.smallMedia} {
    width: 27.8rem;
    height: 27.8rem;
  }
  ${media.lteExtraSmallMedia} {
    width: 100%;
    height: auto;
  }
`;

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--mvl-space-24);
  width: 100%;
  box-sizing: border-box;
  color: var(--mvl-color-white);

  ${media.lteExtraSmallMedia} {
    padding: var(--mvl-space-24) var(--mvl-space-16) var(--mvl-space-48);
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  gap: var(--mvl-space-16);
`;

export const Title = styled(Typography)`
  ${media.lteSmallMedia} {
    ${typographyVariants.md};
  }
`;
