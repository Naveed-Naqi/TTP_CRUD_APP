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
            </Switch>
        </div>
    </Router>
  );
}

export default App;
