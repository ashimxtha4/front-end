import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Projects from '../Pages/Project'
import Task from '../Pages/Task'
import Notice from '../Pages/Notice'
import Events from '../Pages/Events'
import Profile from '../Pages/Profile'
import DashBoard from '../Pages/DashBoard'

const MyRoutes = () => {
  return (
    <Routes>
    <Route path='/' element={<DashBoard />} />
    <Route path='/projects' element={<Projects />} />
    <Route path='/task' element={<Task />} />
    <Route path='/notiec' element={<Notice />} />
    <Route path='/events' element={<Events />} />
    <Route path='/profile' element={<Profile />} />
  </Routes>
  )
}

export default MyRoutes