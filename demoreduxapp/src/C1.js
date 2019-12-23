import React, { Component } from 'react'

class OldValues extends React.Component{
    shouldComponentUpdate(prevprops,prevState){
        console.log("prevprops props inside Oldvalues", prevprops)
        console.log("prev state in oldvalue", prevState)
        if(prevprops.value === this.props.value){
            return false
        }
        return true
    }

    render(){
        console.log("render in OldVAlue")
        return(
            <>
    <h1>Values : {this.props.values}</h1>
            </>
        )
    }
}

export default class C1 extends Component {
    state = {
        count : 0,
        oldValues : []
    }

    
    increment = ()=>{
        this.setState((prevState)=>({
            count : prevState.count + 1,
            oldValues :  [...prevState.oldValues, prevState.count]
        }))
    }
    
      decrement=()=>{
        this.setState({
          count :  this.state.count - 1
        })
      }
    
    
    render() {
        return (
            <div>
              <h1>{this.state.count}</h1>
              <button onClick={this.increment}>increment</button>
              <button onClick={this.decrement}>decrement</button>
             <hr/>
             <h1>Old Count oldValues</h1> 
             {this.state.oldValues.map((values,index)=>(
                 <OldValues values={values} key={index} />
             ))}
            </div>
        )
    }
}
