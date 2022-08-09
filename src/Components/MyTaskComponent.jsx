import React, { useState } from "react";
import MyTaskDetails from "./MyTaskDetails";
import "../Styles/MyTaskComponent.css";
import { Link } from "react-router-dom";

const taskArray = [
  {
    title: "Ov Title 1",
    date: "2022-01-01",
    status: "complete",
  },
  {
    title: "Ov Title 2",
    date: "2022-01-02",
    status: "assigned",
  },
  {
    title: "Ov Title 3",
    date: "2022-01-03",
    status: "complete",
  },
  {
    title: "Ov Title 3",
    date: "2022-01-03",
    status: "complete",
  },
  {
    title: "Ov Title 3",
    date: "2022-01-03",
    status: "complete",
  },
  {
    title: "Ov Title 3",
    date: "2022-01-03",
    status: "complete",
  },
  {
    title: "Ov Title 1",
    date: "2022-01-01",
    status: "assigned",
  },
  {
    title: "Ov Title 2",
    date: "2022-01-02",
    status: "assigned",
  },
  {
    title: "Ov Title 3",
    date: "2022-01-03",
    status: "assigned",
  },
  {
    title: "Ov Title 3",
    date: "2022-01-03",
    status: "assigned",
  },
  {
    title: "Ov Title 3",
    date: "2022-01-03",
    status: "assigned",
  },
  {
    title: "Ov Title 3",
    date: "2022-01-03",
    status: "assigned",
  },
];

const MyTaskComponent = (props) => {
  const [cardStatus, setState] = useState("overall");

  return (
    <div className="mytask-main-div">
      <div className="mytask-title-div">
        <h2>{props.cardtitle}</h2>
      </div>

      <div className="mytask-body-div">
        <div className="mytask-body-top">
          <button
            onClick={() => {
              setState("overall");
            }}
            style={{
              color: cardStatus === "overall" && "#1f4583",
              textDecoration: cardStatus === "overall" && "underline",
              textDecorationThickness: cardStatus === "overall" && "2px",
              textUnderlineOffset: cardStatus === "overall" && "10px",
            }}
          >
            Overall (4)
          </button>
          <button
            onClick={() => {
              setState("assigned");
            }}
            style={{
              color: cardStatus === "assigned" && "#1f4583",
              textDecoration: cardStatus === "assigned" && "underline",
              textDecorationThickness: cardStatus === "assigned" && "2px",
              textUnderlineOffset: cardStatus === "assigned" && "10px",
            }}
          >
            To-do (2)
          </button>
        </div>
        <div className="mytask-body-bot">
          {cardStatus === "overall"
            ? taskArray.map((item) => (
                <MyTaskDetails
                  tasktitle={item.title}
                  taskdate={item.date}
                  status={item.status}
                />
              ))
            : cardStatus === "assigned" &&
              taskArray.map(
                (item) =>
                  item.status === cardStatus && (
                    <MyTaskDetails
                      tasktitle={item.title}
                      taskdate={item.date}
                      status={item.status}
                    />
                  )
              )}
        </div>

        <div className="mytask-footer-div">
          <Link exact to="/task">
            See more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyTaskComponent;
