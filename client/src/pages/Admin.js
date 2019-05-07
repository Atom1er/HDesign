import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './admin-Components/admin.css';

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
    // handleClick = (url) => {
    //     const fav = {
    //         item_name: url,
    //     };

    //     // Send an AJAX POST-request//
    //     axios.post("/api/db/favItems", fav)
    //         .then(function (data) {
    //         });
    // }

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

        return (
           <div>
           <ul>

                <li className="nav-item-2">
                    <Link to="/modernadmin"
                        className="nav-link-2"
                        style={{ textDecoration: "none", color: "black" }}>
                        <p className="nav-hover-2">Modern</p>
                    </Link>
                </li>
                <li className="nav-item-2">
                    <Link to="/luxuryadmin"
                        className="nav-link-2"
                        style={{ textDecoration: "none", color: "black" }}>
                        <p className="nav-hover-2">Luxury</p>
                    </Link>
                </li>
                <li className="nav-item-2">
                    <Link to="/decoradmin"
                        className="nav-link-2"
                        style={{ textDecoration: "none", color: "black" }}>
                        <p className="nav-hover-2">Decor</p>
                    </Link>
                </li>
                <li className="nav-item-2">
                    <Link to="/antiqueadmin"
                        className="nav-link-2"
                        style={{ textDecoration: "none", color: "black" }}>
                        <p className="nav-hover-2">Antique</p>
                    </Link>
                </li>

            </ul>
            </div>
        )


    }

}

export default Admin;