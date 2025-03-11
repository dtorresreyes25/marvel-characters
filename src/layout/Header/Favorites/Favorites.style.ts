import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const RouterNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: var(--mvl-space-8);
  padding: var(--mvl-space-8);
  color: var(--mvl-color-white);
  text-decoration: none;
`;
