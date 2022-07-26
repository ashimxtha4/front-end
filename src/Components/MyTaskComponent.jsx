import React, { useState } from "react";
import MyTaskDetails from "./MyTaskDetails";
import "../Styles/MyTaskComponent.css";

const taskArrayOverall = [
  {
    title: "Ov Title 1",
    date: "2022-01-01",
  },
  {
    title: "Ov Title 2",
    date: "2022-01-02",
  },
  {
    title: "Ov Title 3",
    date: "2022-01-03",
  },
];

const taskArrayOwn = [
  {
    title: "Own Title 1",
    date: "2022-01-01",
  },
  {
    title: "Own Title 2",
    date: "2022-01-02",
  },
  {
    title: "Own Title 3",
    date: "2022-01-03",
  },
];

const MyTaskComponent = (props) => {
  const [cardStatus, setState] = useState("overall");

  const changeOverAll = () => {
    setState("overall");
  };

  const changeToDo = () => {
    setState("todo");
  };

  return (
    <div className="mytask-main-div">
      <div className="mytask-title-div">
        <h2>{props.cardtitle}</h2>
      </div>

      <div className="mytask-body-div">
        <div className="mytask-body-top">
          <button onClick={changeOverAll}>{props.cardtabtitle1}</button>
          <button onClick={changeToDo}>{props.cardtabtitle2}</button>
        </div>
        <div className="mytask-body-bot">
          {cardStatus === "overall"
            ? // eslint-disable-next-line array-callback-return
              taskArrayOverall.map((item, index) => {
                if (index < 2)
                  return (
                    <MyTaskDetails
                      tasktitle={item.title}
                      taskdate={item.date}
                    />
                  );
              })
            // eslint-disable-next-line array-callback-return
            : taskArrayOwn.map((item, index) => {
                if (index < 2)
                  return (
                    <MyTaskDetails
                      tasktitle={item.title}
                      taskdate={item.date}
                    />
                  );
              })}
        </div>

        <div className="mytask-footer-div">
          <a href="#">See more</a>
        </div>
      </div>
    </div>
  );
};

export default MyTaskComponent;
