import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import {Redirect} from 'react-router-dom'
import Button from "react-bootstrap/Button";
class SignUpOrLogIn extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    signUp: false
  };

  signUp = e => {
    e.preventDefault();
    this.props.signUp(
      this.state.name,
      this.state.email,
      this.state.password,
      this.state.password_confirmation
    );
  };

  signIn = e => {
    e.preventDefault();
    this.props.signIn(this.state.email, this.state.password);
  };

  handleChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  SignUpPage = () => {
    this.setState({
      signUp: true
    });
  };

  render() {
    const formToDisplay =
      this.state.signUp && !this.props.isSignedIn ? (
        <div>
          <Form style={{ margin: "60px 40px"}}>
            <Form.Group>
              <Form.Label>Name</Form.Label>

              <Form.Control
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
                placeholder="Name"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                name="password_confirmation"
                value={this.state.password_confirmation}
                onChange={this.handleChange}
                type="password"
                placeholder="Password confirmation"
              />
            </Form.Group>

            <Button onClick={this.signUp} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      ) : (
        <div>
          <Form style={{ margin: "60px 40px" }}>
            <Form.Group name="email"
                value={this.state.email}
                onChange={this.handleChange} controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group name="password"
                value={this.state.password}
                onChange={this.handleChange} controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button onClick={this.signIn} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <p>
            Don't have an account? Sign up
            <span style={{color: "#2248a1", textDecoration: "underline"}} onClick={this.SignUpPage}> here!</span>
          </p>
        </div>
      );

    return (
      <div>{this.props.isSignedIn ? <div> <Redirect to="/" /></div> : formToDisplay}</div>
    );
  }
}

export default SignUpOrLogIn;
