import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { Typography } from "@mui/material";
import "../../Styles/Admin/AdminProject.css";
import "../../Styles/Admin/CreateFormModal.css";
import axios from "axios";
import { toast } from "react-toastify";


const projectManagerArray = [
  "Project Manager1",
  "Project Manager2",
  "Project Manager3",
  "Project Manager4",
];

const date = new Date();
let resultingDate = [("0" + date.getDate()).slice(-2)];
let todayDate =
  date.getFullYear().toString() +
  "-" +
  ("0" + (date.getMonth() + 1)).slice(-2) +
  "-" +
  resultingDate;

const CreateFormModal = () => {
  const [pm,setPm]=useState([]);
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState({
    project_name: "",
    project_desc: "",
    id: "",
    project_deadline: "",
  });

  useEffect(()=>{
    const getPm=async()=>{
      const response= await axios.get('http://localhost:3000/user/getall-users');
      setPm(response.data.users);
    }
    getPm();
  },[])

  const handleClickOpen = () => {
    setOpen(true);
    console.log(formData);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formSubmitHandler = async(e) => {
    e.preventDefault();
    // const arr= await formData.projectManager.split(" ")
    // const pmid =arr[1]
    // await setFormData((prevState) => ({
    //   ...prevState,
    //   projectManager: pmid
    // }));
    try{
      const response = await axios.post("http://localhost:3000/project/addproject",formData);
      alert("project created sucessfully")
      toast.success("Project created successfully");
    }catch(err){
      toast.error(err.response.data.msg);
    }
    console.log(formData);
    // console.log(arr)
    setFormData("")
    
  };

  return (
    <div>
      <Button
        variant="outlined"
        disableRipple
        onClick={handleClickOpen}
        className="top-btn"
        style={{ textTransform: "none" }}
      >
        <Typography style={{ color: "white" }}>+ Create</Typography>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <div className="createprojectpopup-inner">
          <h2 className="createprojectpopup-title">Create a Project</h2>
          <form
            className="createprojectpopup-form"
            onSubmit={formSubmitHandler}
          >
            <div className="createprojectpopup-form-top">
              <label htmlFor="projectName">Project Name</label>
              <br />
              <input
                typeof="text"
                name="projectName"
                id="projectName"
                required
                maxLength="50"
                onChange={(e) => {
                  setFormData((prevState) => ({
                    ...prevState,
                    project_name: e.target.value,
                  }));
                }}
                // value={formData.projectName}
                // placeholder="Max 50 characters"
              />
              <br />
              <label htmlFor="projectDesc">Project Description</label>
              <br />
              <textarea
                rows="4"
                // cols="66"
                name="projectDesc"
                id="projectDesc"
                required
                onChange={(e) => {
                  setFormData((prevState) => ({
                    ...prevState,
                    project_desc: e.target.value,
                  }));
                }}
              />
              <br />
            </div>
            <div className="createprojectpopup-form-bot">
              <div className="createprojectpopup-form-bot-assignpm">
                <label htmlFor="assignPm">Assign Project Manager</label>
                <br />
                <select
                  name="assignPm"
                  id="assignPm"
                  required
                  onChange={(e) => {
                    setFormData((prevState) => ({
                      ...prevState,
                      id: e.target.value
                    }));
                  }}
                >
                  <option value="" disabled>
                    Select a PM
                  </option>
                  {pm.map((items) => (
                    <option value={items._id}>{items.firstName} {items.lastName} </option>  
                  ))}
                </select>
              </div>
              <div className="createprojectpopup-form-bot-duedate">
                <label htmlFor="dueDate">Due Date</label>
                <br />
                <input
                  type="date"
                  id="dueDate"
                  name="dueDate"
                  required
                  onChange={(e) => {
                    setFormData((prevState) => ({
                      ...prevState,
                      project_deadline: e.target.value,
                    }));
                  }}
                />
              </div>
            </div>
            <div className="createprojectpopup-form-btn">
              <button
                type="submit"
                className="createprojectpopup-form-create-btn"
              >
                Create
              </button>
              <button
                type="reset"
                className="createprojectpopup-form-cancel-btn"
                onClick={() => {
                  handleClose();
                  setFormData('');
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </Dialog>
    </div>
  );
};

export default CreateFormModal;
