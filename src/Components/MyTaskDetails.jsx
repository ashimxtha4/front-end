import React from "react";
import { BsFillCircleFill } from "react-icons/bs";
import "../Styles/MyTaskDetails.css";

const MyTaskDetails = (props) => {
  return (
    <div className="mytask-details-main-div">
      <div className="mytask-details-icon-div" id="icon-div">
        {props.status === "complete" ? (
          <BsFillCircleFill style={{ color: "green" }} />
        ) : props.status === "inprogress" ? (
          <BsFillCircleFill style={{ color: "orange" }} />
        ) : (
          <BsFillCircleFill style={{ color: "gray" }} />
        )}
      </div>
      <div className="mytask-details-right-div">
        <div className="mytask-details-title-div">
          <h3>{props.tasktitle}</h3>
        </div>
        <div className="mytask-details-date-div">
          <span>{props.taskdate}</span>
        </div>
      </div>
    </div>
  );
};

export default MyTaskDetails;
