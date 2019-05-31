import React from 'react';
import {appContext} from '../App';
import {TodoItem} from './todoItem'
export default function Todo(params) {
  return(
    <div>
     <appContext.Consumer>
      {
        (context) => (
          <>
          {
            context.state.List.map(todo => {
              return  <TodoItem todo={todo} onchange ={(id)=>{context.onDone(id)}} ></TodoItem>  
            })
          }
          </>
          
          )        
      }
     </appContext.Consumer>
    </div>
  )
}