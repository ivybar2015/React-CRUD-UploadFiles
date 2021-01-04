/* eslint-disable no-sequences */
import React, { Component } from "react";
import axios from "axios";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import 'bootstrap/dist/css/bootstrap.min.css';
//npmimport Delete from "./components/Auth/Delete";
import "./layout.css";



class ListUser extends Component {
    // used props so whenver /edit path done will give back new data
    constructor(props) {
        super(props)
        this.state = {
            // declare  list
            data: []

        }
    }
    componentDidMount() {
        // get HTTP request and stored data
        const ApiUrl = "https://localhost:44388/api/users/allusers";
        axios.get(ApiUrl, {}).then(response => {
            console.log(response.data.db);
            // get data to the list , dbase is database were return from web api
            this.setState({
                data: response.data.db

            })
        }
        )

    }

    render() {

        return (
            <div className="input-form">
            <section>
                <h1> List Of Users </h1>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Edit</th>
                                <th>UserName</th>
                                <th>Password</th>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.data.map((index) => {
                                    return <tr>
                                        <td>
                                            {/*{`/edit/${index.Id}`}  is go to path /edit  include Id whenevr hit edit button*/}
                                            <Link to={`/edit/${index.Id}`}>
                                                <Button color="primary">
                                                    <EditIcon />
                                                </Button>
                                            </Link>

                                        </td>
                                        <td>{index.Username}</td>
                                        <td>{index.Password}</td>
                                        <td>{index.FirstName}</td>
                                        <td>{index.LastName}</td>
                                        <td>
                                            <Link to={`/delete/${index.Id}`} >
                                                <Button color="secondary">
                                                    <DeleteIcon />
                                                </Button>
                                            </Link>
                                            {/*  <Delete isDalete={`/delete/${index.Id}`} />*/}
                                        </td>
                                    </tr>;
                                })
                            }
                        </tbody>
                    </table>
                </div>

            </section>
            </div>

        )
    }

}

export default ListUser;