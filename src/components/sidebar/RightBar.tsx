import React, { useState } from 'react';
import HighlightAltIcon from '@mui/icons-material/HighlightAlt';
import PermPhoneMsgOutlinedIcon from '@mui/icons-material/PermPhoneMsgOutlined';
import { Outlet, useNavigate } from 'react-router-dom';
import { Box, Button, IconButton, Tooltip, makeStyles } from '@mui/material';
import ContentPasteGoOutlinedIcon from '@mui/icons-material/ContentPasteGoOutlined';
import './RightBar.scss';
const RightBar = () => {
  const [isSlide, setIsSlide] = useState(false);
  console.log(isSlide);
  const rightSlideHandler = () => {
    setIsSlide(!isSlide);
  };

  const buttonSX = {
    backgroundColor: 'white',
    color: 'black',
    border: 'none',
    '&:hover': {
      border: 'none',
      fontWeight: '700',
    },
  };
  const boxSX = {
    backgroudColor: '#f2f2f3',
    display: 'flex',
    flexDirection: 'column',
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
    { id: 0, name: '고객관리', src: PermPhoneMsgOutlinedIcon, path: '/usermanage' },
    { id: 1, name: '임직원관리', src: PermPhoneMsgOutlinedIcon, path: '/employeemanage' },
  ];
  return isSlide ? (
    <div className={`sideBox ${isSlide ? 'open' : ''}`}>
      <div className="menuBox">
        {RightMenuList.map((item) => (
          <Tooltip key={item.id} placement="left-start" title={item?.name}>
            <Box sx={boxSX} key={item.id}>
              <item.src />
              <span>{item.name}</span>
            </Box>
          </Tooltip>
        ))}
      </div>

      <Button onClick={rightSlideHandler} sx={buttonSX}>
        <ContentPasteGoOutlinedIcon />
        접기
      </Button>

      <Outlet />
    </div>
  ) : (
    <Tooltip
      placement="left-end"
      sx={{ height: '100%', display: 'flex', flexDirection: 'column-reverse' }}
      title="열기"
    >
      <Box>
        <IconButton>
          <HighlightAltIcon
            sx={{ width: '50px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}
            onClick={() => setIsSlide(!isSlide)}
          />
        </IconButton>
      </Box>
    </Tooltip>
  );
};

export default RightBar;
