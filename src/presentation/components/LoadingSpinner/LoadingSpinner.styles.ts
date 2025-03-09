import styled, { keyframes } from 'styled-components';
import Typography from '@/presentation/components/Typography';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  width: var(--mvl-icon-size-md);
  height: var(--mvl-icon-size-md);
  border: var(--mvl-space-4) solid rgba(0, 0, 0, 0.1);
  border-top: var(--mvl-space-4) solid var(--mvl-color-red);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const LoadingText = styled(Typography)`
  color: var(--mvl-color-black);
  font-weight: var(--mvl-font-weight-medium);
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: var(--mvl-space-12);
  margin: var(--mvl-space-24);
`;
