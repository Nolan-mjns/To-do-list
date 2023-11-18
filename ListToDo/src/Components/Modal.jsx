import React from 'react'
import '../Styles/Modal.css'

const Modal = ({mensaje, accion}) => {

const eliminaFiltra = () =>{
    //SE ELIMINA DE LA LISTA ANTERIOR
    const NoHoldAnymore = hold.filter( hold => hold.task !== valor)
    setHold(NoHoldAnymore)
    localStorage.setItem("onHold", JSON.stringify(NoHoldAnymore));
}

  return (
    <div className="modal">
        <h2>Attention</h2>
        <p>Text here mensaje</p>
        
        <div className="opciones">
        <button className="opcion" id="disagree">Cancel</button>
            <button className="opcion" id="agree">Add new task</button>
           
        </div>
        </div>
  )
}

export default Modal