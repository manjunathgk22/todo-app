import React, {useContext} from 'react';
import {appContext} from '../App';
import {TodoItem} from './todoItem'
export default function Todo(params) {
  const context = useContext(appContext)
  return(
    <div>
     
          {
            context.state.List.map(todo => {
              
              if(context.state.showComplete == true){
                if (todo.status == 'done'){
                  return  <TodoItem todo={todo} onchange ={(id)=>{context.toggleDone(id)}} ></TodoItem>    
                }
              }
              else{
                return  <TodoItem todo={todo} onchange ={(id)=>{context.toggleDone(id)}} ></TodoItem>  
              }
              
            })
          }
     
     
    </div>
  )
}