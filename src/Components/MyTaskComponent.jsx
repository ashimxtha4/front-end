import React from "react";
import MyTaskDetails from "./MyTaskDetails";
import "../Styles/MyTaskComponent.css";

const MyTaskComponent = (props) => {
  return (
    <div className="mytask-main-div">
      <div className="mytask-title-div">
        <h2>{props.cardtitle}</h2>
      </div>

      <div className="mytask-body-div">
        <div className="mytask-body-top">
          <button>{props.cardtabtitle1}</button>
          <button>{props.cardtabtitle2}</button>
        </div>
        <div className="mytask-body-bot">
          <MyTaskDetails  tasktitle="Make design for login page" taskdate="12th July"/>
        </div>

        <div className="mytask-footer-div">
          <a href="#">See more</a>
        </div>
      </div>
    </div>
  );
};

export default MyTaskComponent;
