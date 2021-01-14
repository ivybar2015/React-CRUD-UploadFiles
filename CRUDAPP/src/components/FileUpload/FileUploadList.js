import React, { Component } from "react";
import axios from "axios";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
//import EditIcon from '@material-ui/icons/Edit';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FileUploadForm.css';

class FileUploadList extends Component {

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
            <th scope="col">Img</th>
            <th scope="col">Label</th>
            <th scope="col">Size</th>
            <th scope="col">MimeType</th>
            <th scope="col">Delete</th>
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
                <td>
                <Link to={`/deleted/${data.ImageId}`} >
                    <Button color="secondary">
                    <DeleteIcon />
                    </Button>
                    </Link>
                    {/*  <Delete isDalete={`/delete/${index.Id}`} />*/}
                </td>        
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

