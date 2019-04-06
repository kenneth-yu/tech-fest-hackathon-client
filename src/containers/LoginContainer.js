import React from 'react'
import {connect} from 'react-redux'
import {authenticateUser, createUser} from '../Redux/actions'

class LoginContainer extends React.Component{
  state = {
    username: "",
    password: "",
    confirmPassword: "",
    newAccount: false
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitHandler = () =>{
    console.log("username", this.state.username)
    console.log("password", this.state.password)
  }

  clickHandler = () =>{
    console.log(this.state.newAccount)
    this.setState({
      newAccount: !this.state.newAccount
    })
  }

  newAccountHandler = () =>{
    if (this.state.username || this.state.password || this.state.confirmPassword){
      if (this.state.password === this.state.confirmPassword){
        console.log("username", this.state.username)
        console.log("password", this.state.password)
        console.log("confirm Password", this.state.confirmPassword)
      }
      else{
        window.alert("Password and Confirm Password field does not match!")
      }
    }
    else{
      window.alert("Please fill in all fields.")
    }
  }
  render(){
    return(
      <div>
        <br/><br/><br/><br/><br/><br/>
        <span>Username: </span><input type="text" name="username" value={this.state.username} onChange={this.changeHandler}/>
        <br/>
        <span>Password: </span><input type="text"name="password" value={this.state.password} onChange={this.changeHandler} />
        <br/>
        {this.state.newAccount ? <div>
          <span>Confirm Password: </span>
          <input type="text"name="confirmPassword" value={this.state.confirmPassword} onChange={this.changeHandler} />
          </div> : null}
        {this.state.newAccount ?
          <input type="button" value="Create Account" onClick={this.newAccountHandler}/>
        : <input type="button" value="Submit" onClick={() => this.props.authenticateUser(this.state.username, this.state.password)}/>}
        <br/><br/>
        <span className="pseudolink" onClick={this.clickHandler}>Create a New Account</span>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authenticateUser: (username, password) => dispatch(authenticateUser(username, password)),
    // createUser: (username, password, passwordConfirm) => dispatch(createUser(username, password, passwordConfirm))
  }
}

export default connect(null, mapDispatchToProps)(LoginContainer)
