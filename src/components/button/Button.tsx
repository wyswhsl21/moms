import React from 'react';
import Button from '@mui/joy/Button';
import './Button.scss';
const WowButton = ({ color, children }: any) => {
  return (
    <Button color={color} className="Button">
      {children}
    </Button>
  );
};

export default WowButton;
