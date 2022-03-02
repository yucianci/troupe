import * as React from 'react';
import Button from '@mui/material/Button';

interface IButton {
  type: 'button' | 'submit';
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  defaultColor?: boolean;
}
const StyledButton: React.FC<IButton> = ({
  type,
  onClick,
  defaultColor,
  children,
}) => {
  return (
    <Button
      style={
        defaultColor ? { background: '#808080' } : { background: '#341f96' }
      }
      type={type}
      variant="contained"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
export default StyledButton;
