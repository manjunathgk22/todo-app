import React, {useState, useContext} from 'react';
import {appContext} from '../App';
import Input from '@material-ui/core/Input';


export default (props) => {
   const context = useContext(appContext)
   debugger
  const [isvalid, setIsValid] = useState(false);
  const add = ()=>{
    if(isvalid !=''){
      let data = {};
      data.title = isvalid;
      data.status = 'todo';
      data.id = Math.random();

      context.onAdd(data)
    }
  }
    return(

            <div className="todo-add-wrapper">
            <div>
              <Input autoFocus={true} placeholder="Add here!" onChange={(e)=>{setIsValid(e.target.value)}} error={isvalid === ""} ></Input>

            </div>
            <div className="todo-add"  onClick={()=> {add()}}>
              <span>+</span>
            </div>
            </div>
          )
        
      
    
}
