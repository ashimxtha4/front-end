import React from "react";
import "../Styles/EventCalendarDetails.css";
import { BsFillCircleFill } from "react-icons/bs";

const EventCalendarDetails = () => {
  return (
    <div className="event-calendar-details">
      <BsFillCircleFill className="event-dot"/>
      <span className="event-date">11</span>
    </div>
  );
};

export default EventCalendarDetails;
