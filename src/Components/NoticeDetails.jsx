import React from "react";
import "../Styles/NoticeDetails.css"

const NoticeDetails = () => {
  return (
    <div className="notice-details-main-div">
      <div className="notice-details-top-div">
        <div className="notice-details-title-div">
            <h3>Login page design reviewed and finalized.</h3>
        </div>
        <div className="notice-details-date-div">
            40 July, 2022
        </div>
      </div>
      <div className="notice-details-bot-div">
        <span>PM Name</span>
      </div>
    </div>
  );
};

export default NoticeDetails;
