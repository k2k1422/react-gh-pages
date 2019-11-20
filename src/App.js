import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import produce from "immer"

const App = () => {

  const [state,setState] = useState({
    l:[],
    text:"hey"
  })

  const handleAdd = (event) => {
    setState(
      produce(state => {
          state.l=[1,2,3]
      })
    )
  }

  console.log(state)
  return (
    <div className="App">
      <input type="button" value="add" onClick={handleAdd} />
    </div>
  );
}

export default App;
