import { css } from 'styled-components';

export const typography = {
  headerTitle: css`
    font-size: var(--mvl-font-size-2xl);
    font-weight: var(--mvl-font-weight-bold);
  `,
  characterName: css`
    font-size: var(--mvl-font-size-xl);
    font-weight: var(--mvl-font-weight-bold);
  `,
  sectionTitle: css`
    font-size: var(--mvl-font-size-lg);
    font-weight: var(--mvl-font-weight-bold);
  `,
  characterDescription: css`
    font-size: var(--mvl-font-size-md);
    font-weight: var(--mvl-font-weight-regular);
  `,
  comicTitle: css`
    font-size: var(--mvl-font-size-sm);
    font-weight: var(--mvl-font-weight-regular);
  `,
  searchPlaceholder: css`
    font-size: var(--mvl-font-size-xs);
    font-weight: var(--mvl-font-weight-regular);
  `,
};
