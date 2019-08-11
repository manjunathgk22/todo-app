import React, {Component, useContext} from 'react';
import './App.scss';
import Todo from './todo/todoWrapper';
import TodoAdd from './todo/todoAdd';
export const appContext  = React.createContext();

class AppProvider extends Component{
  
  constructor(){
    super()
    this.state = {
      List: [],
      showComplete: ''
    }
    if(localStorage && localStorage.getItem('state') ){
      this.state = JSON.parse(localStorage.getItem('state'))
    }
  }
  
  render() {
    localStorage.setItem('state', JSON.stringify(this.state))
    return (
       <appContext.Provider value={{
         state: this.state,
         toggleDone: (id)=>{this.setState({
           List: this.state.List.filter((item)=>{
             if(item.id === id){
               item.status = item.status == 'done' ? '': 'done'
             }
             return true
           } )
         },()=>{
          // localStorage.setItem('state', JSON.stringify(this.state))
        })},
         clearComplete: (id)=>{this.setState({
          List: this.state.List.filter((item)=>{
            if(!(item.status === 'done')){
              return true  
            }
            
          } )
        },()=>{
          // localStorage.setItem('state', JSON.stringify(this.state))
        })},
         onAdd: (item)=>{
          this.setState({
           List: this.state.List.concat([item])
          },()=>{
            // localStorage.setItem('state', JSON.stringify(this.state))
          });
         },
         onEdit: (id,description)=>{
         },
         showComplete: ()=>{
           
            this.setState({
              showComplete: true
            }, ()=>{
              // localStorage.setItem('state', JSON.stringify(this.state))
            })
         },
         showAll: ()=>{
          
           this.setState({
             showComplete: false
           },()=>{
            // localStorage.setItem('state', JSON.stringify(this.state))
          })
        }
        }}>
        {this.props.children}
       </appContext.Provider>
    );
  }
}

const HeaderSection = ()=>{
  return (<div className="header-title">TODO APP</div>)
}

function App() {
  const context = useContext(appContext)
  return (
    <div className="App">
      <header className="App-header">
        <div className='todo-wrapper'>
          <HeaderSection></HeaderSection>
          <Todo></Todo>
          <TodoAdd></TodoAdd>
          {
            context.state.List.length > 0 ?
            <div className="showCompleted">
            <span  onClick={()=>{context.showComplete()}} style={context.state.showComplete === true?{'background': '#fd3753', 'color': '#FFF'}:null }>Show Completed</span>
            <span  onClick={()=>{context.clearComplete()}}>Clear</span>
            <span  onClick={()=>{context.showAll()}} style={context.state.showComplete === false?{'background': '#fd3753', 'color': '#FFF'}:null }>Show All</span>
          </div>
            :<div></div>
          }
          
        </div>
      </header>
    </div>
  );
}

export {
  AppProvider,
  App
}