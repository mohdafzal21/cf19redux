// it combines all the reducers into one object 

import {combineReducers} from 'redux'

import {ToggleReducer} from './reducer'
import {moviesReducer} from './Movies/movieReducer'

//many reducer fn- combining all the reducer fn 
export const rootReducer = combineReducers({
    ToggleReducer,
    moviesReducer
})