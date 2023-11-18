import React from 'react'
import '../Styles/Header.css'

const AddTask = ({hold, setHold}) => {

    const handleSubmit = () => {
        let newTaskInput = document.getElementById("newTask");
        let newTaskValue = newTaskInput.value;
        if(confirm("¿Deseas agregar una nueva tarea?") == true){
            //setHold(hold => {...hold, task: newTask});
            setHold((hold) => [...hold, { task: newTaskValue }]);
            localStorage.setItem("onHold", JSON.stringify([...hold, { task: newTaskValue }]));
            newTask.text= "";
            newTask.value= null;
        }else{
            newTask.text= "";
            newTask.value= null;
        
        }
    }

  return (
    <div className="header contenedor">
        <h1>What 'To-do' list</h1>
      
        <div className="inputs">
        <label id="action" for="adding">Add a new task</label>
        <input name="adding" type="text" id="newTask" placeholder="Writte your new task here"/>
        <button id="addTask" onClick={handleSubmit}>Add task</button>
        </div>
        </div>
  )
}

export default AddTask