import React, { useEffect, useState } from 'react';
import './App.css';
import Hello from './components/Hello';

function App() {
  const [todos,setTodos]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:3004/todos").then((d)=> d.json()).then((data)=>{
      
    setTodos(data);
    console.log(data)
  })
  },[])
  

  return (
    <div className="App">
     {todos.map((e)=>(
       <div>{e.id}.{e.title}</div>
       
     ))}
    </div>
  );
}

export default App;
