import React, { useState } from 'react';
import ButtonAppBar from '../header/ButtonAppBar';
import { Outlet } from 'react-router-dom';
import LeftBar from '../sidebar/LeftBar';
import RightBar from '../sidebar/RightBar';
import { Box } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import './EmployeeManage.scss';
import EmployeeDataGrid from './employee_grid/DataGrid';
import Tab from '../tab/Tab';
import MainHeader from '../main/mainheader/MainHeader';
import { useRecoilState } from 'recoil';
import { useCloseState, useTabState } from '../../recoil/OnMom';
const EmployeeManage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isClose, setIsClose] = useRecoilState(useCloseState);
  return (
    <div className="employee">
      <ButtonAppBar setIsLogin={setIsLogin} />
      <Box sx={{ display: 'flex', width: '100%', height: '100vh' }}>
        <LeftBar />
        <div className="main">
          {/* Tab이 없어져야 메인 헤더부분이 왼쪽으로 붙는데, 여기서 애니메이션 효과를 주면서 없애는건 안되나 .. ? */}
          {isClose ? <Tab /> : ''}

          <div className="grid">
            <MainHeader />
            {/* <EmployeeDataGrid /> */}
          </div>
        </div>
        <RightBar />
      </Box>
    </div>
  );
};

export default EmployeeManage;
