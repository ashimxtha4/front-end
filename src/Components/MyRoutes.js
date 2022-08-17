import React from "react";
import { Routes, Route } from "react-router-dom";
import Projects from "../Pages/Project";
import Task from "../Pages/Task";
import Profile from "../Pages/Profile";
import DashBoard from "../Pages/DashBoard";
import SignUp from "../Pages/SignUp";
import LogIn from "../Pages/LogIn";

import AdminProject from "../Pages/Admin/AdminProject";
import AdminDashboard from "../Pages/Admin/AdminDashboard";
import AdminEmployee from "../Pages/Admin/AdminEmployee";
import AdminProfile from "../Pages/Admin/AdminProfile";

import ChangePassword from "../Pages/ChangePassword";
import ResetPassword from "../Pages/ResetPassword";
import AdminProjectTasks from "../Pages/Admin/AdminProjectTasks";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/task" element={<Task />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/changepassword" element={<ChangePassword />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<LogIn />} />
      <Route path="/admin/project" element={<AdminProject />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/employee" element={<AdminEmployee />} />
      <Route path="/admin/profile" element={<AdminProfile />} />
      <Route path="/admin/project/details" element={<AdminProjectTasks />} />
      <Route path="/admin/profile" element={<Profile />} />
    </Routes>
  );
};

export default MyRoutes;
