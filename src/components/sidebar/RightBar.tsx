import React, { useState } from 'react';
import HighlightAltIcon from '@mui/icons-material/HighlightAlt';
import PermPhoneMsgOutlinedIcon from '@mui/icons-material/PermPhoneMsgOutlined';
import { Outlet, useNavigate } from 'react-router-dom';
import { Box, Button, IconButton, Tooltip, keyframes } from '@mui/material';
import ContentPasteGoOutlinedIcon from '@mui/icons-material/ContentPasteGoOutlined';
import DevicesIcon from '@mui/icons-material/Devices';
import './LeftBar.scss';
import styled from '@emotion/styled';

const RightBar = () => {
  const [isSlide, setIsSlide] = useState(false);

  const rightSlideHandler = () => {
    setIsSlide(!isSlide);
  };

  const boxSX = {
    backgroudColor: '#f2f2f3',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',

    alignItems: 'center',

    '&:hover': {
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#e9e9eb',
    },
  };

  const navigate = useNavigate();
  const navigateHandler = (item: any) => {
    navigate(item.path);
  };
  const RightMenuList = [
    { id: 0, name: '원격', src: DevicesIcon, path: '/usermanage' },
    { id: 1, name: '문자', src: PermPhoneMsgOutlinedIcon, path: '/employeemanage' },
  ];
  return isSlide ? (
    <Box className={`sideBox ${isSlide ? 'open' : ''}`}>
      <div>
        {RightMenuList.map((item) => (
          <Tooltip key={item.id} placement="left" title={item?.name}>
            <Box mt={1} sx={boxSX} key={item.id}>
              <item.src />
              <span>{item.name}</span>
            </Box>
          </Tooltip>
        ))}
      </div>

      <Box
        className="folder"
        mb={4}
        mr={1}
        onClick={rightSlideHandler}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderTop: '1px solid #ddd',
          fontSize: '12px',
          width: '55px',
          cursor: 'pointer',
        }}
      >
        <ContentPasteGoOutlinedIcon sx={{ marginTop: '10px' }} />
        접기
      </Box>
    </Box>
  ) : (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}
      className={`sideBox ${isSlide ? '' : 'close'}`}
    >
      <Tooltip placement="left" title="열기">
        <Box>
          <IconButton>
            <HighlightAltIcon
              sx={{
                width: '50px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}
              onClick={rightSlideHandler}
            />
          </IconButton>
        </Box>
      </Tooltip>
    </Box>
  );
};

export default RightBar;
