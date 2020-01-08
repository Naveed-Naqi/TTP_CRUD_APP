import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TabNavigation from "./components/layout/TabNavigation";
import SingleStudent from './components/students/SingleStudent';
import SingleCampus from './components/campuses/SingleCampus';

function App() {
  return (
    <Router>
        <div> 
            <Switch>
                <Route exact path ="/" component={TabNavigation} />
                <Route exact path ="/students/:id" component={SingleStudent} />
                <Route exact path ="/campuses/:id" component={SingleCampus} />
            </Switch>
        </div>
    </Router>
  );
}

export default App;
