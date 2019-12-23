import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// const hello = ()=> ({ welcome : "hello"})
// function - 
//action - are objects that will trigger the setState in the store
// if(GREET_WORLD) return 'hello world'
//if(GREET_NAME) return 'hello Afzal'
//if(GREET_NewName) return 'new Name'
const initialState = {
    welcome : 'hello'
}

// reducer function
// they are normal functions
// they  accept state and action as arguments
//based on the action.type - it is going to update state/setState 

const greetingWorld = (state=initialState,action)=>{
    console.log("red action", action)
        switch(action.type){
            case 'GREET_WORLD':
                return {welcome: 'Hello World'}
            case 'GREET_NAME' : 
                return {welcome : `hello ${action.data}`}
            default : 
            return state
        }
}

//createStore - create a redux store () nd it accepts a reducer functions as argument
//only one reducer function as argument 
const store = createStore(greetingWorld)
console.log(store.getState())
// to update the state based on the action type
// u have method in the store - method/fn is dispatch
// dispatch()- it wiill return an object with the action type 
store.dispatch({
      type :'GREET_WORLD'
})
console.log(store.getState())

//store
//dispatch - action
//reducer 
store.dispatch({
    type : 'GREET_NAME',
    data : 'Action Name'
})
console.log(store.getState())

