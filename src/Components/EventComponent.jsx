import React from "react";
import "../Styles/EventComponent.css";
import { BsFillCircleFill } from "react-icons/bs";
import EventCalendarDetails from "./EventCalendarDetails";

const EventComponent = (props) => {
  return (
    <div className="event-main-div">
      <div className="event-title-div">
        <h2>Events</h2>
      </div>

      <div className="event-date-details-div">
        <h3>July 22, 2022</h3>
      </div>
      <hr></hr>
      <div className="event-date-block-div">
        <EventCalendarDetails />
      </div>

      <div className="event-bot-div">
        <div className="event-bot-icon-div">
          <BsFillCircleFill />
        </div>
        <div className="event-bot-text-div">
          <span>Meeting with developer</span>
        </div>
        <div className="event-bot-date-div">
          <span>11:30am</span>
        </div>
      </div>
    </div>
  );
};

export default EventComponent;
