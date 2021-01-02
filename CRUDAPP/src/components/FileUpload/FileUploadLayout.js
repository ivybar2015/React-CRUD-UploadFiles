import React from 'react'
import axios, { post } from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button, Alert, Card } from 'react-bootstrap';
import './FileUploadForm.css';
import FileUploadList from './FileUploadList';
import FileUploadForm from './FileUploadForm';

class FileUploadLayout extends React.Component {

  constructor(props) {
    super(props);    
    this.child = React.createRef();
  }
  onAddFile = (newFile) => {
      console.log('File Added ', newFile);
      this.child.current.loadData();
  }
  
  render() {
    
    const isAlert = false; 
    return (
      <div className="input-form">
      <React.Fragment>
        <Container>    
          <div className="row">
            <div className="col">
              <Card style={{ width: '28rem' }} className="center">            
              <Card.Body>    
                  <FileUploadForm onAddFile={this.onAddFile.bind(this, 'File Added')}/>
              </Card.Body>
              </Card>
            </div>
            <div className="col">
                <Card style={{ width: '35rem', height: '40rem' }} className="center">            
                <Card.Body>
                  <FileUploadList ref={this.child} />
                </Card.Body>
                </Card>
              </div>
            </div>
        </Container>
      </React.Fragment>
      </div>
    )
  }
}

export default FileUploadLayout