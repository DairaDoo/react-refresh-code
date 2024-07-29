import classes from "./Modal.module.css";

// otra forma de sacar el valor es deconstruyendolo.
// asi sacamos el objeto sin necesidad de usar props.children.
function Modal({ children, onClose }) {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose}/>
      <dialog open className={classes.modal}>{children}</dialog>
    </>
  );
}

export default Modal;
