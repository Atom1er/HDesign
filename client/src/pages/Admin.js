import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

//Import components for admin site //
import Users from "./admin-Components/Users";
import ModernAdmin from "./admin-Components/ModernAdmin";
import DecorAdmin from "./admin-Components/DecorAdmin";
import LuxuryAdmin from "./admin-Components/LuxuryAdmin";
import AntiqueAdmin from "./admin-Components/AntiqueAdmin";
import NavbarAdmin from './admin-Components/NavbarAdmin';
import './admin-Components/admin.css';
import Welcome from './admin-Components/Welcome';


class Admin extends Component {
    // Initialize the state
    // state = {
    //     arrPhoto: []
    // }

    // // Fetch the list on first mount
    // componentDidMount() {
    //     this.getPhotos();
    // }

    // // Retrieves the list of items from the Express app
    // getPhotos = () => {
    //     fetch('/api/get_photos/modern')
    //         .then(res => res.json())
    //         .then(arrPhoto => this.setState({ arrPhoto: arrPhoto.resources }));
    //     console.log(this.state.list);
    // }

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

    // handleClickDelete = (url) => {
    //     const url2 = {
    //         item_name: url,
    //     };

    //     // Send an AJAX POST-request//
    //     axios.post("/api/db/favItemsDelete", url2)
    //         .then(function (data) {
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

    render() {

        return (
            <div>
            <Router>
                <div className='admin-body'>
                <NavbarAdmin />
                    <Switch>
                        <Route exact path='/admin' component={Welcome} />
                        <Route exact path='/modernadmin' component={ModernAdmin} />
                        <Route exact path='/luxuryadmin' component={LuxuryAdmin} />
                        <Route exact path='/decoradmin' component={DecorAdmin} />
                        <Route exact path='/antiqueadmin' component={AntiqueAdmin} />
                        <Route exact path='/users' component={Users} />
                    </Switch>

                </div>
            </Router>
            </div>
        )
    }

}

export default Admin;