import React, { useState } from "react";
import styles from "./addTask.module.css";


const AddTask = ({addtoList}) => {
  // NOTE: do not delete `data-cy` key value pair
  const [task,setTask]=useState("");
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" onChange={(e)=>{
        setTask(e.target.value);
      }} />
      <button data-cy="add-task-button" onClick={()=>{
        addtoList(task);
      }} >AddTask</button>
    </div>
  );
};

export default AddTask;
