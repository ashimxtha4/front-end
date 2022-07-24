import React from "react";
import "../Styles/TeamMemberComponent.css";
import TeamMemberDetails from "./TeamMemberDetails";
import profilepicsmall1 from "../Images/profilepicsmall1.png";
import profilepicsmall2 from "../Images/profilepicsmall2.png";

const TeamMemberComponent = (props) => {
  return (
    <div className="members-main-div">
      <div className="members-title-div">
        <h2>{props.cardtitle}</h2>
      </div>

      <div className="members-body-div">
        {/* <div className="members-body-top">
          <span>{props.cardtabtitle1}</span>
          <span>{props.cardtabtitle2}</span>
        </div> */}
        <div className="members-body-bot">
          <TeamMemberDetails memberpic={profilepicsmall1} membername="Nice Name" memberposition="UI/UX Designer"/>
          <TeamMemberDetails memberpic={profilepicsmall2} membername="Kurosaki Ichigo" memberposition="Web Developer"/>
        </div>

        <div className="members-footer-div">
          <a href="#">See more</a>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberComponent;
