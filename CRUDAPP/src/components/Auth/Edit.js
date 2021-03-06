import React, { Component } from "react";
//import BrowserRouter from "react-router-dom";
import axios from "axios";
import "./authlayout.css";

class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // usernname and password have to match with variable name declared at web api
            // declare  list
            //  data: [],
            //  Id: props.match.params.id,
            //  username: "",
            //    firstname: "",
            //  lastname: "",
        };

        // let bind to funtion update value
        this.userName = this.userName.bind(this);
        this.firstName = this.firstName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    userName(event) {
        this.setState({ useName: event.target.value });
    }

    firstName(event) {
        this.setState({ firstName: event.target.value });
    }

    handleCancel() {
        //   this.setState({ username: event.target.value });
        this.props.history.push('/listuser')
    }
    onSubmit(event) {
        // We can use the `useParams` hook here to access the dynamic pieces of the URL.

        event.preventDefault();
        const apiurl = "https://localhost:44388/api/users/edituser";
        const recored = {

            //get id passe
            Id: this.props.match.params.id,
            useName: this.state.useName,
            firstName: this.state.firstName,

        }

        axios.post(apiurl, recored)
            .then(res => {
                console.log(res.dbase)
                //this.setState({ data: res.data.dbase })
                // go to listuser page
                this.props.history.push('/listuser')

            })
    }
    render() {
        return (
            <div className="input-form">
                <React.Fragment>
                    <form onSubmit={this.onSubmit}>
                        <div>
                            <label> User Name  </label>
                            <input
                                type="text"
                                id="useName"
                                // holde current value
                                value={this.state.useName}
                                // name have to match with username of state and will hole username 'input'
                                name="useName"
                                placeholder="User Name"
                                // after got input call  handleChange() and  passing  'event'
                                onChange={this.userName}
                            ></input>
                            <br></br>

                        </div>
                        <di>
                            <label> First Name  </label>
                            <input
                                type="text"
                                id="firstName"
                                // holde current value
                                value={this.state.firstName}
                                // name have to match with username of state and will hole username 'input'
                                name="firstName"
                                placeholder="User Name"
                                // after got input call  handleChange() and  passing  'event'
                                onChange={this.firstName}
                            ></input>
                        </di>
            
                            <br></br>

                        <br />
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
export default Edit;