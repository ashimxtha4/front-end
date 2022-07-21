import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Projects from '../Pages/Project'
import Task from '../Pages/Task'
import Notice from '../Pages/Notice'
import Events from '../Pages/Events'
import Profile from '../Pages/Profile'
import DashBoard from '../Pages/DashBoard'
import SignUp from '../Pages/SignUp';

const MyRoutes = () => {
  return (
    <Routes>
    
    <Route path='/' element={<DashBoard />} />
    <Route path='/projects' element={<Projects />} />
    <Route path='/task' element={<Task />} />
    <Route path='/notice' element={<Notice />} />
    <Route path='/events' element={<Events />} />
    <Route path='/profile' element={<Profile />} />
    <Route path='/signup' element={<SignUp />}/>
  </Routes>
  )
}

export default MyRoutes