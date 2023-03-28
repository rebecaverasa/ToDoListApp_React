//Definindo a janela modal (pop-up) que ira aparecer depois de clicar no botao adicionar. Feita com reactstrap.
import React from "react";
import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CreateTask = ({ modal, toggle }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  return (
    //Se isOpen for true, a janela modal sera renderizada. Toggle eh usado p fechar a janela apos clic em qlqr botao.
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Criar Task</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label>Titulo</label>
            <input
              type="text"
              className="form-control"
              value={taskName}
            ></input>
          </div>
          <div className="form-group">
            <label>Descricao</label>
            <textarea
              rows="5"
              className="form-control"
              value={description}
            ></textarea>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          Criar
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTask;
