import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

/*
that we usually do but in this we will use portals so our code will be.......
<Fragment>
    <Backdrop />
    <ModalOverlay>{props.children}</ModalOverlay>
  </Fragment>;
*/
/*
 {ReactDOM.createPortal(<Backdrop />)}
 CREATE PORTAL NEEDS two argument that whihc to portal and where to portal. we have created one div in  public--->index.html with id. so we will portal to that.
*/
const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
