import React, { useEffect, useRef, FunctionComponent } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

const Modal: FunctionComponent = ({ children }) => {
  const elRef = useRef(document.createElement("div"));

  useEffect(() => {
    if (!modalRoot) {
      return;
    }
    modalRoot.appendChild(elRef.current);
    // return a function, that's the CLEAN UP function
    return () => {
      modalRoot.removeChild(elRef.current);
    }; // only run on close of modal
  }, []); // only run once (empty array - no dependencies)

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
