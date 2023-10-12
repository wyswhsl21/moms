import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import userImg from '../../assets/sideBar/usermanage.png';
import employee from '../../assets/sideBar/employeemanage.png';
import payment from '../../assets/sideBar/electronicpayment.png';
import '../../components/sidebar/SideBar.scss';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const LeftBar = () => {
  const navigate = useNavigate();
  const navigateHandler = (item: any) => {
    navigate(item.path);
  };
  const MenuList = [
    { id: 0, name: '고객관리', src: ManageAccountsOutlinedIcon, path: '/usermanage' },
    { id: 1, name: '임직원관리', src: ArticleOutlinedIcon, path: '/employeemanage' },
    { id: 2, name: '전자결제', src: AddCardOutlinedIcon, path: '/payment' },
  ];
  return (
    <div className="sideBox">
      <div className="menuBox">
        {MenuList.map((item) => (
          <div onClick={() => navigateHandler(item)} key={item.id} className="menuItem">
            <item.src />
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      <button className="settingBtn">
        <SettingsOutlinedIcon />
        <span>공통설정</span>
      </button>

      <Outlet />
    </div>
  );
};

export default LeftBar;
