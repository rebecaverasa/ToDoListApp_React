import React, { useState } from "react";
import EditTask from "../modals/EditTask";

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const updateTask = (obj) => {
    updateListArray(obj, index);
  };

  const handleDelete = () => {
    deleteTask(index);
  };

  const handleCheck = (e) => {
    const isChecked = e.target.checked;
    const updatedTaskObj = { ...taskObj, isChecked };
    updateListArray(updatedTaskObj, index);
  };

  const handleDateTimeChange = (e) => {
    const dateTime = e.target.value;
    const updatedTaskObj = { ...taskObj, dateTime };
    updateListArray(updatedTaskObj, index);
  };

  return (
    <div className="card-wrapper">
      <div className="card-top"></div>
      <div class="task-holder">
        <span
          id="card-title"
          className={taskObj.isChecked ? "title-checked" : "card-title"}
        >
          {taskObj.Name}
        </span>
        <p
          className={taskObj.isChecked ? "description-checked" : "description"}
        >
          {taskObj.Description}
        </p>
        <div className="cardFooter">
          <input
            type="datetime-local"
            className="datetime-input"
            value={taskObj.dateTime}
            onChange={handleDateTimeChange}
          />
          <input
            type="checkbox"
            checked={taskObj.isChecked}
            onChange={handleCheck}
          />
          <i class="edit-icon fa-edit far " onClick={() => setModal(true)}></i>
          <i
            class="delete-icon fa-regular fa-circle-xmark"
            onClick={handleDelete}
          ></i>
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
