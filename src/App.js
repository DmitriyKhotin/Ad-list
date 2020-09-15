import React, {useState} from 'react';
import Form from './Components/Form'
import './App.css';
import Ad from "./Components/Ad";

function App() {
  const [state, setState] = useState([])
  
  function filter(id) {
    setState(state.filter(value => value.id !== id))
  }
  return (
    <div className="App">
      <Form setState={setState} state={state}/>
      <div>
      {state.map(value => <Ad ad={value} key={value.id} filter={filter}/>)}
      </div>
    </div>
  );
}

export default App;
