import {useState, useEffect} from 'react';
import './Styles/listing.css'
import Finished from './Components/Finished'
import OnHold from './Components/OnHold'
import AddTask from './Components/AddTask'
import limpieza from '../src/assets/broom.png'
import Modal from './Components/Modal';


const AppContainer = () => {
    const [hold, setHold] = useState(JSON.parse(localStorage.getItem("onHold")) ? JSON.parse(localStorage.getItem("onHold")) : [])
    const [finished, setFinished] = useState(JSON.parse(localStorage.getItem("finished")) ? JSON.parse(localStorage.getItem("finished")) : [])

    const clearAll= () =>{

      if(confirm("Are you sure you want to delete all tasks?") === true){
      setHold([]);
      setFinished([])
      localStorage.clear();
    }else{
      return;
    }
  }

  return (
    <>
   
    <div className="listados">
    <AddTask
    hold={hold}
    setHold={setHold}
    />
    <div className="listing">
    <OnHold
        hold={hold}
        setHold={setHold}
        finished={finished}
        setFinished={setFinished}/>


        <Finished
        finished={finished}
        setFinished={setFinished}
        />
       
    </div>
    <button id="cleanAll" onClick={clearAll}><img id="cleanImg" src={limpieza}/></button>
    </div>
    </>
  )
}

export default AppContainer