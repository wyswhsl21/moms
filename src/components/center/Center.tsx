import React from 'react';
import './Center.scss';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LockIcon from '@mui/icons-material/Lock';
import { yellow } from '@mui/material/colors';
import { userData } from '../../constants/constans';
import profileImg from '../../assets/profile/짱구.svg';
const Center = ({ isLogin }: { isLogin: boolean }) => {
  console.log(userData);
  const centerMenuList = [];
  return isLogin ? (
    <div className="Center">
      <div className="title">
        <span>나의 기본정보</span>
      </div>
      <div className="myItems">
        <div>
          <img src={profileImg} />
          <span>{userData?.[0]?.username}</span>
        </div>
        <div>
          <div className="circle">
            <StarBorderIcon sx={{ color: 'orange' }} />
          </div>
          <span>생년월일</span>
          <span className="sub"> {userData?.[0]?.birthdate}</span>
        </div>
        <div>
          <div className="circle">
            <ContactMailIcon sx={{ color: 'green' }} />
          </div>
          <span>이메일</span>
          <span className="sub">{userData?.[0]?.email}</span>
        </div>
        <div>
          <div className="circle">
            <HomeIcon sx={{ color: 'purple ' }} />
          </div>
          <span>거주지</span>
          <span className="sub">{userData?.[0]?.residence}</span>
        </div>
        <div>
          <div className="circle">
            <LocalPhoneIcon sx={{ color: 'skyblue ' }} />
          </div>
          <span>연락처</span>
          <span className="sub">{userData?.[0]?.contact}</span>
        </div>
        <div>
          <div className="circle">
            <LockIcon sx={{ color: 'white ' }} />
          </div>
          <span>비밀번호</span>
          <span className="sub">핀번호 6자리({userData?.[0]?.password})</span>
        </div>
      </div>
      <div />
    </div>
  ) : (
    <div className="Center">나의 정보 들어가기 전 화면</div>
  );
};

export default Center;
