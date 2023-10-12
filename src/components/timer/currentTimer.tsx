import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
const Timer = () => {
  const date = new Date();
  const hr = String(date.getHours()).padStart(2, '0');
  const min = String(date.getMinutes()).padStart(2, '0');
  const sec = String(date.getSeconds()).padStart(2, '0');
  return <span>{`${hr}:${min}:${sec}`}</span>;
};
const CurrentTimer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Timer />
    </Box>
  );
};

export default CurrentTimer;
