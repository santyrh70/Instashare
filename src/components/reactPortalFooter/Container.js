
import { createPortal } from "react-dom";
import ReactPortalFooter from "./ReactPortalFooter";

const Container = () => {

  const reactDivElement = document.getElementById('react-portal');
  return !!reactDivElement ? createPortal(<ReactPortalFooter/>, reactDivElement) : null;
}

export default Container;