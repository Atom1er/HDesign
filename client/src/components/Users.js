import React, { Component } from 'react';
import axios from 'axios';
import Images from './Images1';
// import ImageGallery from 'react-image-gallery';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

class Users extends Component {
    state = {
        item: [],
        name: ''
        
    }
    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        axios.get("/api/db/favItems/users")
            .then(response => {
                let item = response.data;
                this.setState({ item: item })
                // this.setState({ name: item[0].user_email })
            })
        // console.log(this.state.item.dataValues);
    }
    handleClickDelete = (url) => {
        const url2 = {
            user_email:this.state.name,
            item_name: url,
        };
        // Send an AJAX POST-request//
        axios.post("/api/db/favItemsDelete", url2)
            .then(function (data) {
            });
    }
    render() {
        const favs = this.state.item;
        return (<div>
            <h1>Welcome : {this.state.name}</h1>
            {favs.map(favsUrl => (
                <Images key={favsUrl.id}
                    url={favsUrl.item_name}
                    handleClickDelete={this.handleClickDelete} />
            ))}
        </div>)
        // return <ImageGallery items={test2} />
    }
}
export default Users;