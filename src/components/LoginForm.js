import React, { Component } from 'react'
import {connect} from 'react-redux'
// import {fetchLogIn} from '../Redux'

class LoginForm extends Component {

    state = {
        email: "",
        password: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log("submitted the login form", this.state);
        fetch("http://localhost:3005/api/v1/users/login", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'accept': "application/json",
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then((response) => this.props.setUser(response.user, response.token))
    }



  render() {
    return (
      <div>
          <h3>Log In</h3>
          <form onSubmit={this.handleSubmit}>
            <label>
                Email Address:
                <input type="text" name="email"  onChange={this.handleChange}/>
            </label>
            <label>
                Password:
                <input type="password" name="password" onChange={this.handleChange}/>
            </label>
            <input type="submit"/>
          </form>
      </div>
    )
  }
}

export default LoginForm

// export default connect(null, { fetchLogIn })(LoginForm)
