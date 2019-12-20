import React from 'react';
import './App.css';

import {useSelector,useDispatch} from 'react-redux'

function App() {

  const isLogged=useSelector(state=> state.isLogged)
  
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
    </div>
  );
}

export default App;
