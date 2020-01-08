import React, { Component } from 'react';
import StylishCardDisplay from "../layout/StylishCardDisplay";
import AddStudentModal from './AddStudentModal';

const studentIds = [1, 2, 3, 4, 5, 6, 7, 8];

export default class AllStudents extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Welcome to All Students View </h1>

                    <AddStudentModal></AddStudentModal>
                </div>

                {studentIds.map( (elem) => {
                    return <StylishCardDisplay id={elem}></StylishCardDisplay>
                })}

            </div>
        )
    }
}
