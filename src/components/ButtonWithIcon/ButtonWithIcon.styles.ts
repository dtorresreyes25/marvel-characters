import styled from 'styled-components';

export const Button = styled.button<{ size: 'sm' | 'md' | 'xl' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  background: none;
  z-index: 0;

  svg {
    width: ${({ size }) => `var(--mvl-icon-size-${size})`};
  }
`;
