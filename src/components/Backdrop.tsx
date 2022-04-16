/* eslint-disable jsx-a11y/click-events-have-key-events */
type props = {
  onClick: any;
};

function Backdrop({ onClick }: props) {
  return (
    <div
      className="backdrop"
      onClick={onClick}
      onKeyDown={onClick}
      role="dialog"
    />
  );
}

export default Backdrop;
