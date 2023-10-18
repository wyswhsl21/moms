import { Box, Button, Tabs, Typography } from '@mui/material';
import Tab from '@mui/material/Tab';
import React, { useState } from 'react';
import '../../components/tab/Tab.scss';
import { useRecoilState } from 'recoil';
import { TabState, useCloseState, useTabState } from '../../recoil/OnMom';
import { useNavigate } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
const MenuTab = () => {
  // Tab 타입 지정
  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  const [isClose, setIsClose] = useRecoilState(useCloseState);
  console.log(isClose);

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
  // 커스텀 탑 패널
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 0 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  return (
    <Box
      className={`tab ${isClose ? 'open' : 'close'} `}
      sx={{
        flexGrow: 0,
        bgcolor: 'background.paper',
        display: 'flex',
        height: '100vh',
        border: '1px solid #ddd',
        width: '150px',
      }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
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
