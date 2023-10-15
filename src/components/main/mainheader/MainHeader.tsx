import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { TabState, useCloseState, useTabState } from '../../../recoil/OnMom';
import Tabs from '@mui/material/Tabs';
import CloseIcon from '@mui/icons-material/Close';
import './MainHeader.scss';
import { isHtmlElement } from 'react-router-dom/dist/dom';
import { useNavigate } from 'react-router-dom';
import TableRowsIcon from '@mui/icons-material/TableRows';
export interface TabValue {
  name: string;
}
const MainHeader = () => {
  const navigate = useNavigate();
  const [tabMenu, setTabMenu] = useRecoilState(useTabState);
  const [isClose, setIsClose] = useRecoilState(useCloseState);
  console.log(tabMenu, isClose);
  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  const [value, setValue] = useState(0);

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
    navigate(props);
  };
  useEffect(() => {
    new Set(tabMenu);
  }, []);
  const closeTabHandler = () => {
    setIsClose(!isClose);
  };

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
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <Box sx={{ maxWidth: { xs: 1000, sm: 2000 }, bgcolor: 'background.paper' }}>
      <div className="tabList">
        <Box
          onClick={closeTabHandler}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
        >
          <TableRowsIcon />
          메뉴닫기
        </Box>

        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {tabMenu?.map((item: TabState) => (
            <Button onClick={() => naviHandler(item.src)} key={item.name}>
              {item.name}
              <CloseIcon color="action" onClick={() => tabMenuDeleteHandler(item)} />
            </Button>
          ))}
        </Tabs>
      </div>
    </Box>
  );
};

export default MainHeader;
