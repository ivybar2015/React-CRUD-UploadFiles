import React, { Component } from "react";
//import BrowserRouter from "react-router-dom";
import axios from "axios";


class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // declare  list
            data: [],
            Id: props.match.params.id,
            username: "",
            firstname: "",
            lastname: "",
        };

    }


    render() {
        return ("hello");
    }

}

export default Search;