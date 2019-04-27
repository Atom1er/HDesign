import React, { Component } from 'react';
import Images from '../components/Images';
// import './ApiPhotos.css';

class Modern extends Component {
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

    render() {
        const photosUrl = this.state.arrPhoto;
        return (
            <div className="photo-container">
                {photosUrl.map(images => (
                    <Images
                        id={images.public_id}
                        url={images.url}
                    />))}
            </div>
        );
    }
}

export default Modern;