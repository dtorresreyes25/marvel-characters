import { FC, ReactNode } from 'react';
import { Button, IconWrapper } from './ButtonWithIcon.styles';

export interface ButtonWithIconProps {
  icon: ReactNode;
  onClick: () => void;
  size: 'sm' | 'md' | 'xl';
}

const ButtonWithIcon: FC<ButtonWithIconProps> = ({
  icon,
  onClick,
  size,
  ...props
}) => {
  return (
    <Button onClick={onClick} {...props}>
      <IconWrapper size={size}>{icon}</IconWrapper>
    </Button>
  );
};

export default ButtonWithIcon;
