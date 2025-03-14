import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Typography from '@/components/Typography';
import ButtonWithIcon from '@/components/ButtonWithIcon';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
`;

export const RouterLink = styled(Link)`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-decoration: none;
`;

export const Picture = styled.img`
  height: 11.875rem;
  object-fit: cover;
`;

export const Divider = styled.hr`
  height: 0.3125rem;
  background-color: var(--mvl-color-red);
  margin: var(--mvl-space-0);
  border: var(--mvl-space-0);
`;

export const Name = styled(Typography)`
  color: var(--mvl-color-white);
  z-index: 1;
  text-transform: uppercase;
`;

export const FavoriteIcon = styled(ButtonWithIcon)`
  & svg path {
    transition: fill var(--mvl-transition-fast);
  }
`;

export const Description = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--mvl-space-12);
  flex: 1;
  position: relative;
  background-color: var(--mvl-color-black);
  box-sizing: border-box;
  padding: var(--mvl-space-16);
  padding-bottom: var(--mvl-space-24);

  &:before {
    content: '';
    height: 0;
    transition: height var(--mvl-transition-fast);
    background-color: var(--mvl-color-red);
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  &:hover:before {
    height: 100%;
  }

  &:hover ${FavoriteIcon} svg path {
    z-index: 1;
    fill: var(--mvl-color-white);
  }

  &:after {
    content: '';
    position: absolute;
    z-index: 1;
    width: 0.75rem;
    height: 0.75rem;
    right: -0.375rem;
    bottom: -0.375rem;
    background-color: var(--mvl-color-white);
    transform: rotate(45deg);
  }
`;
