
import {  useState } from 'react';
import './App.css';
import { Timer } from './components/Timer';

function App() {
  const [show, setShow] = useState(true);


 

  return (
    <div className="App">
      {show ? <Timer /> : <div>Click Again To Reset to Initial Value!</div>}
      <button onClick={() => {
        setShow(show ? false : true);
        setShow(!show)
      }}>{show? "stop":"start" }</button>
      
    </div>
  );
}

export default App;
