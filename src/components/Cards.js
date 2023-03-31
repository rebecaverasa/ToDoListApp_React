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

  return (
    <div className="card-wrapper">
      <div className="card-top"></div>
      <div class="task-holder">
        <span id="card-title">{taskObj.Name}</span>
        <p className="description">{taskObj.Description}</p>
        <div className="cardFooter">
          <i class="fa-edit far " onClick={() => setModal(true)}></i>
          <i class="fa-regular fa-circle-xmark" onClick={handleDelete}></i>
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
