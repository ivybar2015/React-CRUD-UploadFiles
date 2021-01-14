import React, { Component } from "react";
import axios from "axios";
import "./authlayout.css";
import { Label } from "@material-ui/icons";

class Register extends Component {
  constructor(props) {
    super(props);
    // initilize variable
    this.state = {
      userName: "",
      passWord: "",
      firstName: "",
      lastName: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //Any changes to the input is handled by the handleInput() handler, which updates the corresponding values in the state
  handleInput(event) {
    const target = event.target;
    this.setState({
      [target.name]: target.value,
    });
  }
  // when click 'submit' button this funtion will get call
  handleSubmit(event) {
    event.preventDefault();
    // getting  data from out of 'state' to add to table database
    axios
      .post("https://localhost:44388/api/users/addusers", {
        userName: this.state.userName,
        passWord: this.state.passWord,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
      })
      .then((res) => {
        console.log(res);
        console.log(res.db);
        // go to listuser page
        this.props.history.push('/listuser')
      });
  }

  render() {
    return (
      
      <div className="input-form">
      
      <React.Fragment>
 
        <br></br>

        <form onSubmit={this.handleSubmit}> Create An Account:
        <br></br>
        <br></br>
          <div>
            <input
              type="text"
              id="userName"
              // holde current value
              value={this.state.userName}
              // name have to match with userName of state and will hole userName 'input'
              name="userName"
              placeholder="User Name"
              // after got input call  handleChange() and  passing  'event'
              onChange={this.handleInput}
            ></input>
          </div>
          <br></br>
          <div>
            <input
              type="password"
              id="passWord"
              // holde current value
              value={this.state.password}
              // name have to match with passWord of state and will hole passWord 'input'
              name="passWord"
              placeholder="PassWord"
              // after got input call  handleChange() and  passing  'event'
              onChange={this.handleInput}
            ></input>
          </div>
          <br></br>
          <div>
            <input
              type="text"
              id="firstName"
              name="firstName"
              // holde current value
              value={this.state.firstName}
              placeholder="First Name"
              // after got input then pass 'event' into handleChange()
              onChange={this.handleInput}
            ></input>
          </div>
          <br></br>
          <div>
            <input
              type="text"
              // holde current value
              id="lastName"
              name="lastName"
              value={this.state.lastName}
              placeholder="Last Name"
              // after got input then pass 'event' into handleChange()
              onChange={this.handleInput}
            ></input>
          </div>
          <br />
          {/* put button on the form 'finished' */}
          <input type="submit" color="primary" value="Register"></input>
        </form>
      </React.Fragment>
      </div>
    );
  }
}
export default Register;
