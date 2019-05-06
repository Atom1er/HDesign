import React, { Component } from 'react';
import Images from '../components/Images';
import axios from "axios";
// import './ApiPhotos.css';


class Luxury extends Component {
    // Initialize the state
    state = {
        arrPhoto: [],
        showPhoto: 5,
        showPhoto2: 10,
        name: this.props.user.email
    }

    // Fetch the list on first mount
    componentDidMount() {
        this.getPhotos();
    }

    // Retrieves the list of items from the Express app
    getPhotos = () => {
        fetch('/api/get_photos/luxury')
            .then(res => res.json())
            .then(arrPhoto => this.setState({ arrPhoto: arrPhoto.resources }));
        console.log(this.state.list);
    }

    handleClick = (url) => {
        const fav = {
            user_email: this.state.name,
            item_name: url
        };

        // Send an AJAX POST-request//
        axios.post("/api/db/favItems", fav)
            .then(function (data) {
            });
    }

    render() {

        const photosUrl = this.state.arrPhoto.slice(0, this.state.showPhoto).map(
            (images) => <Images
                key={images.public_id}
                id={images.public_id}
                url={images.url}
                handleClick={this.handleClick}
            />
        )

        const photosUrl2 = this.state.arrPhoto.slice(5, this.state.showPhoto2).map(
            (images) => <Images
                key={images.public_id}
                id={images.public_id}
                url={images.url}
                handleClick={this.handleClick}
            />
        )

        return (

            <div>
                <br />
                <div className="row">
                    <div className="col-1" />
                    <div className="image-container col-10">{photosUrl}</div>
                    <div className="col-1" />
                </div>
                <br />
                <div className="jumbotron-fluid text-center">
                    <h1>Modern</h1>
                    <hr />
                    <h3>World of modern</h3>
                </div>
                <br />
                <div className="row">
                    <div className="col-1" />
                    <div className="image-container col-10">{photosUrl2}</div>
                    <div className="col-1" />
                </div>
                <br />
            </div>

        );
    }
}

export default Luxury;