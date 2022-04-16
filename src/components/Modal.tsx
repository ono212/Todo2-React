type props = {
  onCancel: () => void;
  onConfirm: () => void;
};

function Modal({ onCancel, onConfirm }: props) {
  const cancelHandler = () => {
    // wrapper함수 (그냥 밑에 onClick에서 props.onCancel해도 되는데 이렇게 감싸는 방법도 있다는 것)
    onCancel();
  };

  const confirmHandler = () => {
    onConfirm();
  };
  return (
    <div className="modal">
      <p>정말 삭제하시겠습니까?</p>
      <button className="btn btn--alt" type="button" onClick={cancelHandler}>
        취소
      </button>
      <button className="btn" type="button" onClick={confirmHandler}>
        확인
      </button>
    </div>
  );
}

export default Modal;
