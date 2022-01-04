import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/"><News pageSize={9} category="general" key="general1" /></Route>
            <Route exact path="/general"><News pageSize={9} category="general" key="general" /></Route>
            <Route exact path="/business"><News pageSize={9} category="business" key="business" /></Route>
            <Route exact path="/entertainment"><News pageSize={9}  key="entertainment" category="entertainment" /></Route>
            <Route exact path="/health"><News pageSize={9}   key="health" category="health" /></Route>
            <Route exact path="/science"><News pageSize={9}  key="science" category="science" /></Route>
            <Route exact path="/sports"><News pageSize={9}  key="sports" category="sports" /></Route>
            <Route exact path="/technology"><News pageSize={9}  key="technology" category="technology" /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}


