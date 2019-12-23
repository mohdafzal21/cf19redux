import React from 'react';
class OldValue extends React.PureComponent {
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.value === this.props.value){
            return false
        }
        return true
    }
    render() { 
        console.log("render in OldVAlue")
        return ( 
            <div>
    <h2>{this.props.value}</h2>
            </div>
          );
    }
}
 
class Counter extends React.Component{
    state = {
        count : 0,
        oldValues : []
    }
    incrementCount = ()=>{
        console.log("state above ");
      
        this.setState( (prevState)=>({
          count : prevState.count + 1,
          oldValues : [
              ...prevState.oldValues,
              prevState.count
          ]
        }))
        console.log("state below increment " );
      }
      //decrement Count 
      decrementCount =  ()=> {
         this.setState((newState)=> ({
          count : newState.count - 1
        }))
       
      }
    
    
    render(){
        console.log("In counter ", this.props)
        const {count,oldValues} = this.state
        return (
            <div style={{ "border" : "2px solid black"}}>
                <h1 style={count ===0 ? {color:'red'} : null}>Counter : {count} </h1>
                <button onClick={this.incrementCount}>Increment</button>
                <button onClick={this.decrementCount}>Decrement</button>
                <div> 
                    <h3 >Odlvalues</h3>
                       {oldValues.map((value,index)=>(
                           <li key={index}>
                                   <OldValue value={value} />
                           </li>
                       ))}
                    </div>
            </div>
        )
    }
}

export default  Counter