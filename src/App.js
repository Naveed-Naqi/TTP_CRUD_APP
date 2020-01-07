import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TabNavigation from "./components/layout/TabNavigation";

function App() {
  return (
    <Router>
        <div> 
            <Switch>
                <Route path ="/" component={TabNavigation} />
                {/* <Route exact path="/" component={Homepage} />
                <Route exact path="/campuses" component={Campuses} />
                <Route exact path="/students" component={Students} /> */}
                
            </Switch>
        </div>
    </Router>
  );
}

export default App;
