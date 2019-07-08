import React, { Component } from "react";
import "./App.css";
import {Switch, Route, Link} from 'react-router-dom'
import Homepage from './components/Homepage'
import Culture from './components/Culture'
import Activities from './components/Activities'


class App extends Component {
  state = {
    isSignedIn: false
  }

  render() {
    return (
      <div>
      <nav>
      <li><Link to="/">Logo</Link></li>
      <li><Link to="/culture">People and Culture</Link></li>
      <li><Link to="/activites">Things to See and Do</Link></li>
      <li><Link to="/auth/login">Icon to Log In</Link></li>
        </nav>

      <Switch>
        <Route exact path="/" render={()=> <Homepage/>}/>
        <Route exact path="/culture" component={Culture}/>
        <Route exact path="/activities" component={Activities}/>
      </Switch>
      </div>
    );
  }
}

export default App;
