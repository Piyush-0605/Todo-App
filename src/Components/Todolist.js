import React from 'react'

function Todolist(props) {
  return (
    <div className='list-container'>
      <li className='list-item'>
        {props.item}
        <span className='icons'>
            <i class="fa-solid fa-trash-can" 
            onClick={(e)=>{
                props.deleteitem(props.index)
            }}
            ></i>
        </span>
      </li>
    </div>
  )
}

export default Todolist
