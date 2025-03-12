import { FC, MouseEvent, FunctionComponent, SVGProps } from 'react';
import { Button } from './ButtonWithIcon.styles.ts';

export interface ButtonWithIconProps {
  icon: FunctionComponent<SVGProps<SVGElement>>;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  size: 'sm' | 'md' | 'xl';
}

const ButtonWithIcon: FC<ButtonWithIconProps> = ({
  icon: Icon,
  onClick,
  size,
  ...props
}) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick(e);
  };

  return (
    <Button onClick={handleClick} size={size} {...props}>
      <Icon />
    </Button>
  );
};

export default ButtonWithIcon;
