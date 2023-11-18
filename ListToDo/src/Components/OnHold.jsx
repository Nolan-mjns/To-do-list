import React from 'react'
import Modal from './Modal'

const OnHold = ({hold, setHold, finished, setFinished}) => {
    
    const holding = JSON.parse(localStorage.getItem("onHold"))
    

    const handleFinish = event => {
let valor= event.target.value;

if(event.target.checked === true){
    //setTimeout(() => {
        if(confirm("¿Tarea terminada?") === true){
            //SE HA TERMINADO, SE AGREGA A LA NUEVA LISTA
            setFinished((finished) => [...finished, { task: valor }]);
                    localStorage.setItem("finished", JSON.stringify([...finished, { task: valor }]));
        
            //SE ELIMINA DE LA LISTA ANTERIOR
            const NoHoldAnymore = hold.filter( hold => hold.task !== valor)
            setHold(NoHoldAnymore)
            localStorage.setItem("onHold", JSON.stringify(NoHoldAnymore));
        
        }else{
            event.target.value = false;
        }
    //}, 500);

}
    }

  return (
    <>
    
    <div className="holding contenedor lista">
        <div className="titleList">
        <h3>On hold tasks</h3>
        {hold.length > 0 &&
        <span className="counter">{hold.length}</span>
        }
        
        </div>
       
      <div className="listSize">
        {hold.length != 0 ? hold.map(pendiente => (
            <li className="listElement" key={pendiente.task}> 
             <label className="checkeo"><input className="myCheck" type="checkbox" name="pendientes" value={pendiente.task} onChange={handleFinish}/>{pendiente.task}</label>
            </li>
        )) : <p>There are no pending tasks</p>}
        </div>
    </div>
    </>
  )
}

export default OnHold