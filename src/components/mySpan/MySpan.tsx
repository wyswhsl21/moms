import { Box, IconButton } from '@mui/material';
import React from 'react';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const MySpan = ({ title }: any) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        fontSize: '1.5rem',
        borderColor: '#ddd',
        height: '70px',
        gap: '5px',
      }}
    >
      <span>{title}</span>
      <IconButton
        onClick={() => alert('기능소개')}
        sx={{
          backgroundColor: 'rgb(242, 242, 242)',
          borderRadius: '5px',
          padding: '8px',
          fontSize: '16px',
          display: 'flex',
          gap: '5px',
          transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          color: 'rgba(0, 0, 0, 0.54)',
        }}
      >
        <MenuBookIcon sx={{ width: '1em', height: '1em' }} />

        <span>기능소개</span>
      </IconButton>
    </Box>
  );
};

export default MySpan;
