import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import { Outlet } from 'react-router-dom';

type Anchor = 'right';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div className="sideBox">
      <Box
        sx={{ width: anchor === 'right' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <Divider />
        <List
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100vh',
          }}
        >
          <div className="menuBox">
            {['원격', '문자'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  sx={{
                    width: '100px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                  }}
                >
                  <ListItemIcon sx={{ minWidth: '0px' }}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </div>
          <div className="menuBox">
            <ListItemButton
              sx={{
                width: '100px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
            >
              <ListItemIcon>
                <DriveFileMoveIcon sx={{ minWidth: '0px' }} />
              </ListItemIcon>
              <ListItemText primary="접기" />
            </ListItemButton>
          </div>
        </List>
      </Box>
    </div>
  );

  return (
    <div>
      {(['right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <DriveFileMoveIcon />
          </Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
