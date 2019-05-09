import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Images from './Images1';
import axios from "axios";
import Widget from '../../components/PhotoWidgetUploader';
import "./admin.css";


class Welcome extends Component {
     

    render() {
        
        return (
            <div className="container-admin">
                <div className='new-photo-admin'>
                    <h3>New Photo Upload for <strong>Page</strong></h3>
                    <hr></hr>
                    <p>Make sure to include "Decor", "Modern", "Luxury", or "Antique" tag in "advance options" when upload new photo</p>
                    
                </div>
                <div className="back-btn-admin">
                    <Widget/> 
                    </div>
                <div className="photo-container-admin">
                    <p>Hello! this is the administrator site, for managing page</p>
                </div>
            </div>
        );

        
    }
}

export default Welcome;