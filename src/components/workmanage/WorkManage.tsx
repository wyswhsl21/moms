import React, { useState } from 'react';
import ButtonAppBar from '../header/ButtonAppBar';
import LeftBar from '../sidebar/LeftBar';
import MainHeader from '../main/mainheader/MainHeader';
import RightBar from '../sidebar/RightBar';
import MenuTab from '../tab/Tab';
import { Box } from '@mui/material';
const WorkManage = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="employee">
      <ButtonAppBar setIsLogin={setIsLogin} />
      <Box sx={{ display: 'flex', width: '100%', height: '95vh' }}>
        <LeftBar />
        <div className="main">
          <MenuTab />
          <div className="grid">
            <MainHeader />
          </div>
        </div>
        <RightBar />
      </Box>
    </div>
  );
};

export default WorkManage;
