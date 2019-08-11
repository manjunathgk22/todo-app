import React, {useState, useContext} from 'react';
import {appContext} from '../App';
import Input from '@material-ui/core/Input';
import { isValid } from 'ipaddr.js';


export default (props) => {
   const context = useContext(appContext)
   
  const [isvalid, setIsValid] = useState('');
  const add = ()=>{
    if(isvalid !=''){
      let data = {};
      data.title = isvalid;
      data.status = 'todo';
      data.id = Math.random();
      context.onAdd(data);
      setIsValid('');
    }
  }
    return(

            <div className="todo-add-wrapper">
            <div>
              <Input autoFocus={true} placeholder="Add here!" value={isvalid} onChange={(e)=>{setIsValid(e.target.value)}} error={isvalid === ""} ></Input>

            </div>
            <div className="todo-add"  onClick={()=> {add()}}>
              <span>+</span>
            </div>
            </div>
          )
        
      
    
}
