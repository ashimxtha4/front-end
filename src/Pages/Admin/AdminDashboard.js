import React,{useEffect,useState} from "react";
import AdimSidebar from "E:/front-end/src/Components/Admin/AdminSidebar.js";
import {Link} from "react-router-dom"
import "E:/front-end/src/Styles/Admin/AdminDashboard.css";
import AdminDashboardCard from "../../Components/Admin/AdminDashboardCard";
import {AiOutlineEdit,AiOutlineDelete} from "react-icons/ai"
// import { useDispatch, useSelector } from "react-redux";
// import GetAllUserAction from "../../redux/actions/GetAllUserAction";
import axios from "axios";

const AdminDashboard = () => {
//   const dispatch = useDispatch();
//   // dispatch(GetAllUserAction);
// useEffect(()=>{
//   const { userData } = useSelector((state) => state.GetAllUserReducer);
//   dispatch(GetAllUserAction);
// },[])
  const [members,setMembers]=useState([]);
  useEffect( ()=>{
      const retrive = async()=>{
      const response= await axios.get('http://localhost:3000/user/getall-users');
      setMembers(response.data.users);
      console.log(response.data.users,"use effect");
    }
    try{
      retrive();
    }catch(err){
      console.log(err)
    }
    
  },[])


  const user=JSON.parse(localStorage.getItem('response')).user;
  console.log(members,"aaru")
  return (
    <>
      <div className="tempelate-div">
        <div className="side-div">
          <AdimSidebar />
        </div>
        <div className="content-div">
          <div class="body-main-div">
            <div class="body-title-div">
              <h2>Welcome, ADMIN  </h2>
            </div>
            <div class="admin-body-card-div-1">
              <AdminDashboardCard/>
              <AdminDashboardCard/>
              <AdminDashboardCard/>
              <AdminDashboardCard/>
              <AdminDashboardCard/>
            </div>
            <div class="admin-body-card-div-2">
                <p className="table-lable">Employee</p>
                <div className="dashboard-table" >
                    <div className="table-row" style={{backgroundColor:"#E5EEFF"}}>
                    <div className="table-data table-head"><b>S.No</b></div>
                    <div className="table-data table-head"><b>First Name</b></div>
                    <div className="table-data table-head"><b>Last Name</b></div>
                    <div className="table-data table-head"><b>Email Addres</b></div>
                    <div className="table-data table-head"><b>Phone Number</b></div>
                    <div className="table-data table-head"><b>Designations</b></div>
                    <div className="table-data table-head"><b>No. of Projects</b></div>
                    <div className="table-data table-head"><b>ashim</b></div>
                    </div>
                    {members.slice(5,9).map((data,index)=>
                    <div className="table-row">
                      <div className="table-data table-head">{index+1}</div>
                      <div className="table-data table-head">{data?.firstName}</div>
                      <div className="table-data table-head">{data?.lastName}</div>
                      <div className="table-data table-head">{data?.email}</div>
                      <div className="table-data table-head">{data?.phone}</div>
                      <div className="table-data table-head">{data?.designation}</div>
                      <div className="table-data table-head">{data?.projects}</div>
                      <div className="table-data table-head">
                        <div className="admin-dash-button-div">
                          <button className="edit"><AiOutlineEdit /></button>
                          <button className="delete"><AiOutlineDelete /></button>
                        </div>
                      </div>
                    </div>
                    
                    )}
                </div>
                <div className="table-footer-div">
                    <Link exact to="/admin/employee">
                        View More
                    </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;


//   const members = [
//     {
//       sn:1,
//       firstName:"Ashim",
//       lastName:"Shrestha",
//       email:"a@s.com",
//       phone:9841060253,
//       designation:"Full Stack Developer",
//       projects : 4
//   },
//   {
//     sn:2,
//     firstName:"Ashim",
//     lastName:"Shrestha",
//     email:"a@s.com",
//     phone:9841060253,
//     designation:"Full Stack Developer",
//     projects : 4
// },
// {
//   sn:3,
//   firstName:"Ashim",
//   lastName:"Shrestha",
//   email:"a@s.com",
//   phone:9841060253,
//   designation:"Full Stack Developer",
//   projects : 4
// },
// {
//   sn:4,
//   firstName:"Ashim",
//   lastName:"Shrestha",
//   email:"a@s.com",
//   phone:9841060253,
//   designation:"Full Stack Developer",
//   projects : 4
// }
//   ]
