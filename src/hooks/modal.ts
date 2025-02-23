import { useState } from "react";

export const modalHook = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return {
    modal,
    toggle,
  };
};
