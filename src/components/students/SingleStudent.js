import React, { Component } from 'react'

/*
FUTURE PLANS:
    A componentDidMount pulls all data of this specific student into the state of this component.
    
*/

export default class SingleStudent extends Component {
    render() {
        return (
            <div>
                <h1>Single Student View</h1>
                <p>{this.props.match.params.id}</p>
            </div>
        )
    }
}
