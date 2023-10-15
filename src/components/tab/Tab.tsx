import { Box, Button, Tabs, Typography } from '@mui/material';
import Tab from '@mui/material/Tab';
import React, { useState } from 'react';
import './Tab.scss';
import { useRecoilState } from 'recoil';
import { TabState, useCloseState, useTabState } from '../../recoil/OnMom';
import { useNavigate } from 'react-router-dom';
const MenuTab = () => {
  // Tab 타입 지정
  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  const [isClose, setIsClose] = useRecoilState(useCloseState);
  function a11yProps(index: number) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(event, newValue);
    setValue(newValue);
  };
  const navigate = useNavigate();
  // Tab 추가 되는부분

  const [tabList, setTabList] = useState([
    { id: 0, name: '임직원정보관리', src: '/employeemanage' },
    { id: 1, name: '근태/휴가관리', src: '/workmanage' },
    { id: 2, name: '급여관리', src: '/paymentmanage' },
    { id: 3, name: '4대사회보험관리', src: '/insurance' },
    { id: 4, name: '재증명발급관리대장', src: '/certificationmanage' },
  ]);
  const [addtabList, setAddTabList] = useRecoilState(useTabState);
  console.log(addtabList);
  const addTabHandler = (item: any) => {
    console.log(item);
    if (addtabList.includes(item)) {
      return;
    } else {
      setAddTabList([...addtabList, item]);
    }
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '100vh' }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        {tabList.map((item) => (
          <Tab onClick={() => addTabHandler(item)} key={item.id} label={item.name} {...a11yProps(item.id)} />
        ))}
      </Tabs>
    </Box>
  );
};

export default MenuTab;
