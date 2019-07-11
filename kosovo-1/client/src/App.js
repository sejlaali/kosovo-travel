import React, { Component } from "react";
import "./App.css";
import axios from 'axios'
import { Switch, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import Culture from "./components/Culture";
import Activities from "./components/Activities";
import SignUpOrLogIn from "./components/SignUpOrLogIn";
import {saveAuthTokens, setAxiosDefaults, userIsLoggedIn, clearAuthTokens} from "./util/SessionHeader"
import {MediaQuery} from 'react-responsive'
import MobileNav from './components/MobileNav'
import ReviewForm from './components/ReviewForm'
import Reviews from './components/Reviews'
import kosovoImg from "./components/assets/kosovo-flag.png"
import "../src/components/Homepage.css"
// import { useTranslation } from 'react-i18next';


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
   try {const res = await axios.post("http://localhost:3000/auth", payload);
  saveAuthTokens(res.headers)
  this.setState({
    isSignedIn: true
   });
   }
   catch {
     alert('You must fill in all of the fields.')
   }
  };
  

  
  signIn = async (email, password) => {
    const payload = {
      email,
      password
    };
    try {const res = await axios.post("http://localhost:3000/auth/sign_in", payload);
    saveAuthTokens(res.headers)
    this.setState({
      isSignedIn: true
    });
  } catch {
    alert("You have entered an invalid username or password.")
  }
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
      <Link to="/"><img id="header-img" src={kosovoImg} /></Link>

        <MediaQuery query='(max-width: 799px)'>
      <MobileNav loginOrOut={loginOrOut} right={true} pageWrapId={"page-wrap"} outerContainerId={"App"} />
      </MediaQuery>
      <div id="page-wrap">
        <MediaQuery query='(min-width: 800px)'>
        <nav style={navStyles}>
          <li>
            <Link to="/">Logo</Link>
          </li>
          <li>
           {/* <Trans i18nKey='welcome.intro'> */}
            <Link to="/culture">People and Culture</Link>
            {/* </Trans> */}
          </li>
          <li>
            <Link to="/activities">Things to See and Do</Link>
          </li>
          <li>
            <Link to="/auth/login">{loginOrOut}</Link>
          </li>
        </nav>
        </MediaQuery>

        <Switch>
          <Route exact path="/" render={() => <Homepage />} />
          <Route exact path="/culture" component={Culture} />
          <Route exact path="/activities" component={Activities} />
          <Route exact path="/activity/:id/reviews" render={(props) => <Reviews isSignedIn={this.state.isSignedIn} {...props}/>} />
          <Route exact path="/activity/:id/reviews" render={(props) => <ReviewForm isSignedIn={this.state.isSignedIn} {...props}/>} />
          <Route exact path="/activity/:id/reviews/:review_id/edit" render={(props)=> <ReviewForm {...props} isSignedIn={this.state.isSignedIn} isUpdateForm={true}/>}/>
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
      </div>
    );
  }
}

export default App;