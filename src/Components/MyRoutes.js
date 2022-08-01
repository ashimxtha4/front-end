import React from "react";
import { Routes, Route } from "react-router-dom";
import Projects from "../Pages/Project";
import Task from "../Pages/Task";
import Profile from "../Pages/Profile";
import DashBoard from "../Pages/DashBoard";
import SignUp from "../Pages/SignUp";
import LogIn from "../Pages/LogIn";
import LogInFormik from "../Pages/LogInFormik";
import SignUpFormik from "../Pages/SignUpFormik";
import AdminProject from "../Pages/Admin/AdminProject";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/task" element={<Task />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<LogIn />} />
      <Route path="/admin/project" element={<AdminProject />} />
      <Route path="/loginformik" element={<LogInFormik />} />
      <Route path="/signupformik" element={<SignUpFormik />} />
    </Routes>
  );
};

export default MyRoutes;
