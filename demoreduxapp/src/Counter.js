import React, { Component } from 'react'

export default class Counter extends Component {
    render() {
        console.log("inside Counter");
        return (
            <div>
               <h1> {this.props.count}</h1>
                <button onClick={this.props.increment}>INc</button>
               <hr/>
                <ResetCount reset={this.props.reset}/>
            </div>
        )
    }
}


class ResetCount extends Component {
    render() { 
        console.log("inside ResetCount render");
        return ( 
            <>
                <button onClick={this.props.reset}>Reset</button>
            </>
         );
    }
}
 
