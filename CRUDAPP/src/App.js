import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MaterialLayout from "./components/MaterialLayout/MaterialLayout";
//import { Router, Route, Link, browserHistory, IndexRoute } from "react-router";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Layout/Home";
//import Welcome from "./components/Layout/Welcome";
import ListUser from "./components/Layout/ListUser";
import About from "./components/Layout/About";
import Contacts from "./components/Layout/Contacts";
import Register from "./components/Auth/Register";
import Search from "./components/Auth/search";
import Login from "./components/Auth/login";
import MatCard from "./components/MatCard/MatCard";
import Edit from "./components/Auth/Edit";
import Delete from "./components/Auth/Delete";
import UploadFile from "./components/FileUpload/FileUploadForm";
import FileList from "./components/FileUpload/FileUploadList";
import SweetAlertComp from "./components/File-Form/SweetAlert";
import Deleted from "./components/FileUpload/DeleteFile";



//import picture from "./welcomepage.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    // send HTTP request
    // save it to the state
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    // console.log('Is Authtnticated ', isAuthenticated);
    console.log('Is Authenticated ', isAuthenticated);
  }

  render() {
    return (
      <BrowserRouter>
        {/* get MaterialLayout first then MaterialLayout will connect all the path of its component*/}
        <MaterialLayout />
            <div className="container">
              {/* {About} {Contacts} {MatCard} are for component*/}
              {/* use 'LINK' to connect the pahts*/}
              <Route  path="/" component={Home} exact = {true} />
              <Route  path="/home" component={Home} exact = {true} />
              <Route path="/listuser" component={ListUser} exact = {true}  />
              <Route path="/edit/:id" component={Edit} exact = {true} />
              <Route path="/delete/:id" component={Delete} exact = {true}  />
              <Route path="/deleted/:id" component={Deleted} exact = {true}  />

              
              <Route path="/search" component={Search} exact = {true} />
              <Route path="/alert" component={SweetAlertComp} exact = {true} />
              

              <Route path="/login" component={Login} exact = {true}  />

              <Route path="/about" component={About} exact = {true} />
              <Route path="/contact" component={Contacts} exact = {true} />
              <Route path="/mcard" component={MatCard} exact = {true} />
              <Route path="/register" component={Register} exact = {true} />
              <Route path="/uploadfile" component={UploadFile} exact = {true} />
              <Route path="/filelist" component={FileList} exact = {true} />
            </div>
      </BrowserRouter>

    );
  }
}

export default App;
