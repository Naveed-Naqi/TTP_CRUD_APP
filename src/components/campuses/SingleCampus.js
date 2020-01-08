import React, { Component } from 'react'

export default class SingleCampus extends Component {
    render() {
        return (
            <div>
                <h1>Single Campus View</h1>
                <p>{this.props.match.params.id}</p>
            </div>
        )
    }
}
