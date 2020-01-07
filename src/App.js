import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from './components/Homepage';
import Students from './components/students/AllStudents';
import Campuses from './components/campuses/AllCampuses';

function App() {
  return (
    <Router>
        <div> 
            <Switch>

                <Route exact path="/" component={Homepage} />
                <Route exact path="/campuses" component={Campuses} />
                <Route exact path="/students" component={Students} />
                
            </Switch>
        </div>
    </Router>
  );
}

export default App;
