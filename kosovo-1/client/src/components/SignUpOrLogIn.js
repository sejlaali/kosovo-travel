import React, {Component} from 'react'

class SignUpOrLogIn extends Component {
    state = {
        email: "",
        password: "",
        password_confirmation: ""
      };
    
      handleChange = e => {
        let name = e.target.name 
        let value = e.target.value;
        this.setState({
          [name]: value
        })
      };
      
    render() {
        return (
          <div>
            <form>
              <div>
                <label for="email">E-mail: </label>
                <input
                  onChange={this.handleChange}
                  type="text"
                  name="email"
                  value={this.state.email}
                />
              </div>
              <div>
                <label for="password">Password: </label>
                <input
                  onChange={this.handleChange}
                  type="password"
                  name="password"
                  value={this.state.password}
                />
              </div>
              <div>
                <label for="password_confirmation">Confirm Password: </label>
                <input
                  onChange={this.handleChange}
                  type="password"
                  name="password_confirmation"
                  value={this.state.password_confirmation}
                />
              </div>
    
              <button onClick={this.signUp}>Sign Up</button>
              <button onClick={this.signIn}>Log In</button>
            </form>
          </div>
        );
      }
}

export default SignUpOrLogIn;