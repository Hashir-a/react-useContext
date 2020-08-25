import React, { useState} from 'react';
import './App.css';
import Parent from './Parent';
import Valuecontext from './ValueContext';
import './style.css';
function App() {
  //let [number,setNumber] = useState(45);
  let value = useState(40);
  //let number = useReducer(numberReducer);
  return (
    <Valuecontext.Provider value ={value}>
      <div className= "basicDiv">
         <br/>
         Hello from App
        <Parent>
        
        </Parent>
      </div>
    </Valuecontext.Provider>
  );
}

export default App;
