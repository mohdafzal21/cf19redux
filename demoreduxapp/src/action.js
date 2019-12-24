
// action creators 
// action creators are function which return action type 

// counter 
// define action creator increase count 
export function increaseCountActionCreator(){
    return {
        type : 'INC_COUNT'
    }
}

export function decrementCount(){
    return {
        type : 'DEC_COUNT'
    }
}

export function resetCount(){
    return {
        type : 'RESET_COUNT'
    }
}

export function toggleMessage(){
    return {
        type : 'TOGGLE'
    }
}

//define action creator decrement count 