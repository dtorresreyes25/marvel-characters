import styled from 'styled-components';
import * as media from '@/styles/media-query';
import Typography from '@/presentation/components/Typography';

export const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  width: 17.9rem;
  ${media.smallMedia} {
    width: 16.9rem;
  }
  ${media.lteExtraSmallMedia} {
    width: 16.4rem;
  }
`;

export const Thumbnail = styled.img`
  object-fit: contain;
  height: 26.9rem;

  ${media.smallMedia} {
    height: 25.3rem;
  }
  ${media.lteExtraSmallMedia} {
    height: 24.8rem;
  }
`;

export const Heading = styled(Typography)`
  margin-top: var(--mvl-space-12);
  margin-bottom: var(--mvl-space-8);
`;
