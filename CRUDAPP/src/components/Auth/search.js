import React, { Component } from "react";
//import BrowserRouter from "react-router-dom";
import axios from "axios";
import "./authlayout.css";
import SearchList from "./SearchList";


class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lastName: "",
            datastore: [],
            found: "",
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
        // get all value
    const getdata = {
          lastName: this.state.lastName,
         
        };
  
    // getting  data from out of 'state' to add to table database
    const apiUrl = "https://localhost:44388/api/users/searchuser";
    axios
      .post(apiUrl, getdata)
      .then((res) => {
        console.log(res);
      //  this.setState({ data: res.data.db });
      //  this.setState({ datastore: res.data.db });
        console.log(res.data.status);

      if(res.data.status === "404")
      {
        alert("Invalid Search");
        console.log(res.data.msg);
      }
      else{
        this.setState({ datastore: res.data.db });
      }
  
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
            <div className="text-left">
                <input
                type="submit"
                color="primary"
                value="submit" 
                >
                </input>
                <button onClick={this.handleCancel}>Cancel </button>

                {/*call function SearchList if not click on CANCEL button */}
                < SearchList searchuser = {this.state.datastore}  ></SearchList>
               
            </div>
          </form>
        </React.Fragment>
        </div>
      );
    }

}

export default Search;