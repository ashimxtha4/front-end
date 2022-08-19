import React, { useEffect, useState } from "react";
import "../Styles/TeamMemberComponent.css";
import TeamMemberDetails from "./TeamMemberDetails";
import profilepicsmall1 from "../Images/profilepicsmall1.png";
// import profilepicsmall2 from "../Images/profilepicsmall2.png";
import axios from "axios";

const TeamMemberComponent = (props) => {
  useEffect(() => {
    const getUser = async () => {
      try {
        const userTokenData = await axios.get(
          "http://localhost:3000/projectmember/getAllProjectMembers",
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );

        // console.log(userTokenData.data.developers, "User token getone data.");
        setUserTokenDataState(userTokenData.data.developers);
      } catch (err) {
        console.log("Error get request:", err);
      }
    };
    getUser();
  }, []);

  const [userTokenDataState, setUserTokenDataState] = useState();

  // const [userTokenDataState, setUserTokenDataState] = useState([{
  //   firstName: "Nice",
  //   lastName: "Nice",
  //   designation: "Nice",
  // }]);

  // console.log("User token data state:", userTokenDataState);

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
          {userTokenDataState?.map((items) => (
            <TeamMemberDetails
              memberpic={profilepicsmall1}
              membername={
                items.developer.firstName + " " + items.developer.lastName
                // items.firstName + " " + items.lastName
              }
              memberposition={items.developer.designation}
            />
          ))}
          {/* <TeamMemberDetails
            memberpic={profilepicsmall1}
            membername="Nice Name"
            memberposition="UI/UX Designer"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberComponent;
