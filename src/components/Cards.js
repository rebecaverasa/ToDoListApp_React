import React, { useState } from "react";
import EditTask from "../modals/EditTask";

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
  const [modal, setModal] = useState(false);
  const [isChecked, setIsChecked] = useState(
    JSON.parse(localStorage.getItem(`isChecked-${index}`)) || false
  );

  const toggle = () => {
    setModal(!modal);
  };

  const updateTask = (obj) => {
    updateListArray(obj, index);
  };

  const handleDelete = () => {
    deleteTask(index);
  };

  const handleCheck = () => {
    setIsChecked(!isChecked);
    localStorage.setItem(`isChecked-${index}`, !isChecked);
  };

  const [dateTime, setDateTime] = useState("");

  return (
    <div className="card-wrapper">
      <div className="card-top"></div>
      <div class="task-holder">
        <span id="card-title" className={isChecked ? "title-checked" : "card-title"}>{taskObj.Name}</span>
        <p className={isChecked ? "description-checked" : "description"}>{taskObj.Description}</p>
        <div className="cardFooter">
          <input type="datetime-local" className="datetime-input" value={dateTime} onChange={(e) => setDateTime(e.target.value)}/>
          <input type="checkbox" checked={isChecked} onChange={handleCheck} />
          <i class="edit-icon fa-edit far " onClick={() => setModal(true)}></i>
          <i class="delete-icon fa-regular fa-circle-xmark" onClick={handleDelete}></i> 
        </div>
      </div>
      <EditTask
        modal={modal}
        toggle={toggle}
        updateTask={updateTask}
        taskObj={taskObj}
      />
    </div>
  );
};

export default Card;
