import React, { Component } from 'react';
import './App.css';
//REDUX
import {connect} from 'react-redux'
import { Provider } from 'react-redux'
//ROUTING
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import TripContainer from './containers/TripContainer'
import Home from './containers/Home'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import Error from './Error'
import UserSearch from './components/UserSearch'
import ProfileContainer from './containers/ProfileContainer'
// console.log(TripContainer)





 



class App extends Component {

  state = {
    user: {},
    token: ""
  }

   setUser = (userInformation, token) => {
    this.setState({
      user: userInformation
    })
  }



  render() {
    console.log("APP STATE", this.state)
    // console.log("APP PROPS", this.props)
    return (
      <div>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path='/login' render={()=> <LoginForm setUser={this.setUser}/> } />
            <Route path="/signup" render={()=> <RegisterForm /> } />
            <Route path="/profile" render={()=> <ProfileContainer user={this.state.user} token={this.state.token} /> } />
            <Route path="/trips" component={TripContainer} />
            <Route path="/users" component={UserSearch} />
            <Route path="/" component={Error} />
          </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(App);
