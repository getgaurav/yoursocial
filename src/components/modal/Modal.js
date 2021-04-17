import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

export default function Modal({ open, onClose, component }) {

  // This will store other props component in a variable and we use any where this var as component
  const ChildComponent = component;


  useEffect(() => {
    const Appbody = document.getElementById('app').style;
    if (open) {
      Appbody.top = `-${window.scrollY}px`;
      Appbody.position = `fixed`;
    } else {
      const scrollY = Appbody.top;
      Appbody.position = ``;
      Appbody.top = ``;
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [open]);




  if (!open) return null;
  return ReactDOM.createPortal(
    <>
    <Background/>
    <ModalPage>
      <ChildComponent onClose={onClose}/>
    </ModalPage>
    </>,

    document.getElementById("portal")
  );
}


// styled components 

const ModalPage = styled.div`
  width:100%;
  z-index: 1002;
  position:relative;
  top:0;
  left:0;
  bottom:0;
  right:0;
`;
const Background = styled.div`
  width:100%;
  height:100%;
  position:fixed;
  z-index:1001;
  background-color: rgba(255, 255, 255, 0.8);
  animation: fade 0.3s ease-in-out;
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
