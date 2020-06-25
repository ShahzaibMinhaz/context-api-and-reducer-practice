import React, {useState} from 'react';
import './App.css';
import Parent from './Parent';
import CounterContext from './Countercontext';

function App() {
  let countState = useState(1) //[count, setCount]

  return (
    <CounterContext.Provider value={countState}>
      <div className="App">
        <Parent />
      </div>
    </CounterContext.Provider>
  );
}

export default App;