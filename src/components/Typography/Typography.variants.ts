import { css } from 'styled-components';

export const typographyVariants = {
  xxxl: css`
    font-size: var(--mvl-font-size-xxxl);
    font-weight: var(--mvl-font-weight-bold);
    line-height: 1.1;
  `,
  xxl: css`
    font-size: var(--mvl-font-size-xxl);
    font-weight: var(--mvl-font-weight-bold);
    line-height: 1.1;
  `,
  xl: css`
    font-size: var(--mvl-font-size-xl);
    font-weight: var(--mvl-font-weight-bold);
    line-height: 1.3;
  `,
  md: css`
    font-size: var(--mvl-font-size-md);
    font-weight: var(--mvl-font-weight-regular);
    line-height: 1.2;
  `,
  sm: css`
    font-size: var(--mvl-font-size-sm);
    font-weight: var(--mvl-font-weight-regular);
    line-height: 1.4;
  `,
  xs: css`
    font-size: var(--mvl-font-size-xs);
    font-weight: var(--mvl-font-weight-regular);
    line-height: 1.4;
  `,
} as const;

export type TypographyVariant = keyof typeof typographyVariants;
