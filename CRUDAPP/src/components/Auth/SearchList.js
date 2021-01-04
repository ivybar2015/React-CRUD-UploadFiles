import React, { Component } from "react";
//import BrowserRouter from "react-router-dom";
import axios from "axios";
//import { Link } from "react-router-dom";
import "./authlayout.css";

function SearchList(props) {
    return (
        <div className="input-form">
        <section>
                <h1> List Of Users Search </h1>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>UserName</th>
                                <th>FirstName</th>
                                <th>LastName</th>
                             
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.searchuser.map((index) => {
                                    return <tr>
                                         <td>{index.Username}</td>
                                        <td>{index.FirstName}</td>
                                        <td>{index.LastName}</td>
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

export default SearchList;