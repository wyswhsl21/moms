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
const EmployeeManage = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="employee">
      <ButtonAppBar setIsLogin={setIsLogin} />
      <Box sx={{ display: 'flex', width: '100%', height: '95vh' }}>
        <LeftBar />
        <div className="main">
          <Tab />
          <div className="grid">
            <MainHeader />
            <EmployeeDataGrid />
          </div>
        </div>
        <RightBar />
      </Box>
    </div>
  );
};

export default EmployeeManage;
