import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import LeftBar from '../components/sidebar/LeftBar';
import RightBar from '../components/sidebar/RightBar';
import EmployeeManagePage from '../pages/EmployeeManagePage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/employeemanage" element={<EmployeeManagePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
