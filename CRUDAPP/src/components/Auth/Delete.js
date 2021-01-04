import React, { Component } from "react";
//import BrowserRouter from "react-router-dom";
import axios from "axios";
//import { Link } from "react-router-dom";
import "./authlayout.css";



function Delete(props) {
    // get url and id 
    const apiurl = "https://localhost:44388/api/users/deleteuser?id=" + props.match.params.id;
    axios.post(apiurl)
        .then(res => {
            console.log(res.db)
        })
    return (
        <div className="input-form">
        <div>
            {  // go bacl to listuser page
                props.history.push('/listuser')
            }


        </div>
        </div>
    )

}

export default Delete;