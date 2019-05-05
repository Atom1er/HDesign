// export default App;
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';


import RedirectGoogleAuth from './components/RedirectGoogleAuth';

import List from './components/List';
import PhotoWidgetUploader from './components/PhotoWidgetUploader';
import UsersDb from './components/UsersDb';

import Home from './pages/Home';
import Modern from "./pages/Modern";
import Decor from "./pages/Decor";
import Luxury from "./pages/Luxury";
import Antique from "./pages/Antique";
import Container from "./components/Container";
import "./components/Container.css";

import NavbarMain from "./components/Navbar-main/Navbar-main";
import NavbarUser from "./components/Navbar-user/Navbar-user";

import Navbar from "./components/Navbar";
import Admin from './pages/Admin';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
// import Footer from "./components/Footer";


class App extends Component {

  render() {
    const App = () => (
      <div>
        <Container>
          <NavbarUser />
          <NavbarMain />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path="/modern" component={Modern} />
            <Route exact path="/decor" component={Decor} />
            <Route exact path="/luxury" component={Luxury} />
            <Route exact path="/antique" component={Antique} />
            <Route exact path='/login' component={LogIn} />
            <Route exact path='/admin' component={Admin} />
            <Route exact path="/usersdb" component={UsersDb} />


            <Route path='/list' component={List} />

            <Route path='/signup' component={SignUp} />
            <Route exact path="/photoWidgetUploader" component={PhotoWidgetUploader} />

            {window.location.origin === "http://localhost:3000" ?
              <Route exact path="/auth/google" component={RedirectGoogleAuth} />
              : false}
          </Switch>
          {/* <Footer /> */}
        </Container>
      </div>
    )
    return (

      <App />

    );
  }
}

export default App;
