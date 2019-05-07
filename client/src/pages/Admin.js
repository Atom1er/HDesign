import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

//Import components for admin site //
import ModernAdmin from "./admin-Components/ModernAdmin";
import DecorAdmin from "./admin-Components/DecorAdmin";
import LuxuryAdmin from "./admin-Components/LuxuryAdmin";
import AntiqueAdmin from "./admin-Components/AntiqueAdmin";
import NavbarAdmin from './admin-Components/NavbarAdmin';
import './admin-Components/admin.css';
import Welcome from './admin-Components/Welcome';


class Admin extends Component {

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
                    </Switch>

                </div>
            </Router>
            </div>
        )


    }

}

export default Admin;