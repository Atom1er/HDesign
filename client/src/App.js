// export default App;
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Admin from './components/Admin';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Random from './components/Random';

import List from './components/List';
import ApiPhotos from './components/ApiPhotos';
import PhotoWidgetUploader from './components/PhotoWidgetUploader';
import UsersDb from './components/UsersDb';
import Navy from './components/Navy';
import RedirectGoogleAuth from './components/RedirectGoogleAuth';


import SignUp from "./components/SignUp";
import LogIn from "./pages/LogIn";
import List from "./components/List";
import ApiPhotos from "./components/ApiPhotos";
import PhotoWidgetUploader from "./components/PhotoWidgetUploader";
import UsersDb from "./components/UsersDb";
import Admin from "./components/Admin";

import Home from "./pages/Home";
import Modern from "./pages/Modern";
import Decor from "./pages/Decor";
import Luxury from "./pages/Luxury";
import Antique from "./pages/Antique";
import Container from "./components/Container";
import Navbar from "./components/Navbar";

class App extends Component {

  render() {
    const App = () => (
        <div>
          <Container>
                <Switch>
                  <Navbar />
                  <Route exact path='/' component={Home}/>
                  <Route exact path="/modern" component={Modern} />
                  <Route exact path="/decor" component={Decor} />
                  <Route exact path="/luxury" component={Luxury} />
                  <Route exact path="/antique" component={Antique} />
                  <Route exact path='/admin' component={Admin}/>
                  <Route path='/list' component={List}/>
                  <Route exact path='/login' component={LogIn}/>
                  <Route path='/signup' component={SignUp}/>
                  <Route path='/navy' component={Navy}/> 
                  <Route exact path="/photoWidgetUploader" component={PhotoWidgetUploader}/>
                  <Route exact path="/apiPhotos" component={ApiPhotos}/>
                  <Route exact path="/usersDb" component={UsersDb}/>
                  <Route exact path="/random" component={Random}/>
                  { window.location.origin === "http://localhost:3000" ? 
                    <Route exact path="/auth/google" component={RedirectGoogleAuth} />
                  : false }
                </Switch>
          </Container>
        </div>
    )


    return (
      <Switch>
        <App />
      </Switch>
    );
  }
}

export default App;
