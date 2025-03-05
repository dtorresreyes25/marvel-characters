import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  background: none;
  z-index: 0;
`;

export const IconWrapper = styled.span<{ size: 'sm' | 'md' | 'xl' }>`
  width: ${({ size }) => `var(--mvl-icon-size-${size})`};
  svg {
    width: 100%;
    height: 100%;
  }
`;
