import * as React from 'react';

import PermPhoneMsgOutlinedIcon from '@mui/icons-material/PermPhoneMsgOutlined';
import { Outlet, useNavigate } from 'react-router-dom';
import { Box, Button, makeStyles } from '@mui/material';
import ContentPasteGoOutlinedIcon from '@mui/icons-material/ContentPasteGoOutlined';

const LeftBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const rightSlideHandler = () => {
    setIsMenuOpen(!isMenuOpen);
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
  return (
    <div className={`sideBox ${isMenuOpen ? 'open' : ''}`}>
      <div className="menuBox">
        {RightMenuList.map((item) => (
          <Box sx={boxSX} key={item.id}>
            <item.src />
            <span>{item.name}</span>
          </Box>
        ))}
      </div>

      <Button onClick={rightSlideHandler} sx={buttonSX}>
        <ContentPasteGoOutlinedIcon />
        접기
      </Button>

      <Outlet />
    </div>
  );
};

export default LeftBar;
