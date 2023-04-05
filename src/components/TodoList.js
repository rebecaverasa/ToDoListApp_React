import React, { useEffect, useState } from "react";
import CreateTask from "../modals/CreateTask";
import Card from "./Cards";

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("taskList");

    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  const deleteTask = (index) => {
    let tempList = [...taskList];
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
  };

  const updateListArray = (obj, index) => {
    let tempList = [...taskList];
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
  };

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    let tempList = [...taskList];
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    setModal(false);
  };

  return (
    <>
      <div className="header">
        <h1>To-Do List</h1>
        <button className="button" onClick={() => setModal(true)}>
          <i class="add-icon fa-square-plus fa-regular"></i>
        </button>
      </div>
      <div
        className="task-container"
        link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="SUA_INTEGRITY_CODE"
        crossorigin="anonymous"
      >
        {taskList &&
          taskList.map((obj, index) => (
            <Card
              key={index}
              taskObj={obj}
              index={index}
              deleteTask={deleteTask}
              updateListArray={updateListArray}
            />
          ))}
      </div>
      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};

export default TodoList;