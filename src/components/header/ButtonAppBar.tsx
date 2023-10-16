import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import logoImg from '../../assets/logo/logo.png';
import profileImg from '../../assets/profile/짱구.svg';
import reloadImg from '../../assets/reload/reloadImg.png';
import myinfoImg from '../../assets/info/infoImg.png';
import logoutImg from '../../assets/logout/logoutImg.png';
import './Header.scss';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CurrentTimer from '../timer/currentTimer';
import ReplayIcon from '@mui/icons-material/Replay';
import { Button } from '@mui/material';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
export default function ButtonAppBar({ setIsLogin }: { setIsLogin: any }) {
  const navigate = useNavigate();
  const myInfoHandler = () => {
    localStorage.setItem('token', 'DDDDDDDDD');
    if (localStorage.getItem('token')) {
      setIsLogin(true);
      navigate('/');
    }
  };
  const logoutHandler = () => {
    localStorage.clear();
    if (localStorage.getItem('token') === null) {
      setIsLogin(false);
    }
  };

  const reloadHandler = () => {
    window.location.reload();
  };
  const name = '김재우';
  const theme = createTheme({
    palette: {
      primary: {
        main: '#fafafa',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <AppBar
          elevation={0}
          sx={{
            zIndex: 1,
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '35px',
          }}
          position="static"
        >
          <div className="logoBox">
            <img src={logoImg} />
            <span>와우케어</span>
          </div>
          <div className="second">
            <Box sx={{ fontSize: '16px', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <ReplayIcon
                onClick={reloadHandler}
                sx={{ cursor: 'pointer', color: 'orange', transform: 'scaleX(-1) rotate(-40deg)' }}
              />
              <span>미출근~</span>
              <Box
                sx={{
                  backgroundColor: 'green',
                  color: 'white',
                  borderRadius: '10px',
                  fontSize: '14px',
                  height: '25px',
                  width: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                근무준비중
              </Box>
              <Button sx={{ border: '1px solid gray' }} size="small" variant="contained">
                출근하기
              </Button>
            </Box>
            <Box ml={3} sx={{ fontSize: '0.02857em', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Button sx={{ border: '1px solid gray' }} size="small" variant="contained">
                업체변경
              </Button>
              <Box ml={1} sx={{ fontWeight: '700', fontSize: '16px' }}>
                와우랩스
              </Box>
            </Box>
            <Box ml={2} sx={{ display: 'flex', alignItems: 'center', fontWeight: '700' }} className="nicknameBox">
              <img className="img" src={profileImg} />
              <span>{name}님 반갑습니다</span>
            </Box>
            <Box ml={1} className="timeBox">
              <CurrentTimer />
            </Box>
            <Box onClick={myInfoHandler} ml={1} sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <PermIdentityIcon />
              <span>나의정보</span>
            </Box>
            <Box onClick={logoutHandler} ml={1} sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <LogoutIcon />
              <span>로그아웃</span>
            </Box>
          </div>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
