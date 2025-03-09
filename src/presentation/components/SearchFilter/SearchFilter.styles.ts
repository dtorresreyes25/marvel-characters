import styled from 'styled-components';
import Typography from '@/presentation/components/Typography';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--mvl-space-12);
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: var(--mvl-space-8);
  border-bottom: 0.0625rem solid var(--mvl-color-black);
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding-left: var(--mvl-space-12);
  color: var(--mvl-color-black);
  text-transform: uppercase;

  &::placeholder {
    text-transform: uppercase;
    color: var(--mvl-color-gray-foreground);
  }
`;

export const ResultsText = styled(Typography)`
  text-transform: uppercase;
`;
