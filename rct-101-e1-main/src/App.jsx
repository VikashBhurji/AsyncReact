import React, { useState } from "react";
import AddTask from "./components/AddTask/AddTask";
import Counter from './components/Counter/Counter';
import Task from './components/Task/Task';
import TaskHeader from './components/TaskHeader/TaskHeader';
import Tasks from './components/Tasks/Tasks';




function App() {
  const [list,setList]=useState([]);
  const addtoList=(title)=>{
    
    
    setList([...list,title])
  }
  // const itemadded=(list)=>{
    
  //     list.map((e)=>{
  //       return e;
  //     })
    
  // }
  
  return <div>{/* Code Here */}
  <AddTask addtoList={addtoList}/>
  <Counter/>
  <Task/>
  <TaskHeader/>
  <Tasks list={list}/>
  </div>;
}

export default App;
