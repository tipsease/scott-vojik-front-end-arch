import React from "react";

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleLogin = e => {
    localStorage.setItem(`${this.state.username}`, 'user')
  }

  render() {
    return (
      <form>

        <input type="text" placeholder="User Name" name="username" value={this.state.username} onChange={this.handleInputChange} required />
        <input type="text" placeholder="Password" name="password" value={this.state.password} onChange={this.handleInputChange} required />

      <button onClick={this.handleLogin}>Log In</button>
      </form>
    )
  }
}

export default Login;
