import React, { PureComponent } from 'react'

export default class Toggle extends PureComponent {
    render() {
        console.log("inside Toggle render");
        return (
            <div>
                <button onClick={this.props.toggleHandler}>Tooglle</button>
                {this.props.toggle && <h1>Hello Rendered</h1>}
            </div>
        )
    }
}
