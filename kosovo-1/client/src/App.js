import React, { Component } from "react";
import "./App.css";
import axios from 'axios'
import { Switch, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import Culture from "./components/Culture";
import Activities from "./components/Activities";
import SignUpOrLogIn from "./components/SignUpOrLogIn";

class App extends Component {
  state = {
    isSignedIn: false
  };

  signUp = async (email, password, password_confirmation) => {
    const payload = {
      email: email,
      password: password,
      password_confirmation: password_confirmation
    };
    await axios.post("http://localhost:3000/auth", payload);
    this.setState({
      signedIn: true
    });
  };

  signIn = async (email, password) => {
    const payload = {
      email,
      password
    };
    await axios.post("http://localhost:3000/auth/sign_in", payload);
    this.setState({
      signedIn: true
    });
  };

  render() {
    const navStyles = {
      display: "flex",
      listStyleType: "none",
      justifyContent: "space-around"
    };

    return (
      <div>
        <nav style={navStyles}>
          <li>
            <Link to="/">Logo</Link>
          </li>
          <li>
            <Link to="/culture">People and Culture</Link>
          </li>
          <li>
            <Link to="/activities">Things to See and Do</Link>
          </li>
          <li>
            <Link to="/auth/login">Icon to Log In</Link>
          </li>
        </nav>

        <Switch>
          <Route exact path="/" render={() => <Homepage />} />
          <Route exact path="/culture" component={Culture} />
          <Route exact path="/activities" component={Activities} />
          <Route
            exact
            path="/auth/login"
            render={props => (
              <SignUpOrLogIn
                {...props}
                signIn={this.signIn}
                signUp={this.signUp}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
