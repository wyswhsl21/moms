import React from 'react'
import { Outlet } from 'react-router-dom'
import userImg from '../../assets/sideBar/usermanage.png'
import employee from '../../assets/sideBar/employeemanage.png'
import payment from '../../assets/sideBar/electronicpayment.png'
import '../../components/sidebar/SideBar.scss'
const LeftBar = () => {
    const MenuList =[{id:0,name:'고객관리',src:userImg},{id:1,name:'임직원관리',src:employee},{id:2,name:'전자결제',src:payment}]
  return (
    <div className='sideBox'>
        <div className='menuBox'>
        {MenuList.map((item,idx)=>
            <div key={item.id} className='menuItem'>
        <img src={item.src}/>
        <span>{item.name}</span>
       </div>
        )}
        </div>
        
        <button className='settingBtn'>
            <img src={userImg}/>
            <span>공통설정</span>
        </button>
       
      <Outlet/>
    </div>
  )
}

export default LeftBar
