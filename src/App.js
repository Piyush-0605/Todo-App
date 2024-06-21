import React, { useState } from 'react'
import './App.css';
import TodoInputs from './Components/TodoInputs'
import Todolist from './Components/Todolist';

function App() {

  const[todolist,setTodolist]=useState([]);

  const addlist=(todoinput)=>{
    if(todoinput!=='')
      setTodolist([...todolist,todoinput])
  }

  const deletelist=(key)=>{
    let newtodolist=[...todolist];
    newtodolist.splice(key,1);
    setTodolist([...newtodolist]);

  }


  return (
    <div className='main-container'>
      <div className='center-container'>
        <TodoInputs addlist={addlist}/>
          <h1>Todos</h1>
          <hr/>
          
         {todolist.map((listitem,i)=>{
          return(
            <Todolist key={i} index={i} item={listitem} deleteitem={deletelist}/>
          )           
         }) }
      </div>
    </div>
  )
}

export default App
