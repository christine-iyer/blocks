import React, { useState } from 'react'
import Modal from 'react-modal';


export default function ModalFun() {
     const [modalIsOpen, setModalIsOpen] = useState(false);
     const setOpenTrue =()=>{
          setModalIsOpen(true);
     } 
     const setOpenFalse =()=>{
          setModalIsOpen(false);
     }
  return (
    
    <> 
    <button onClick={setOpenTrue} onRequestClose={()=> setModalIsOpen(false)}>Open (npm react-modal) Modal</button>
    
    <Modal isOpen={modalIsOpen}  >

    <button onClick={setOpenFalse}>Close (npm react-modal) Modal</button>
   

    </Modal>

    
    </>
  )
}
