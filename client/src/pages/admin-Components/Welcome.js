import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Images from './Images1';
import axios from "axios";
import Widget from '../../components/PhotoWidgetUploader';
import "./admin.css";


class Welcome extends Component {
    // Initialize the state
    // state = {
    //     arrPhoto: [],
    //     showPhoto: 5,
    //     showPhoto2: 10,
    // }

    // // Fetch the list on first mount
    // componentDidMount() {
    //     // const { modern } = this.props.match.params;
    //     this.getPhotos();
    //     // this.setState({email: this.props.user.email});
    // }

    

    // // Retrieves the list of items from the Express app
    // getPhotos = () => {
    //     fetch('/api/get_photos/decor')
    //         .then(res => res.json())
    //         .then(arrPhoto => this.setState({ arrPhoto: arrPhoto.resources }));
    //     // console.log(this.state.list);
    // }

    // handleClick = (url) => {
    //     const fav = {
    //         user_email: this.state.name,
    //         item_name: url
    //         // user_email: this.state.email
    //     };

    //     // Send an AJAX POST-request//
    //     axios.post("/api/db/favItems", fav)
    //         .then(function (data) {
    //             console.log("Added to favorites")
    //             alert("Added to favorites");
    //         });
    // }
    // handleClickCloud = (id) => {
    //     const imgId = {
    //         publicId: id
    //     }

    //     // Send an AJAX POST-request//
    //     axios.post('/api/cloud/public_id', imgId)
    //         .then(function (data) {
    //         });
    // }

    // // 

    render() {
        // const photosUrl = this.state.arrPhoto;
        return (
            <div className="container-admin">
                <div className='new-photo-admin'>
                    <h3>New Photo Upload for <strong>Page</strong></h3>
                    <hr></hr>
                    <p>Make sure to include "Decor", "Modern", "Luxury", or "Antique" tag in "advance options" when upload new photo</p>
                    <hr></hr>
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