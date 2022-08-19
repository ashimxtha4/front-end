import React, { useEffect, useState } from "react";
import MyTaskDetails from "./MyTaskDetails";
import "../Styles/MyTaskComponent.css";
import { Link } from "react-router-dom";
import axios from "axios";

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
    status: "inprogress",
  },
  {
    title: "Ov Title 3",
    date: "2022-01-03",
    status: "inprogress",
  },
  {
    title: "Ov Title 3",
    date: "2022-01-03",
    status: "inprogress",
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
    status: "inprogress",
  },
  {
    title: "Ov Title 3",
    date: "2022-01-03",
    status: "inprogress",
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
  useEffect(() => {
    const getAllTasks = async () => {
      try {
        const allTaskData = await axios.get(
          "http://localhost:3000/task/getalltasks",
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );

        console.log(allTaskData.data.tasks, "User token getone data.");
        setAllTaskData(allTaskData.data.tasks);
      } catch (err) {
        console.log("Error get request:", err);
      }
    };
    getAllTasks();
  }, []);


  const [cardStatus, setState] = useState("overall");
  const [allTaskData, setAllTaskData] = useState();

  return (
    <div className="mytask-main-div">
      <div className="mytask-title-div">
        <h2>My Tasks</h2>
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
              setState("todo");
            }}
            style={{
              color: cardStatus === "todo" && "#1f4583",
              textDecoration: cardStatus === "todo" && "underline",
              textDecorationThickness: cardStatus === "todo" && "2px",
              textUnderlineOffset: cardStatus === "todo" && "10px",
            }}
          >
            To-do (2)
          </button>
        </div>
        <div className="mytask-body-bot">
          {cardStatus === "overall"
            ? allTaskData?.slice(0, 2).map((item) => (
                <MyTaskDetails
                  tasktitle={item?.title}
                  taskdate={item?.date}
                  status={item?.status}
                />
              ))
            : cardStatus === "todo" ?
            allTaskData?.slice(0, 2).map(
                (item) =>
                  item.status !== "complete" && (
                    <MyTaskDetails
                      tasktitle={item?.title}
                      taskdate={item?.date}
                      status={item?.status}
                    />
                  )
              ): null}
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
