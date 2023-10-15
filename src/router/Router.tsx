import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import LeftBar from '../components/sidebar/LeftBar';
import RightBar from '../components/sidebar/RightBar';
import EmployeeManagePage from '../pages/EmployeeManagePage';
import WorkManagePage from '../pages/WorkManagePage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/employeemanage" element={<EmployeeManagePage />} />
        <Route path="/workmanage" element={<WorkManagePage />} />
        <Route path="/paymentmanage" element={<EmployeeManagePage />} />
        <Route path="/insurance" element={<EmployeeManagePage />} />
        <Route path="/certificationmanage" element={<EmployeeManagePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
