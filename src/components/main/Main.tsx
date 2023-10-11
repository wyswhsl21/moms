import React from 'react'
import Header from '../header/Header'
import Button from '../button/Button'
import './Main.scss'
import logoImg from '../../assets/logo/logo.png'
import reloadImg from '../../assets/reload/reloadImg.png'
import emticonImg from '../../assets/profile/profileImg.png'
import CurrentTimer from '../timer/currentTimer'
import infoImg from '../../assets/info/infoImg.png'
import logoutImg from '../../assets/logout/logoutImg.png'
import LeftBar from '../sidebar/LeftBar'
const Main = () => {
  const nickname = '김재우'
  return (
    <div className='Main'>
     <Header>
     <div className='first'><img src={logoImg}/><span>와우케어</span></div>
     <div className='second'>
      <div className='stateBox'>
      <img src={reloadImg}/><span>미출근 ~</span>
      <div className='workstate'>근무준비중</div>
      <button>출근하기</button>
      </div>
      <div className='companyBox'>
      <button>업체변경</button>
      <span>와우랩스</span>

      </div>
      <div className='nicknameBox'>
      <img src={emticonImg}/>
      <span>{nickname}님 반갑습니다.</span>

      </div>
      <div className='timeBox'>
      <CurrentTimer/>
      <div className='myinfoBox'>
       <img src={infoImg}/>
       <span>나의정보</span>
      </div>
      <div className='logoutBox'>
        <img onClick={()=>alert('로그아웃')} src={logoutImg}/>
      <span>로그아웃</span>
      </div>
      </div>
     

      </div>
    
     
     </Header>
     <div className='sideBar'>
      <LeftBar/>

     </div>

     
    </div>
  )
}

export default Main
