function Modal(props) {
  //props.onButtonClick is passed a pointer to the closeModalHandler function
  //button being a buit-in component, it has it's own onClick
  // to which we then pass the pointer to the closeModalHandler function
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={props.onButtonClick}>
        Cancel
      </button>
      <button className="btn" onClick={props.onButtonClick}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
