import React, { Component } from 'react';
import "./campuses.css";
import StylishCardDisplay from "../layout/StylishCardDisplay";
import AddCampusModal from './AddCampusModal';

const campusIds = [
    "Campus 1", 
    "Campus 2", 
    "Campus 3", 
    "Campus 4", 
    "Campus 5", 
    "Campus 6", 
    "Campus 7", 
    "Campus 8"
];

export default class AllCampuses extends Component {

    render() {
        return (
            <div>
                <div>
                    <h1>Welcome to All Campuses View </h1>

                </div>

                <AddCampusModal></AddCampusModal>

                {campusIds.map( (elem) => {
                    return <StylishCardDisplay id={elem} variant="campuses" ></StylishCardDisplay>
                })}
                
            </div>
        )
    }
}
