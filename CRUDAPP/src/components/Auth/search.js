import React, { Component } from "react";
//import BrowserRouter from "react-router-dom";
import axios from "axios";
import "./authlayout.css";


class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lastName: "",
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);

    }
    handleInput(event) {
        const target = event.target;
        this.setState({
          [target.name]: target.value,
        });
      }

    handleCancel() {
        //   this.setState({ username: event.target.value });
        this.props.history.push('/listuser')
    }
  // when click 'submit' button this funtion will get call
    handleSubmit(event) {
    event.preventDefault();
    // getting  data from out of 'state' to add to table database
    axios
      .post("https://localhost:44388/api/users/searchuser", {

        lastName: this.state.lastName,
      })
      .then((res) => {
        console.log(res);
        console.log(res.db);
        // go to listuser page
       //this.props.history.push('/listuser')
      });
  }


    render() {
        return(
        <div className="input-form">
        <React.Fragment>
          <br></br>
          <form onSubmit={this.handleSubmit}>
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
                                    {/* put button on the form 'finished' */}
                                    <div className="text-right"   >
                            <input

                                type="submit"
                                color="primary"
                                value="submit"
                            ></input>

                            <button onClick={this.handleCancel}>Cancel </button>

                        </div>
          </form>
        </React.Fragment>
        </div>
      );
    }

}

export default Search;