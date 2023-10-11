import React from 'react';
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
const Main = () => {
  const nickname = '김재우';
  return (
    <div className="Main">
      <ButtonAppBar />
      <div className="sideBar">
        <LeftBar />
        <Center />
        <RightBar />
      </div>
    </div>
  );
};

export default Main;
