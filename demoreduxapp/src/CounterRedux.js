import React from 'react'
import {connect} from 'react-redux'
import {increaseCountActionCreator,decrementCount,resetCount} from './action.js'
const CounterRedux = (props)=> {

        console.log("in Counter", props)
    return(
        <>
        <h1>Count : {props.countOne} </h1>
        <button onClick={()=>props.increaseCountActionCreator()}>INC</button>
        <button onClick={()=>props.decrementCount()}>DEC</button>
        <button onClick={()=>props.dispatch({
            type : 'RESET_COUNT'
        })}>reset</button>
        </>
    )
}

const mapStateToProps = state=>({
    countOne :  state.ToggleReducer.count
})

export default connect(mapStateToProps,  {increaseCountActionCreator,decrementCount,resetCount})(CounterRedux)

//action creator are available as props in the comoponent and it is wrapped in a dispatch 
// store.dispatch(
//     {increaseCountActionCreator,decrementCount,resetCount}
// )