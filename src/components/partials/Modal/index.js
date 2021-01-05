import React, {useState, useEffect, useRef} from 'react';
import {ModalBackground, ModalArea} from './styled';

function Modal({status, setStatus, children}){

    const clickHandle = (e) => {
        if(e.target.classList.contains('modalBg')){
           setStatus(false);
        }
    }

    return (
        <ModalBackground status={status} className="modalBg" onClick={clickHandle}>
            <ModalArea> 
                {children}      
            </ModalArea>
        </ModalBackground>
    );
}

export default Modal;