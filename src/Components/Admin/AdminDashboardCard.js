import React from 'react'
import "../../Styles/Admin/AdminDashboardCard.css";

function AdminDashboardCard(props) {
  return (
    <div className='admin-dashboard-card'>
        <p className='lable'>Total Employee</p>
        <div className='number'>40</div>
    </div>
  )
}

export default AdminDashboardCard