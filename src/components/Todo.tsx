import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

type Props = {
  title: string;
};

function Todo({ title }: Props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const deleteHandler = () => {
    setModalIsOpen(true);
  };

  const closeModalHandler = () => {
    setModalIsOpen(false);
  };
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="actions">
        <button className="btn" type="button" onClick={deleteHandler}>
          삭제
        </button>
        {modalIsOpen && (
          <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
        )}
        {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
      </div>
    </div>
  );
}

export default Todo;
