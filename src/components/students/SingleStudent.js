import React, { Component } from 'react'

// Cool if we could have some updating functionality here. So I will leave this is a Class Component.
// Intending to make a call to our REST API using this.props.match.params.id and putting all of it into state

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
