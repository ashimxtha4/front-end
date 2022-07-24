import React from "react";
import NoticeDetails from "./NoticeDetails";
import "../Styles/NoticeComponent.css"

const NoticeComponent = () => {
  return (
    <div className="notice-main-div">
      <div className="notice-title-div">
        <h2>Notice</h2>
      </div>

      <div className="notice-body-top-div">
        <div className="notice-body-left">
          <button>Today</button>
        </div>
        <div className="notice-body-right">
        <button>History</button>
        </div>
      </div>
      
      <div className="notice-body-bot-div">
        <NoticeDetails />
      </div>
    </div>
  );
};

export default NoticeComponent;
