import React, { useEffect, useState } from 'react';
import Header from '../header/ButtonAppBar';
import Button from '../button/Button';
import './Main.scss';
import logoImg from '../../assets/logo/logo.png';
import reloadImg from '../../assets/reload/reloadImg.png';
import emticonImg from '../../assets/profile/profileImg.png';
import CurrentTimer from '../timer/currentTimer';
import infoImg from '../../assets/info/infoImg.png';
import logoutImg from '../../assets/logout/logoutImg.png';
import LeftBar from '../sidebar/LeftBar';
import ButtonAppBar from '../header/ButtonAppBar';
import RightBar from '../sidebar/RightBar';
import Center from '../center/Center';
import TemporaryDrawer from '../sidebar/RightBar';
const Main = () => {
  const [isLogin, setIsLogin] = useState(false);
  const token = localStorage.getItem('token');
  useEffect(() => {
    console.log(token);
    token !== null ? setIsLogin(true) : setIsLogin(false);
  }, [token]);
  console.log(token);
  const nickname = '김재우';
  return isLogin ? (
    <div className="Main">
      <ButtonAppBar setIsLogin={setIsLogin} />

      <div className="sideBar">
        <LeftBar />
        <Center isLogin={isLogin} />
        <TemporaryDrawer />
      </div>
    </div>
  ) : (
    <div className="Main">
      <ButtonAppBar setIsLogin={setIsLogin} />

      <div className="sideBar">
        <LeftBar />
        <Center isLogin={isLogin} />
        <TemporaryDrawer />
      </div>
    </div>
  );
};

export default Main;
