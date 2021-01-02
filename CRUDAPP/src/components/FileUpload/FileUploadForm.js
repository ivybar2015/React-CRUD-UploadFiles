import React from 'react'
import axios, { post } from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button, Alert, Card } from 'react-bootstrap';
import './FileUploadForm.css';
import FileUploadList from './FileUploadList';



class FileUploadForm extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      UserId: 1,
      Label: '',
      file:null,
      filename: '',
      message: ''
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    // this.fileUpload = this.fileUpload.bind(this)
  }
  

  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    // this.fileUpload(this.state.file).then((response)=>{
    //   console.log(response.data);
    // })
    const apiurl = `https://localhost:44388/api/userimage/addtodb`;
    const formDataData = {
        UserId: this.props.UserId,
        Label: this.state.label,
        file: this.state.file
    }
    
    const formData = new FormData()
    // add a non-binary file
    formData.append('UserId', this.state.UserId)
    formData.append('Label', this.state.Label)    
    formData.append('MimeType', 'image/jpeg')    
    formData.append('files[]', this.state.file, { type: 'application/json' });
    console.log('formData ', formData);
    var parent = this; // Cannot call props directly inside of Axios response

    axios({
      method: 'post',
      url: apiurl,
      data: formData,
      headers: {'Content-Type': 'multipart/form-data' }
      })
      .then(function (response) {
          //handle success
          parent.props.onAddFile();
          this.props.history.push('/filelist')
         
          // console.log(response);
      })
      .catch(function (response) {
          //handle error
          console.log(response);
    });
  }

  onChangeInput(event) {
    console.log('event ', event);
    const target = event.target;        
    const name = target.name;
    var value = target.value;     
    this.setState({
        [name]: value
    });
  }

  onChangeFieldField(e) {
    this.setState({file:e.target.files[0], filename: e.target.files[0].name})
  }
  
  onChange(e) {
    this.setState({file:e.target.files[0]})    
  }

  render() {
    
    
    const isAlert = false; 
    return (
      <div className="input-form">
      <React.Fragment>
        <Form onSubmit={this.onFormSubmit}>
          <div className="row">
            <div className="col">
              <input type="hidden" name="UserID" value="1" />
                <Form.Group >
                  <Form.Label className="right ml-20">Title</Form.Label>
                  <Form.Control type="text" placeholder="File Title" name="Label" id="Label" onChange={this.onChangeInput.bind(this)}/>
                  <Form.Text className="text-muted">
                  Title for Searching
                  </Form.Text>
                </Form.Group>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
            <Form.Group >
              <Form.Label className="right ml-20">Choose a file</Form.Label>
              <Form.File 
                id="custom-file"
                label={this.state.filename}                    
                custom
                onChange={this.onChangeFieldField.bind(this)}
               />
             </Form.Group>
             </div>
            </div>
            <div className="row mt-5">
              <div className="col text-left">
                <Button variant="primary" type="submit">
                    Submit Form
                </Button>
              </div>
            </div>
            
        </Form>

      </React.Fragment>
      </div>
    )
  }
}

export default FileUploadForm