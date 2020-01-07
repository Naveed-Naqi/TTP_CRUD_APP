import React, { Component } from 'react';
import "./campuses.css";
import StylishCardDisplay from "../layout/StylishCardDisplay";
import { Button } from '@material-ui/core';

export default class AllCampuses extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Welcome to All Campuses View </h1>

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
