import { Box, Button, IconButton, Tab, Typography } from '@mui/material';
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
import MySpan from '../../mySpan/MySpan';
import Mysearch from '../../search/Mysearch';
import WowButton from '../../button/Button';

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
  const TabChannelValue = 0;
  const [tabPanelChannel, setTabPanelChannel] = useState(TabChannelValue);
  console.log(tabPanelChannel);
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
          <Box>
            <Typography
              sx={{ padding: '20px 30px', display: 'flex', flexDirection: 'column', gap: '20px', width: '98%' }}
            >
              {children}
            </Typography>
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
    console.log(newValue);
    setValue(newValue);
  };
  //  tab delete 핸들러
  const tabMenuDeleteHandler = (props: TabState) => {
    console.log(props);
    const restTabMenu = tabMenu.filter((v: TabState) => v !== props);
    setTabMenu(restTabMenu);
  };
  const TabChannelHandler = (item: TabState) => {
    setTabPanelChannel(item.id);
    setIsTabValue(item.name);
  };

  const [isTabValue, setIsTabValue] = useState('임직원정보관리');
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

              border: '1px solid #ddd',
            }}
          >
            <TableRowsIcon />
            {isClose ? '메뉴닫기' : '메뉴열기'}
          </Box>
          {/* How ?  recoil 로 상태값을 가져와서 ...a11yProps(item.id) 값을 넘겨주면 0,1,2,3,4 될거고 Tab도 눌려야 하는데 눌리지가 않는다 ? */}
          <Tabs
            sx={{ border: '1px solid #ddd', width: '100%' }}
            allowScrollButtonsMobile
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            aria-label="scrollable auto tabs example"
          >
            {tabMenu?.map((item: TabState) => (
              <Box key={item.id} className="tabbox">
                <Tab
                  onClick={() => TabChannelHandler(item)}
                  key={item.name}
                  label={item.name}
                  {...a11yProps(Number(item.id))}
                />
                <IconButton onClick={() => tabMenuDeleteHandler(item)}>
                  <CloseIcon className="delete" color="action" />
                </IconButton>
              </Box>
            ))}
          </Tabs>
        </div>
        {/* 내가 하고자 하는것 allprops 에 item.id 값 넘겨주기 때문에 CustomTabPanel index 값도 똑같이 넘겨 렌더링을 일치 시키고 싶은데, TabPanelChannel 이라는 값을 만들어 사용했는데
        value !== index 일때 hidden 이 되야하는데 이게 안먹힘.. 그리고 Tab 에 삭제기능을 넣고 싶어 Box 로 감싸고 버튼을 만들었는데 TabPanel 이 먹히지 않음.
        */}
        <Box>
          <CustomTabPanel value={value} index={tabPanelChannel}>
            <Box borderBottom={1} sx={{ display: 'flex', justifyContent: 'space-between', borderColor: '#ddd' }}>
              <MySpan title={isTabValue} />
              <Mysearch />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', gap: '5px' }}>
                <WowButton>임직원추가</WowButton>
                <WowButton>임직원수정</WowButton>
                <WowButton color="danger">임직원삭제</WowButton>
              </div>
              <div style={{ display: 'flex', gap: '5px' }}>
                <WowButton>임직원 업로드 양식 다운로드</WowButton>
                <WowButton>임직원 일괄추가</WowButton>
                <WowButton sx={{ backgroudColor: 'rgb(33, 150, 243)' }}>와우인(人)가입요청 일괄발송</WowButton>
              </div>
            </Box>

            <EmployeeDataGrid />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={tabPanelChannel}>
            <Box borderBottom={1} sx={{ display: 'flex', justifyContent: 'space-between', borderColor: '#ddd' }}>
              <MySpan title={isTabValue} />
              <Mysearch />
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={tabPanelChannel}>
            <Box borderBottom={1} sx={{ display: 'flex', justifyContent: 'space-between', borderColor: '#ddd' }}>
              <MySpan title={isTabValue} />
              <Mysearch />
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={tabPanelChannel}>
            <Box borderBottom={1} sx={{ display: 'flex', justifyContent: 'space-between', borderColor: '#ddd' }}>
              <MySpan title={isTabValue} />
              <Mysearch />
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={tabPanelChannel}>
            <Box borderBottom={1} sx={{ display: 'flex', justifyContent: 'space-between', borderColor: '#ddd' }}>
              <MySpan title={isTabValue} />
              <Mysearch />
            </Box>
          </CustomTabPanel>
        </Box>
      </div>
    </Box>
  );
};

export default MainHeader;
