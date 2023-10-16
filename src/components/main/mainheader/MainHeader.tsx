import { Box, Button, Tab, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { TabState, useCloseState, useTabState } from '../../../recoil/OnMom';
import Tabs from '@mui/material/Tabs';
import CloseIcon from '@mui/icons-material/Close';
import './MainHeader.scss';
import { isHtmlElement } from 'react-router-dom/dist/dom';
import { useNavigate } from 'react-router-dom';
import TableRowsIcon from '@mui/icons-material/TableRows';
import EmployeeDataGrid from '../../employeemanage/employee_grid/DataGrid';

export interface TabValue {
  name: string;
}
const MainHeader = () => {
  const navigate = useNavigate();
  //tab 에 관련된 recoil state
  const [tabMenu, setTabMenu] = useRecoilState(useTabState);
  //tab toggle recoil state
  const [isClose, setIsClose] = useRecoilState(useCloseState);
  console.log(tabMenu, isClose);

  //TabPanel Type
  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 0}}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  const [value, setValue] = useState(0);

  // Scrollable tabs

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  //  tab delete 핸들러
  const tabMenuDeleteHandler = (props: TabState) => {
    console.log(props);
    const restTabMenu = tabMenu.filter((v: TabState) => v !== props);
    setTabMenu(restTabMenu);
  };
  const naviHandler = (props: string) => {
    // navigate(props);
  };
  //tabMenu 에 중복 된 값이 존재하면 중복 제거
  useEffect(() => {
    new Set([tabMenu]);
  }, [tabMenu]);
  // Tab toggle
  const closeTabHandler = () => {
    setIsClose(!isClose);
  };

  return (
    <Box sx={{ maxWidth: { xs: 1000, sm: 2500 }, bgcolor: 'background.paper' }}>
      <div className="tabList">
        <div className="headertab">
          <Box
            onClick={closeTabHandler}
           
            sx={{
              width: '110px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',

              border: '1px solid',
            }}
          >
            <TableRowsIcon />
            {isClose ? '메뉴닫기' : '메뉴열기'}
          </Box>

          <Tabs
            allowScrollButtonsMobile
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            aria-label="scrollable auto tabs example"
          >
            {tabMenu?.map((item: TabState) => (
              <div key={item.id} className="tabbox">
                <Tab key={item.name} label={item.name} {...a11yProps(item.id)} />

                <CloseIcon className="delete" color="action" onClick={() => tabMenuDeleteHandler(item)} />
              </div>
            ))}
          </Tabs>
        </div>

        <CustomTabPanel value={value} index={0}>
          <EmployeeDataGrid />
        </CustomTabPanel>
      </div>
    </Box>
  );
};

export default MainHeader;
