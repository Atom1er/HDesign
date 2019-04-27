import React, { Component } from 'react';
import Images from '../components/Images';
import "./Pages.css";

class Modern extends Component {
    // Initialize the state
    state = {
        arrPhoto: [],
        showPhoto: 5,
        showPhoto2: 10
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

    render() {

        const photosUrl = this.state.arrPhoto.slice(0, this.state.showPhoto).map(
            (images) => <Images
                id={images.public_id}
                url={images.url}
            />
        )

        const photosUrl2 = this.state.arrPhoto.slice(5, this.state.showPhoto2).map(
            (images) => <Images
                id={images.public_id}
                url={images.url}
            />
        )

        return (

            <div className="modern-container">
                <br />
                <div className="row">
                    <div className="col-1" />
                    {photosUrl}
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
                    {photosUrl2}
                    <div className="col-1" />
                </div>
                <br />
            </div>

        );
    }
}

export default Modern;