import React,{useState} from 'react'

function TodoInputs(props) {
    const [todoinput,setTodoinput]=useState("");

    const handleEnterPress=(e)=>{
        if(e.keyCode===13){
            props.addlist(todoinput);
            setTodoinput("");
        }
    }

  return (
    <div className='input-container'>
      <input type='text'
       placeholder='Enter an todo'
       className='input-box-todo'
       value={todoinput}
       onChange={(e)=>{
        setTodoinput(e.target.value)
       }}

       onKeyDown={handleEnterPress}
       />
       <button
            className='add-btn'
            onClick={()=>{
            props.addlist(todoinput)
            setTodoinput("")
       }}
       >+</button>
       {/* <div>{todoinput}</div> */}
     
    </div>
  )
}

export default TodoInputs
