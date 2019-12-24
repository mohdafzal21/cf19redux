import React from 'react';
import logo from './logo.svg';
import Toggle from './Toggle'
import './App.css';
import CounterRedux from './CounterRedux'
class App extends React.Component{

  render(){
    return(
      <div>
          <Toggle/>
          <hr/>
          <CounterRedux/>
      </div>
    )
  }
}

export default App;
