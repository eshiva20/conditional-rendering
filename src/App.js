import './App.css';
import { useState } from 'react';

function App() {
  const [toggle,setToggle]=useState(false)
  return (
    <>
    {toggle? <h1>Lights ON</h1>: <h1>Lights OFF</h1> }
    <button  onClick={()=>setToggle(!toggle)}> Click </button>
    </>
  );
}

export default App;
