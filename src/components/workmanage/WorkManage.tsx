import React, { useState } from 'react';
import ButtonAppBar from '../header/ButtonAppBar';
import LeftBar from '../sidebar/LeftBar';
import MainHeader from '../main/mainheader/MainHeader';
import RightBar from '../sidebar/RightBar';
import MenuTab from '../tab/Tab';
import { Box } from '@mui/material';
import { useRecoilState } from 'recoil';
import { useCloseState, useTabState } from '../../recoil/OnMom';

const WorkManage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isClose, setIsClose] = useRecoilState(useCloseState);
  return (
    <div className="employee">
      <ButtonAppBar setIsLogin={setIsLogin} />
      <Box sx={{ display: 'flex', width: '100%' }}>
        <LeftBar />
        <div className="main">
          {isClose ? <MenuTab /> : ''}
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
