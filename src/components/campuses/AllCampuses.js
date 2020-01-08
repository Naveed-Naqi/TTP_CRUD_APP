import React, { Component } from 'react';
import "./campuses.css";
import StylishCardDisplay from "../layout/StylishCardDisplay";
import AddCampusModal from './AddCampusModal';

const campusIds = [1, 2, 3, 4, 5, 6, 7, 8];

export default class AllCampuses extends Component {

    render() {
        return (
            <div>
                <div>
                    <h1>Welcome to All Campuses View </h1>

                </div>

                <AddCampusModal></AddCampusModal>

                {campusIds.map( (elem) => {
                    return <StylishCardDisplay id={elem}></StylishCardDisplay>
                })}
                
            </div>
        )
    }
}
