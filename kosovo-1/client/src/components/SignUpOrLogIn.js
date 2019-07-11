import React, {Component} from 'react'

class SignUpOrLogIn extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      };

    signUp = (e) => {
        e.preventDefault()
        this.props.signUp(
            this.state.name,
            this.state.email,
            this.state.password,
            this.state.password_confirmation
        )
    }

    signIn = (e) => {
        e.preventDefault()
        this.props.signIn(
            this.state.email,
            this.state.password
        )
    }
    
      handleChange = e => {
        let name = e.target.name 
        let value = e.target.value;
        this.setState({
          [name]: value
        })
      };

    render() {
        return (
          <div style={{height: "100vh", backgroundColor: "white"}}>
        {this.props.isSignedIn ? <div>Welcome!</div> :
            <form>
              <div>
                  <label htmlFor="name">Name: </label>
                  <br/>

                  <input
                  onChange={this.handleChange}
                  type="text"
                  name="name"
                  value={this.state.name}
                />
                </div>
                <div>
                <label htmlFor="email">E-mail: </label>
                <br/>
                <input
                  onChange={this.handleChange}
                  type="text"
                  name="email"
                  value={this.state.email}
                />
              </div>
              <div>
                <label htmlFor="password">Password: </label>
                <br/>
                <input
                  onChange={this.handleChange}
                  type="password"
                  name="password"
                  value={this.state.password}
                />
              </div>
              <div>
                <label htmlFor="password_confirmation">Confirm Password: </label>
                <br/>
                <input
                  onChange={this.handleChange}
                  type="password"
                  name="password_confirmation"
                  value={this.state.password_confirmation}
                />
              </div>
    
              <button onClick={this.signUp}>Sign Up</button>
              <button onClick={this.signIn}>Log In</button>
        </form>}
          </div>
        );
      }
}

export default SignUpOrLogIn;