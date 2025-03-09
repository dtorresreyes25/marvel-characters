import styled from 'styled-components';
import * as media from '@/styles/media-query';
import Typography from '@/presentation/components/Typography';

export const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  width: 11.635rem;

  ${media.smallMedia} {
    width: 10.985rem;
  }

  ${media.lteExtraSmallMedia} {
    width: 10.65rem;
  }
`;

export const Thumbnail = styled.img`
  object-fit: contain;
  height: 17.485rem;

  ${media.smallMedia} {
    height: 16.445rem;
  }

  ${media.lteExtraSmallMedia} {
    height: 16.1rem;
  }
`;

export const Heading = styled(Typography)`
  font-weight: var(--mvl-font-weight-medium);
  margin-top: var(--mvl-space-12);
  margin-bottom: var(--mvl-space-8);
`;
