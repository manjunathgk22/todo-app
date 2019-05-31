import React, {Component} from 'react';
import './App.scss';
import Todo from './todo/todoWrapper';
import TodoAdd from './todo/todoAdd';
export const appContext  = React.createContext();

class AppProvider extends Component{
  state = {
    List: [{
      title: 'Add something!',
      type: 'System',
      status: 'todo',
      id: '0'
    }]
  }
  render() {
    return (
       <appContext.Provider value={{
         state: this.state,
         onDone: (id)=>{this.setState({
           List: this.state.List.filter((item)=>{
             if(item.id === id){
               item.status = 'done'
             }
             return true
           } )
         })},
         onAdd: (item)=>{
          this.setState({
           List: this.state.List.concat([item])
          });
         }
        }}>
        {this.props.children}
       </appContext.Provider>
    );
  }
}

const HeaderSection = ()=>{
  return (<div>...</div>)
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='todo-wrapper'>
          <HeaderSection></HeaderSection>
          <Todo></Todo>
          <TodoAdd></TodoAdd>
        </div>
      </header>
    </div>
  );
}

export {
  AppProvider,
  App
}