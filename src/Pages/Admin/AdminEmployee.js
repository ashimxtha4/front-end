import React,{useEffect,useState} from "react";
import AdimSidebar from "E:/front-end/src/Components/Admin/AdminSidebar.js";
import axios from "axios"
import "E:/front-end/src/Styles/Admin/AdminEmployee.css";
import { BsSearch } from "react-icons/bs";
import {AiOutlineEdit,AiOutlineDelete} from "react-icons/ai"
// import AdminDashboardCard from "../../Components/Admin/AdminDashboardCard";

const AdminDashboard = () => {
  useEffect(() => {
    document.title = 'Admin Employee';
  });

  const user=JSON.parse(localStorage.getItem('response')).user;
  console.log(user)
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


  return (
    <>
      <div className="tempelate-div">
        <div className="side-div">
          <AdimSidebar />
        </div>
        <div className="content-div">
          <div className="employee-header">
            <h2 className="employee-title">Employee</h2>
            <div className="mid-input-div">
              <form className="mid-input-form">
                <input
                  type="text"
                  placeholder="Search Project"
                  className="search-input-field"
                  id="search-input-field"
                  // maxLength={30}
                />
              </form>
              <div className="input-form-search-icon-div">
                <BsSearch className="input-form-search-icon" />
              </div>
            </div>
          </div>
          <div className="admin-employee-table">
          <div className="emp-table-row">
            <div className=" table-tauko"><b>S.No</b></div>
              <div className=" table-tauko"><b>First Name</b></div>
              <div className=" table-tauko"><b>Last Name</b></div>
              <div className=" table-tauko"><b>Email Addres</b></div>
              <div className=" table-tauko"><b>Phone Number</b></div>
              <div className=" table-tauko"><b>Designations</b></div>
              <div className=" table-tauko"><b>No. of Projects</b></div>
              <div className=" table-tauko"><b>Action</b></div>
              </div>
            {members.slice(5,9).map((data,index)=>
            <div className="emp-table-row">
              <div className="table-data ">{index+1}</div>
              <div className="table-data ">{data?.firstName}</div>
              <div className="table-data ">{data?.lastName}</div>
              <div className="table-data ">{data?.email}</div>
              <div className="table-data ">{data?.phoneNumber}</div>
              <div className="table-data ">{data?.designation}</div>
              <div className="table-data ">{data?.projects}</div>
              <div className="table-data ">
                <div className="admin-dash-button-div">
                  <button className="edit"><AiOutlineEdit /></button>
                  <button className="delete"><AiOutlineDelete /></button>
                </div>
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
