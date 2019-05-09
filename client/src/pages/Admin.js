import React, { Component } from 'react';
import axios from 'axios';
import { Route, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom';

//Import components for admin site //
import Users from "./admin-Components/Users";
import ModernAdmin from "./admin-Components/ModernAdmin";
import DecorAdmin from "./admin-Components/DecorAdmin";
import LuxuryAdmin from "./admin-Components/LuxuryAdmin";
import AntiqueAdmin from "./admin-Components/AntiqueAdmin";
import NavbarAdmin from './admin-Components/NavbarAdmin';
import Welcome from './admin-Components/Welcome';
import './admin-Components/admin.css';

class Admin extends Component {
    // Initialize the state
    state = {
        arrPhoto: [],
        name: ""
    }



    // Fetch the list on first mount
    // componentDidMount() {
    //     this.getPhotos();
    //     console.log("props: "+this.props.user.name)
    //     this.setState({name: this.props.user.name});
    // }

    // Retrieves the list of items from the Express app
    getPhotos = () => {
        fetch('/api/get_photos/modern')
            .then(res => res.json())
            .then(arrPhoto => this.setState({ arrPhoto: arrPhoto.resources }));
        console.log(this.state.list);
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
        if(this.props.user && this.props.user.name === 'Admin'){
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
            
        } else {
            return  (<Redirect to="/"/>);
        }
        
    }

}

export default Admin;