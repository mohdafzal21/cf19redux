import React from 'react'
import {connect} from 'react-redux'

const CounterRedux = (props)=> {

        console.log("in Counter", props)
    return(
        <>
        <h1>Count : {props.countOne} </h1>
        <button onClick={()=>props.dispatch({
            type : 'INC_COUNT'
        })}>INC</button>
        <button onClick={()=>props.dispatch({
            type : 'DEC_COUNT'
        })}>DEC</button>
        <button onClick={()=>props.dispatch({
            type : 'RESET_COUNT'
        })}>reset</button>
        </>
    )
}

const mapStateToProps = state=>({
    countOne :  state.ToggleReducer.count
})

export default connect(mapStateToProps,null)(CounterRedux)