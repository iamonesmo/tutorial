function Backdrop(props) {
  //props.onCancel is passed a pointer to the closeModalHandler function
  //div being a buit-in component, it has it's own onClick
  // to which we then pass the pointer to the closeModalHandler function
  return <div className="backdrop" onClick={props.onCancel} />;
}

export default Backdrop;
