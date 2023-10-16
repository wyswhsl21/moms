import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import userImg from '../../assets/sideBar/usermanage.png';
import employee from '../../assets/sideBar/employeemanage.png';
import payment from '../../assets/sideBar/electronicpayment.png';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Tooltip } from '@mui/material';
import '../../components/sidebar/LeftBar.scss';

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
    <div className="sideBox left">
      <div className="menuBox">
        {MenuList.map((item) => (
          <Tooltip key={item.id} placement="right" title={item?.name}>
            <button onClick={() => navigateHandler(item)} key={item.id}>
              <item.src />
              <span>{item.name}</span>
            </button>
          </Tooltip>
        ))}
      </div>
      <Tooltip placement="right" title="공통설정">
        <button className="settingButton">
          <SettingsOutlinedIcon />
          <span>공통설정</span>
        </button>
      </Tooltip>

      <Outlet />
    </div>
  );
};

export default LeftBar;
