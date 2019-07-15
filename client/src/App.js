import React, { Component } from "react";
import "./App.css";
import axios from 'axios'
import { Switch, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import Activities from "./components/Activities";
import SignUpOrLogIn from "./components/SignUpOrLogIn";
import {saveAuthTokens, setAxiosDefaults, userIsLoggedIn, clearAuthTokens} from "./util/SessionHeader"
import {MediaQuery} from 'react-responsive'
import MobileNav from './components/MobileNav'
import ReviewForm from './components/ReviewForm'
import Reviews from './components/Reviews'
import kosovoImg from "./components/assets/kosovo-flag.png"
import "../src/components/Homepage.css"
import MostPopular from './components/MostPopular'
import {FiLogIn, FiLogOut} from 'react-icons/fi'


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
   try {const res = await axios.post("/auth", payload);
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
    try {const res = await axios.post("/auth/sign_in", payload);
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
    alert('You are logged out.')

    clearAuthTokens();
    this.setState({
      isSignedIn: false
    })
  }

  render() {
    const navStyles = {
      display: "flex",
      listStyleType: "none",
      justifyContent: "space-around",
      alignItems: "center"
    };

    const loginOrOut = this.state.isSignedIn ? <FiLogOut onClick={this.signOut}/> : <FiLogIn />
        return (
      <div>

        <MediaQuery query='(max-width: 799px)'>
      <MobileNav loginOrOut={loginOrOut} right={true} pageWrapId={"page-wrap"} outerContainerId={"App"} />
      </MediaQuery>
      <div id="page-wrap">
        <MediaQuery query='(min-width: 800px)'>
        <nav style={navStyles}>
          <li>
            <Link className="link-nav" to="/"><img className="nav-img" src={kosovoImg} /></Link>
          </li>
          <li>
            <Link className="link-nav" to="/activities">Things to See and Do</Link>
          </li>
          <li>
            <Link className="link-nav" to="most-popular">Most Popular</Link>
          </li>
          <li>
            <Link className="link-nav" to="/auth/login">{loginOrOut}</Link>
          </li>
        </nav>
          <hr style={{margin:"0"}}/>
        </MediaQuery>

        <Switch>
          <Route exact path="/" render={() => <Homepage />} />
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
              <Route exact path="/most-popular" render={()=> <MostPopular/>} />
        </Switch>
        </div>
      </div>
    );
  }
}

export default App;