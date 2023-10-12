import React, { useEffect, useState } from 'react';
import Main from '../components/main/Main';
import '../App.scss';
import LeftBar from '../components/sidebar/LeftBar';
const MainPage = () => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);
  }, []);

  return (
    <div className="App">
      <Main />
    </div>
  );
};

export default MainPage;
