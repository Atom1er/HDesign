import React, { Component } from 'react';
import Images from './Images';
// import './ApiPhotos.css';
import axios from 'axios';
import { Link } from "react-router-dom";

class Admin extends Component {
    // Initialize the state
    state = {
        arrPhoto: []
    }

    // Fetch the list on first mount
    componentDidMount() {
        this.getPhotos();
    }

    // Retrieves the list of items from the Express app
    getPhotos = () => {
        fetch('/api/get_photos/modern')
            .then(res => res.json())
            .then(arrPhoto => this.setState({ arrPhoto: arrPhoto.resources }));
        console.log(this.state.list);
    }

    //TO DO: to grab url from image and send it to db //
    handleClick = (url) => {
        const fav = {
            item_name: url,
        };

        // Send an AJAX POST-request//
        axios.post("/api/db/favItems", fav)
            .then(function (data) {
            });
    }

    handleClickDelete = (url) => {
        const url2 = {
            item_name: url,
        };

        // Send an AJAX POST-request//
        axios.post("/api/db/favItemsDelete", url2)
            .then(function (data) {
            });
    }

    handleClickCloud = (id) => {
        const imgId = {
            publicId: id
        }

        // Send an AJAX POST-request//
        axios.post('/api/cloud/public_id', imgId)
            .then(function (data) {
            });
    }

    render() {


        const photosUrl = this.state.arrPhoto;
        return (
            <div className="photo-container">
                {photosUrl.map(images => (
                    <Images 
                        key={images.public_id}
                        url={images.url}
                        id={images.public_id}
                        handleClick={this.handleClick}
                        handleClickDelete={this.handleClickDelete}
                        handleClickCloud={this.handleClickCloud}
                    />))}

                <Link
                    to='../photoWidgetUploader'
                    className={window.location.pathname === "/PhotoWidgetUploader" ? "nav-link active" : "nav-link"}>
                    <button variant="raised">
                        Photo upload
                    </button>
                </Link>

            </div>
        );
    }

}

export default Admin;