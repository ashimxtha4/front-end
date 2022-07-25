import React from "react";

import "../Styles/TeamMemberDetails.css";

const TeamMemberDetails = (props) => {
  return (
    <div className="members-details-main-div">
      <div className="members-details-assigned-div">
        <img src={props.memberpic} alt="profilepic" />
      </div>
      <div className="members-details-right-div">
        <div className="members-details-name-div">
          <h3>{props.membername}</h3>
        </div>
        <div className="members-details-pos-div">
          <h3>{props.memberposition}</h3>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberDetails;
