const initialState = {
    messageVisibility : false,
    count : 0
}

//what is a reducer fn 
/// they are normal , which accepts state and actions 
//based on the action.type 

export const ToggleReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'TOGGLE'  : 
        return { ...state, messageVisibility :  !state.messageVisibility}
        case 'INC_COUNT' :
        return {...state , count :  state.count + 1}
        case 'DEC_COUNT' : 
        return {...state, count : state.count - 1}
        case 'RESET_COUNT' : 
        return {...state, count : 0}
        default :
        return {...state}
    }
}


// store.dispatch({
//     type: 'TOGGLE'
// })