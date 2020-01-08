import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TabNavigation from "./components/layout/TabNavigation";
import AllStudents from './components/students/AllStudents';
import SingleStudent from './components/students/SingleStudent';

function App() {
  return (
    <Router>
        <div> 
            <Switch>
                <Route exact path ="/" component={TabNavigation} />
                <Route exact path ="/students" component={AllStudents} />
                <Route exact path ="/students/:id" component={SingleStudent} />
            </Switch>
        </div>
    </Router>
  );
}

export default App;
