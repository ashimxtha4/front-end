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
import ChangePassword from "../Pages/ChangePassword";
import ResetPassword from "../Pages/ResetPassword";
import FormDialog from "./LoginForgotPasswordForm";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/task" element={<Task />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/changepassword" element={<ChangePassword />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/formdialog" element={<FormDialog />} />
      <Route path="/" element={<LogIn />} />
      <Route path="/admin/project" element={<AdminProject />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />

    </Routes>
  );
};

export default MyRoutes;
