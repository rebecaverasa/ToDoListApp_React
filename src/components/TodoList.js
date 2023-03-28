//componente principal
import React, { useState } from "react";
import CreateTask from "../modals/CreateTask";

const TodoList = () => {
  const [modal, setModal] = useState(false); //definir o valor inicial de modal como falso usando o hook useState. Tambem eh criada a funcao setModal.
  //setModal permite atualizar o estado modal posteriormente.
  const toggle = () => {
    setModal(!modal);
  }; //a funcao toggle quando eh chamada, alterna o estado do "modal" para a forma oposta do seu estado anterior.
  //onClick: quando ha um clic, chama a funcao setModel com o valor true, exibindo a pagina modal p add task.
  return (
    <>
      <div className="header text-center">
        <h3>To-Do List</h3>
        <button className="button mt-2" onClick={() => setModal(true)}>
          Adicionar
        </button>
      </div>
      <div className="task-container"></div>
      <CreateTask toggle={toggle} modal={modal} />
    </>
  );
};

export default TodoList;
