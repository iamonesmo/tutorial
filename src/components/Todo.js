import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onButtonClick={closeModalHandler} />}
      {/* {modalIsOpen ? <Modal /> : null} */}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
      {/* {modalIsOpen ? <Backdrop /> : null} */}
    </div>
  );
}

export default Todo;
