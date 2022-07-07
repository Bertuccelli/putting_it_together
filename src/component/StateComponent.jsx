import React, { Component } from 'react'

export class StateComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            age: props.personAge
        }
    }

    render() {
    return (
        <div>
            <button onClick={()=>this.setState({age: this.state.age+1})}>
                Birthday Button!
            </button>
            <h3>Age: {this.state.age}</h3>
        </div>
    )
    }
}

export default StateComponent