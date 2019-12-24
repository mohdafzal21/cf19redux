import React from 'react';
import MoviesDetail from './Movies/MoviesDetail'
import MoviesList from './Movies/MoviesList'
import {Route, Switch} from 'react-router-dom'
class App extends React.Component{

  render(){
    return(
      <div>
        <Switch>
        <Route exact path='/' component={MoviesList}/> 

        <Route path='/:id' component={MoviesDetail} />

        </Switch>
        
      </div>
    )
  }
}

export default App;
