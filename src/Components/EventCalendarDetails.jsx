import React from "react";
import "../Styles/EventCalendarDetails.css";
import { BsFillCircleFill } from "react-icons/bs";

const EventCalendarDetails = (props) => {
  return (
    <div className="event-calendar-details" style={{border: props.classDot ? "1px solid #1F4583" : null}}>
      {props.classDot ? <BsFillCircleFill className={props.classDot} /> : null}
      {/* <BsFillCircleFill className={props.classDot}/> */}
      <span className="event-date">{props.todayDate}</span>
    </div>
  );
};

export default EventCalendarDetails;
