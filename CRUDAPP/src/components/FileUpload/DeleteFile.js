import React, { Component } from "react";
import axios from "axios";
import './FileUploadForm.css';



function DeleteFile(props) {
    // get url and id 
    const apiurl = "https://localhost:44388/api/userimage/deleteuser?id=" + props.match.params.id;
    axios.post(apiurl)
        .then(res => {
            console.log(res.db)
        })
    return (
        <div className="input-form">
        <div>
            {  // go back to /filelist page
                props.history.push('/filelist')
            }

        </div>
        </div>
    )

}

export default DeleteFile;