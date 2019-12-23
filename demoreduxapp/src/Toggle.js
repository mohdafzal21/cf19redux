import React, { PureComponent } from 'react'
import {connect} from 'react-redux'


const Toggle = (props)=>{
    console.log("toggle props" ,props)
    return(
        <div>
           {props.messageVisibility &&  <h1>Show/hide h1</h1>}
            <button onClick={()=>props.dispatch({
                type : 'TOGGLE'
            })}>Toggle</button>
        </div>
    )
}

const mapStateToProps = state =>({
        messageVisibility : state.ToggleReducer.messageVisibility 
})


export default connect(mapStateToProps, null)(Toggle)
// export default Toggle