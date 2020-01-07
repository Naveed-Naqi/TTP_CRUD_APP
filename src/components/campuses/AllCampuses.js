import React, { Component } from 'react'
import "./campuses.css"
import SingleCardDisplay from '../layout/SingleCardDisplay'

export default class AllCampuses extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to the All Campuses View</h1>
                
                <SingleCardDisplay 
                    phoneNumber="646-309-5663"
                    name="Naveed Naqi"
                    email="nnaqi5534@gmail.com"
                ></SingleCardDisplay>

                <SingleCardDisplay 
                    phoneNumber="646-267-6197"
                    name="Bushra Naqi"
                    email="nnaqi5534@bths.edu"
                ></SingleCardDisplay>

                <SingleCardDisplay 
                    phoneNumber="646-918-6192"
                    name="Ali Naqi"
                    email="naveed.naqi30@myhunter.cuny.edu"
                ></SingleCardDisplay>
            </div>
        )
    }
}
