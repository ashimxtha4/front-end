import React from "react";
import "../Styles/EventComponent.css";
// import { BsFillCircleFill } from "react-icons/bs";
import EventCalendarDetails from "./EventCalendarDetails";

const EventComponent = () => {
  const date = new Date();
  let resultingDate = [("0" + date.getDate()).slice(-2)];

  for (let i = 1; i <= 5; i++) {
    let result = date.setDate(date.getDate() + 1); // Get tomorrow's date of the next 5 days.
    result = new Date(result).getDate();
    let newResult = ("0" + result).slice(-2); // Add 0 to single digit date.
    resultingDate.push(newResult);
  }

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
        {resultingDate
          .slice(0, 5)
          .map((items, index) =>
            index === 0 ? (
              <EventCalendarDetails todayDate={items} classDot="event-dot" />
            ) : (
              <EventCalendarDetails todayDate={items} />
            )
          )}
      </div>

      {/* <div className="event-bot-div">
        <div className="event-bot-icon-div">
          <BsFillCircleFill />
        </div>
        <div className="event-bot-text-div">
          <span>Meeting with developer</span>
        </div>
        <div className="event-bot-date-div">
          <span>11:30am</span>
        </div>
      </div> */}
    </div>
  );
};

export default EventComponent;
