import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { useTabState } from '../../../recoil/OnMom';
import './MainHeader.scss';
export interface TabValue {
  name: string;
}
const MainHeader = () => {
  const [tabMenu, setTabMenu] = useRecoilState(useTabState);
  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  const [value, setValue] = useState(0);

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
    <TabPanel value={value} index={0}>
      <div className="tabList">{tabMenu?.map((item) => <Button key={item.name}>{item.name}</Button>)}</div>
    </TabPanel>
  );
};

export default MainHeader;
