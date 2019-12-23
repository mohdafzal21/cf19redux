// it combines all the reducers into one object 

import {combineReducers} from 'redux'

import {ToggleReducer} from './reducer'

export const rootReducer = combineReducers({
    ToggleReducer
})