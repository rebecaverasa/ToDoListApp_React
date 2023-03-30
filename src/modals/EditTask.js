//Definindo a janela modal (pop-up) que ira aparecer depois de clicar no botao adicionar. Feita com reactstrap.
import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditTaskPopup = ({ modal, toggle, updateTask, taskObj }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    const {name, value} = e.target

    if(name ==="taskname") {
      setTaskName(value)
    } else {
      setDescription(value)
    }
  }

  useEffect(() => {
    setTaskName(taskObj.Name)
    setDescription(taskObj.Description)
  },[])

  const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = {}
    tempObj['Name'] = taskName
    tempObj['Description'] = description
    updateTask(tempObj)
  }

  return (
    //Se isOpen for true, a janela modal sera renderizada. Toggle eh usado p fechar a janela apos clic em qlqr botao.
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Editar Task</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label>Titulo</label>
            <input
              type="text"
              className="form-control"
              value={taskName}
              onChange={handleChange}
              name="taskname"
            ></input>
          </div>
          <div className="form-group">
            <label>Descricao</label>
            <textarea
              rows="5"
              className="form-control"
              value={description}
              onChange={handleChange}
              name="description"
            ></textarea>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleUpdate}>
          Salvar
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditTaskPopup;
