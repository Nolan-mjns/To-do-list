import React from 'react'

const Finished = ({finished, setFinished}) => {
    console.log("finished ", finished)

    const deleteTask = (taskFin) =>{
      

  
              if(confirm("¿Eliminar tarea?") === true){
                  //SE HA TERMINADO, SE AGREGA A LA NUEVA LISTA
                  /*setFinished((finished) => [...finished, { task: valor }]);
                          localStorage.setItem("finished", JSON.stringify([...finished, { task: valor }]));*/
              
                  //SE ELIMINA DE LA LISTA ANTERIOR
                  const NoHoldAnymore = finished.filter( finished => finished.task !== taskFin)
                  setFinished(NoHoldAnymore)
                  localStorage.setItem("finished", JSON.stringify(NoHoldAnymore));
              
              }else{
                  event.target.value = false;
              }
      
      
      }
    
  return (
    <div className="finished contenedor lista">  
        

        <div className="titleList">
        <h3>Finished tasks</h3>
        {finished.length > 0 &&
        <span className="counter">{finished.length}</span>
        }
        
        </div>

        <div className="listSize">
        {finished.length !=0 ? finished.map(terminadas => (
            <li className="listElement" key={terminadas.task} name="terminadas" value={terminadas.task}> 
         {terminadas.task}
         <button id="deleteTask" onClick={() => deleteTask(terminadas.task)}>X</button>
            </li>
           
        )) : <p>There are no finished tasks</p>}
        </div>
        </div>
  )
}

export default Finished