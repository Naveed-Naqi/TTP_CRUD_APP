import React, { Component } from 'react';
import StylishCardDisplay from "../layout/StylishCardDisplay";
import AddStudentModal from './AddStudentModal';

export default class AllStudents extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Welcome to All Students View </h1>

                    <AddStudentModal></AddStudentModal>
                </div>

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
