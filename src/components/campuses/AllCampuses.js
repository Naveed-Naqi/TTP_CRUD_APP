import React, { Component } from 'react';
import "./campuses.css";
import StylishCardDisplay from "../layout/StylishCardDisplay";
import AddCampusModal from './AddCampusModal';

export default class AllCampuses extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Welcome to All Campuses View </h1>

                </div>

                <AddCampusModal></AddCampusModal>

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
