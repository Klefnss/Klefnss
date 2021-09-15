import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Main'

import "./App.css";
import CoreTeam from "./CoreTeam";
import Events from "./Events";
import CoreTeamUnit from "./CoreTeamUnit";
import Login from "./Login";
import SignUp from "./SignUp";
import GalleryComponent from "./Gallery";
const App = () => {
  return (
    <div className="App">
      <Router>
    <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path ="/CoreTeam" component={CoreTeam}  />
    <Route exact path ="/gallery" component={GalleryComponent}  />
    <Route exact path ="/Events"   component={Events} />
    <Route exact path ="/details/:id" component={CoreTeamUnit} />
    <Route exact path = "/Login" component={Login}/>
    <Route exact path = "/SignUp" component={SignUp} />
     </Switch>
    </Router>
    </div>
  );
};

export default App;
