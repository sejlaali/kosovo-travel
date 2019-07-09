import React, { Component } from "react";
import "./App.css";
import axios from 'axios'
import { Switch, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import Culture from "./components/Culture";
import Activities from "./components/Activities";
import SignUpOrLogIn from "./components/SignUpOrLogIn";
import {saveAuthTokens, setAxiosDefaults, userIsLoggedIn, clearAuthTokens} from "./util/SessionHeader"

class App extends Component {
  state = {
    isSignedIn: false
  };

async componentDidMount() {
  const isSignedIn = userIsLoggedIn()

  if (isSignedIn) {
    setAxiosDefaults()
  }

  this.setState({
    isSignedIn
  })
}

  signUp = async (name, email, password, password_confirmation) => {
    const payload = {
      name: name,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    };
   const res = await axios.post("http://localhost:3000/auth", payload);
   saveAuthTokens(res.headers)

   this.setState({
      isSignedIn: true
    });
  };


  signIn = async (email, password) => {
    const payload = {
      email,
      password
    };
    const res = await axios.post("http://localhost:3000/auth/sign_in", payload);
    saveAuthTokens(res.headers)

    this.setState({
      isSignedIn: true
    });
  };

  signOut = async (e) => {
    e.preventDefault()

    clearAuthTokens();
    this.setState({
      isSignedIn: false
    })
  }

  render() {
    const navStyles = {
      display: "flex",
      listStyleType: "none",
      justifyContent: "space-around"
    };

    const loginOrOut = this.state.isSignedIn ? <button onClick={this.signOut}>Log out</button> : "Log in icon"

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
            <Link to="/auth/login">{loginOrOut}</Link>
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
                isSignedIn={this.state.isSignedIn}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
