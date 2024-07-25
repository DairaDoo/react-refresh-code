import classes from "./Modal.module.css";

// otra forma de sacar el valor es deconstruyendolo.
// asi sacamos el objeto sin necesidad de usar props.children.
function Modal({ children }) {
  return (
    <>
      <div className={classes.backdrop} />
      <dialog open className={classes.modal}>{children}</dialog>
    </>
  );
}

export default Modal;
