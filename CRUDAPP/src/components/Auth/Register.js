import React, { Component } from "react";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);
    // initilize variable
    this.state = {
      username: "",
      firstname: "",
      lastname: "",
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
      .post("http://localhost:62458/api/user/add", {
        username: this.state.username,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
      })
      .then((res) => {
        console.log(res);
        console.log(res.dbase);
        // go to listuser page
        this.props.history.push('/listuser')
      });
  }

  render() {
    return (
      <React.Fragment>
        <br></br>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              id="username"
              // holde current value
              value={this.state.username}
              // name have to match with username of state and will hole username 'input'
              name="username"
              placeholder="User Name"
              // after got input call  handleChange() and  passing  'event'
              onChange={this.handleInput}
            ></input>
          </div>
          <br></br>
          <div>
            <input
              type="text"
              id="firstname"
              name="firstname"
              // holde current value
              value={this.state.firstname}
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
              id="lastname"
              name="lastname"
              value={this.state.lastname}
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
    );
  }
}
export default Register;
