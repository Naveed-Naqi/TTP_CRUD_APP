import React, { Component } from 'react';
import StylishCardDisplay from "../layout/StylishCardDisplay";
import AddStudentModal from './AddStudentModal';

const studentIds = [
    "Student 1", 
    "Student 2", 
    "Student 3", 
    "Student 4", 
    "Student 5", 
    "Student 6", 
    "Student 7", 
    "Student 8"
];

/*
FUTURE PLANS:
    A componentDidMount pull some data from the database.
    Probabably just the id, name, description and image of the Student.
    This will take the place of the dummy data we currently have in studentIds.
*/

export default class AllStudents extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Welcome to All Students View </h1>

                    <AddStudentModal></AddStudentModal>
                </div>

                {studentIds.map( (elem) => {
                    return <StylishCardDisplay 
                                id={elem} 
                                variant="students"
                                title={elem}
                            ></StylishCardDisplay>
                })}

            </div>
        )
    }
}
