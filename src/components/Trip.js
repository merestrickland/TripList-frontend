import React, { Component } from 'react'
import { connect } from 'react-redux';


class Trip extends Component {
  
  state = {
    wantToSend: false,
    sending: false
  }


  clickToSend = () => {
    // console.log("hi")
    this.setState({
      wantToSend: !this.state.wantToSend
    })
    
  }

  listUsers = (props) => {
    // console.log(props.users)
    let userList = props.users.map(user => {
    
      return (
        <form>
          <label>
            {"Send to:"}
            <input
            name = {"sendTo"}
            type={"checkbox"}/>
          </label>
        </form>
        // <div>{user.first_name + " " + user.last_name}</div>
      )
    })
    return userList
  }


  render(){
    
    // console.log("this is all of trip props", this.props)
    // console.log("this is trip state", this.state)
    // console.log("this is trip props", this.props.trip)

    let trip = this.props.trip

    return (
       
      // console.log(props.users)
      
        <div style={{"background-color": "gray"}}>
          <h1>{trip.name}</h1>
          {this.state.wantToSend ? this.listUsers(this.props) : console.log('bloop') }
          <button onClick={() => this.clickToSend()}>
            ➡️
          </button>
        </div>
      
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state.users)
  return {
    users: state.users

  }
}


const mapDispatchToProps = (arg) => {
  return {

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Trip)

