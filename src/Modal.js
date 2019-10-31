import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elRef = useRef(null);

  // render same div ONCE
  if (!elRef.current) {
    const div = document.createElement("div");
    elRef.current = div;
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);
    // return a function, that's the CLEAN UP function
    return () => modalRoot.removeChild(elRef.current); // only run on close of modal
  }, []); // only run once (empty array - no dependencies)

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
