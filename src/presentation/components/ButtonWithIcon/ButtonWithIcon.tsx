import { FC, ReactNode } from 'react';
import { Button, IconWrapper } from './ButtonWithIcon.styles';

export interface ButtonWithIconProps {
  icon: ReactNode;
  onClick: () => void;
  size: 'sm' | 'md' | 'xl';
}

const ButtonWithIcon: FC<ButtonWithIconProps> = ({ icon, onClick, size }) => {
  return (
    <Button onClick={onClick}>
      <IconWrapper size={size}>{icon}</IconWrapper>
    </Button>
  );
};

export default ButtonWithIcon;
