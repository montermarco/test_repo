import React, {useState, forwardRef, useImperativeHandle} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {fixed, colors} from '../utilities';
import Close from '../elements/svg/Close';


const ModalBase = forwardRef(({children, className, type }, ref) => {

  const [display, setDisplay] = useState(false);
  
  useImperativeHandle(ref, () => {
    return {
      open: () => openModal(),
      close: () => close()
    }
  });

  const openModal = () => {
    setDisplay(true);
  }

  const close = () => {
    setDisplay(false);
  }

  if(display){    
    return ReactDOM.createPortal(
      <div className={className}>
        <div className="back_drop">
          <div className="content">
            <div onClick={close} className="close"><Close/></div>
            {children}
          </div> 
        </div> 
      </div>, document.getElementById('modal-root'));
  }
  return null;
})

const Modal = styled(ModalBase)`
  ${fixed()};
  bottom: 0;
  right: 0;

  .back_drop{
    ${fixed()};
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    z-index: 100;
    background-color: rgba(0,0,0, .6);

    .close{
      position: relative;      
      top: 5%;
      left: 90%;
    }

    .content{
      position: relative;
      top: 50%;
      left:50%;
      height: 60vh;
      width: 90%;      
      border-radius: .5rem;
      transform: translate(-50%, -50%);
      background-color: ${colors.shadow_dark};
      box-shadow: 0 0 10px rgba(0,0,0, .3);
      z-index: 101;
    }
  }
`;

export default Modal;
