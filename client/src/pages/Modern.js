import React, { Component } from 'react';
import Images from '../components/Images';
import axios from "axios";
import "./Pages.css";
import Modal from '../components/Modal';

class Modern extends Component {
    // Initialize the state
    state = {
        arrPhoto: [],
        showPhoto: 5,
        showPhoto2: 10,
        name: this.props.user.email,
        isShowing: false
    }

    // Fetch the list on first mount
    componentDidMount() {
        // const { modern } = this.props.match.params;
        this.getPhotos();
        // this.setState({email: this.props.user.email});
    }

    openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }

    // Retrieves the list of items from the Express app
    getPhotos = () => {
        fetch('/api/get_photos/modern')
            .then(res => res.json())
            .then(arrPhoto => this.setState({ arrPhoto: arrPhoto.resources }));
        // console.log(this.state.list);
    }

    handleClick = (url) => {
        const fav = {
            user_email: this.state.name,
            item_name: url
            // user_email: this.state.email
        };

        // Send an AJAX POST-request//
        axios.post("/api/db/favItems", fav)
            .then(function (data) {
                console.log("Added to favorites")
                alert("Added to favorites");
            });
    }

    // 

    render() {

        const photosUrl = this.state.arrPhoto.map(
            (images) => <Images
                key={images.public_id}
                id={images.public_id}
                url={images.url}
                handleClick={this.handleClick}
                // openModalHandler={this.openModalHandler}
            />
        )


        return (

            <div className="overlay">
                {/* <br /> */}
                <div className="jumbotron-fluid text-center">
                    <i style={{ fontSize: "50px" }}>Modern</i>
                </div>
                {/* <br />
                <br /> */}
                {/* <Modal
                    // className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>
                </Modal> */}
                {/* <div className="row"> */}
                    {/* <div className="col-1" /> */}
                    {/* <div className="image-container col-10">{photosUrl}</div> */}
                    <div className="wrapper">{photosUrl}</div>
                    {/* <div className="col-1" /> */}
                {/* </div> */}
                <br />


                



                {/* <br /> */}
                {/* <div className="row"> */}
                    {/* <div className="col-1" /> */}
                    {/* <div className="image-container col-10">{photosUrl2}</div> */}
                    {/* {photosUrl2} */}
                    {/* <div className="col-1" /> */}
                {/* </div> */}
                {/* <br /> */}
            </div>

        );
    }
}

export default Modern;