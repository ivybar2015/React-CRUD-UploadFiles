import React from 'react'
import axios, { post } from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button, Alert, Card } from 'react-bootstrap';
import './FileUploadForm.css';

class FileUploadList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { users: [], queryStr: ''};
        
    }
    loadData() {
        const apiurl = `https://localhost:44388/api/userimage/getdbimagelist`;
        // this.setState({users: response.data.data});
        axios({
            method: 'get',
            url: apiurl,
    //        headers: {'Content-Type': 'multipart/form-data' }
            })
            .then((response) => {
                this.setState({users: response.data.data});
                console.log(response);
                console.log(this.state.users);
                //this.setState({name: response.data.name});
            })
            .catch((e) => 
            {
            console.error(e);
            });        
    }
    componentDidMount() {
        this.loadData();
    }
  
 
    render() {
    
    const isAlert = false; 
    return (
      <div className="input-form">
      <React.Fragment>
        <table className="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Label</th>
            <th scope="col">Size</th>
            <th scope="col">MimeType</th>
            </tr>
        </thead>
        <tbody style={{height: '10px !important', overflow: 'scroll'}}>
            {this.state.users.map((data, key) => {
              return (
              <tr key={key}>                
                <td><img src={`data:${data.MimeType};base64,${data.ImageData}`} className="table-image"/></td>                
                <td>{data.Label}</td>                
                <td>{data.Size}</td>
                <td>{data.MimeType}</td>                
              </tr>
              )
           })}

        </tbody>
        </table>
      </React.Fragment>
      </div>
      )
    }
}

export default FileUploadList

