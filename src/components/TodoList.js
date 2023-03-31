//componente principal
import React, { useEffect, useState } from "react";
import CreateTask from "../modals/CreateTask";
import Card from "./Cards";

const TodoList = () => {
  const [modal, setModal] = useState(false);
  //const modal = useState(false).modal;
  //const setModal = useState(false).setModal
  const [taskList, setTaskList] = useState([]);
  //const taskList = useState([]).taskList;
  //const setTaskList = use.State([]).setTaskList;

  useEffect(() => {
    let arr = localStorage.getItem("taskList");

    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const updateListArray = (obj, index) => {
    let tempList = taskList;
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    setModal(false);
  };
  //AJEITAR cores
  return (
    <>
      <div className="header">
        <h1>To-Do List</h1>
        <button onClick={() => setModal(true)}>
          <i class="fa-square-plus fa-regular"></i>
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
