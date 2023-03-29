//componente principal
import React, { useEffect, useState } from "react";
import CreateTask from "../modals/CreateTask";

const TodoList = () => {
  const [modal, setModal] = useState(false);
  //const modal = useState(false).modal;
  //const setModal = useState(false).setModal
  const [taskList, setTaskList] = useState([]);
  //const taskList = useState([]).taskList;
  //const setTaskList = use.State([]).setTaskList;

  useEffect(() => {
    let arr = localStorage.getItem("taskList")

    if(arr){
      let obj = JSON.parse(arr)
      setTaskList(obj)
    }
  }, [])

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTaskList(tempList);
    setModal(false)
  };

  return (
    <>
      <div className="header text-center">
        <h3>To-Do List</h3>
        <button className="button mt-2" onClick={() => setModal(true)}>
          Adicionar
        </button>
      </div>
      <div className="task-container">
        {taskList.map((obj) => (
          <li>{obj.Name}</li>
        ))}
      </div>
      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};

export default TodoList;
