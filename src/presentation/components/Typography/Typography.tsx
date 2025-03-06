import React, { ReactNode } from 'react';
import styled from 'styled-components';
import {
  typographyVariants,
  TypographyVariant,
} from './Typography.variants.ts';

interface TypographyProps {
  variant?: TypographyVariant;
  children: ReactNode;
  className?: string;
}

const StyledText = styled.p<{ $variant: TypographyVariant }>`
  ${({ $variant }) => typographyVariants[$variant] || typographyVariants.md};
`;

const Typography: React.FC<TypographyProps> = ({
  variant = 'md',
  children,
  className,
}) => (
  <StyledText $variant={variant} className={className}>
    {children}
  </StyledText>
);

export default Typography;
