import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {rootReducer} from './rootReducer.js'
import { composeWithDevTools } from 'redux-devtools-extension';
//what is store ?
// how to create store = createStore 
//createStore accepts reducer fn as an argument 

const store = createStore(
     rootReducer,
     {},
     composeWithDevTools()
    )


//Provider - connects redux store with the react app   , HOC 
// Provider accepts store as a props 
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));

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
// const initialState = {
//     welcome : 'hello',
//     userAuth: false
// }

// // reducer function
// they are normal functions
// they  accept state and action as arguments
//based on the action.type - it is going to update state/setState 

// const greetingWorld = (state=initialState,action)=>{
//     console.log("red action", action)
//         switch(action.type){
//             case 'GREET_WORLD':
//                 return {...state, welcome: 'Hello World'}
//             case 'GREET_NAME' : 
//                 return {...state, welcome : `hello ${action.data}`}
//             case 'SAYHI':
//                 return {...state, welcome: `hello ${action.data}` , user : `${action.data}`}
//             case 'SAYMORNING':
//                 return {...state, status : `Good morning ${action.user}`}
//             case 'LOGIN_USER': 
//                 return {...state, welcome: `Hello ${action.username}` , userAuth: true }
//              default : 
//             return {...state}
//         }
// }

//createStore - create a redux store () nd it accepts a reducer functions as argument
//only one reducer function as argument 
// const store = createStore(greetingWorld)
// console.log(store.getState())
// to update the state based on the action type
// u have method in the store - method/fn is dispatch
// dispatch()- it wiill return an object with the action type 
// store.dispatch({
//       type :'GREET_WORLD'
// })
// console.log(store.getState())

//store
//dispatch - action
//reducer 
// store.dispatch({
//     type : 'GREET_NAME',
//     data : 'Action Name'
// })
// console.log(store.getState())

// let newData = 'Afzal'

// store.dispatch({
//     type : 'SAYHI',
//     data : newData
// })

// console.log(store.getState())

// store.dispatch({
//     type :'SAYMORNING',
//     user : 'TOM'
// })

// console.log(store.getState())

// store.dispatch({
//     type: 'LOGIN_USER',
//     username : 'Srikanth'
// })

// console.log(store.getState())