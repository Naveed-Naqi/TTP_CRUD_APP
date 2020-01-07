import React, { Component } from 'react';
import "./campuses.css";
import SingleCardDisplay from '../layout/SingleCardDisplay';
import StylishCardDisplay from "../layout/StylishCardDisplay";

export default class AllCampuses extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to the All Campuses View</h1>

                <StylishCardDisplay></StylishCardDisplay>
                <StylishCardDisplay></StylishCardDisplay>
                <StylishCardDisplay></StylishCardDisplay>
                <StylishCardDisplay></StylishCardDisplay>
                <StylishCardDisplay></StylishCardDisplay>
                <StylishCardDisplay></StylishCardDisplay>
                <StylishCardDisplay></StylishCardDisplay>
                <StylishCardDisplay></StylishCardDisplay>
                
            </div>
        )
    }
}
