
import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
// import Edit from '@material-ui/core/icons';
import '../App.scss'
// import {checkbox}
export function TodoItem(props) {

    return(
      <div className='todo-item' >
      <Checkbox onChange= {()=>{props.onchange(props.todo.id)}} checked={props.todo.status === 'done' ? true: false}></Checkbox>
      <span className="todo-title" style={props.todo.status === 'done' ? {'text-decoration': 'line-through'}: {}}>{props.todo.title}</span>
      
      </div>
    )
}

// <img className="edit-icon" src={require('../edit-icon.png')} />