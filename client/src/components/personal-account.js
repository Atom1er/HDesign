import React, { Component, Redirect } from 'react';
import AUTHAPI from '../utils/google-auth';
import axios from 'axios';
import Images from './Images1';
import { Link } from 'react-router-dom';

class PersonalAccount extends Component{

    state = {
        item: [],
        name: this.props.user.email
    }

    componentDidMount() {
        this.getUsers();
        // AUTHAPI.getUserData().then( userResponse => {
        //     if(userResponse.data){
        //         props.setUser(userResponse.data);
        //     }
        // })
    }

    getUsers = () => {
        axios.get("/api/db/favItems/users")
            .then(response => {
                console.log(response.data);
                let item = response.data;
                this.setState({ item: item})
            })
        // console.log(this.state.item.dataValues);
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

    render() {
        // const path = "/api/db/favItems/users/";
        // path += this.props.user.email;
        const favs = this.state.item;
        return (
            <div>
                { this.props.user.email ? (
                    //  ${this.props.user.email}
                    <div>
                        <h1>Welcome : {this.state.name}</h1>
                        {favs.map(favsUrl => (
                            <Images key={favsUrl.id}
                                url={favsUrl.item_name}
                                handleClickDelete={this.handleClickDelete} />
                        ))}
                    </div>
                     ) : (<p>{`Please sign in at `} <Link to="/">Homepage</Link> </p>)}
            </div>
        );
    }
}

export default PersonalAccount;