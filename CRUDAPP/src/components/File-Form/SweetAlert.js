import React, { Component } from 'react';
import { withSwalInstance } from 'sweetalert2-react';
import SweetAlert from 'sweetalert2-react';
 

class SweetAlertComp extends React.Component {
 
    render() {
        return (
          <div className="container ml-5 mt-5">

            <button type="button" className="btn btn-primary" onClick={() => this.setState({ show: true })}>Alert</button>
            <SweetAlert
              
              title="Demo"
              text="SweetAlert in React"
              onConfirm={() => this.setState({ show: false })}
            />
          </div>
        );
      }
}

export default SweetAlertComp;