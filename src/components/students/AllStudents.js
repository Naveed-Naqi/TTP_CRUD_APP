import React, { Component } from 'react'
import StylishCardDisplay from "../layout/StylishCardDisplay";
import { Button } from '@material-ui/core';

export default class AllStudents extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Welcome to All Students View </h1>

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                    DECREMENT
                    </Button>
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
