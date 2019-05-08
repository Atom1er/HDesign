// export default App;
// <<<<<<< HEAD
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Admin from "./components/Admin";

import SignUp from "./components/LogsignIn/SignUp";
import LogIn from "./components/LogIn/LogIn";
import RedirectGoogleAuth from "./components/RedirectGoogleAuth";

import List from "./components/List";
import PhotoWidgetUploader from "./components/PhotoWidgetUploader";
import UsersDb from "./components/UsersDb";
// test one two threeeee

// =======
// import React, { Component } from 'react';
// import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
// import './App.css';

// // import SignUp from './components/SignUp';
// import SUP from './components/sign-up';
// // import LogIn from './components/LogIn';
// import RedirectGoogleAuth from './components/RedirectGoogleAuth';
// import LoginLocal from './components/login-local';
// import PersonalAccount from './components/personal-account';
// import Logout from './components/logout';
// import Users from './components/Users';
// //Import components for admin site //
// import ModernAdmin from "./pages/admin-Components/ModernAdmin";
// import DecorAdmin from "./pages/admin-Components/DecorAdmin";
// import LuxuryAdmin from "./pages/admin-Components/LuxuryAdmin";
// import AntiqueAdmin from "./pages/admin-Components/AntiqueAdmin";

// // import List from './components/List';
// import PhotoWidgetUploader from './components/PhotoWidgetUploader';
// import UsersDb from './components/UsersDb';

// import Home from './pages/Home';
// >>>>>>> f2701a2bbe69aa7c63d63b5a20482f4b18ca9f77
import Modern from "./pages/Modern";
import Decor from "./pages/Decor";
import Luxury from "./pages/Luxury";
import Antique from "./pages/Antique";
import Container from "./components/Container";
import "./components/Container.css";
// <<<<<<< HEAD
// import NavbarMain from "./components/Navbar-main/Navbar-main";
// import NavbarUser from "./components/Navbar-user/Navbar-user";
// import Footer from "./components/Footer";
// =======

// import NavbarMain from "./components/Navbar-main/Navbar-main";
// import NavbarUser from "./components/Navbar-user/Navbar-user";

// import Navbar from "./components/Navbar";
// import Admin from './pages/Admin';
// import SignUp from './pages/SignUp';
// import LogIn from './pages/LogIn';
// import LocalAPI from './utils/local-auth';
// // import Footer from "./components/Footer";
// >>>>>>> f2701a2bbe69aa7c63d63b5a20482f4b18ca9f77

class App extends Component {
  // <<<<<<< HEAD
  //   render() {
  //     const App = () => (
  //       <Container>
  //         <NavbarUser />
  //         <NavbarMain />
  //         <Switch>
  //           <Route exact path="/" component={Home} />
  //           <Route exact path="/modern" component={Modern} />
  //           <Route exact path="/decor" component={Decor} />
  //           <Route exact path="/luxury" component={Luxury} />
  //           <Route exact path="/antique" component={Antique} />
  //           <Route exact path="/admin" component={Admin} />
  //           <Route path="/list" component={List} />
  //           <Route exact path="/login" component={LogIn} />
  //           <Route path="/signup" component={SignUp} />
  //           <Route
  //             exact
  //             path="/photoWidgetUploader"
  //             component={PhotoWidgetUploader}
  //           />
  //           {/* <Route exact path="/apiPhotos" component={ApiPhotos}/> */}
  //           <Route exact path="/usersDb" component={UsersDb} />
  //           {window.location.origin === "http://localhost:3000" ? (
  //             <Route exact path="/auth/google" component={RedirectGoogleAuth} />
  //           ) : (
  //             false
  //           )}
  //         </Switch>
  //         <Footer />
  //       </Container>
  //     );
  //     return <App />;
  // =======

  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount = () => {
    if (!this.state.user || !this.state.user.email) {
      LocalAPI.getUserData().then(user => {
        if (user) {
          this.setState({ user: user.data });
        }
      });
    }
  };

  setUser = user => {
    this.setState({
      user: user
    });
  };

  render() {
    return (
      <Router>
        <Container>
          <NavbarUser user={this.state.user} />
          <NavbarMain />
          <Switch>
            {/* <Route exact path= '/Users' component={Users}/> */}
            <Route exact path="/" component={Home} />
            {/* <Route exact path='/modern' render={()=>(<Modern {...this.props}/>)}  component={Modern} /> */}
            <Route
              exact
              path="/modern"
              render={() => (
                <Modern
                  {...this.props}
                  setUser={this.setUser}
                  user={this.state.user}
                />
              )}
            />
            <Route
              exact
              path="/decor"
              render={() => (
                <Decor
                  {...this.props}
                  setUser={this.setUser}
                  user={this.state.user}
                />
              )}
            />
            <Route
              exact
              path="/luxury"
              render={() => (
                <Luxury
                  {...this.props}
                  setUser={this.setUser}
                  user={this.state.user}
                />
              )}
            />
            <Route
              exact
              path="/antique"
              render={() => (
                <Antique
                  {...this.props}
                  setUser={this.setUser}
                  user={this.state.user}
                />
              )}
            />
            <Route exact path="/admin" component={Admin} />

            <Route exact path="/modernadmin" component={ModernAdmin} />
            <Route exact path="/luxuryadmin" component={LuxuryAdmin} />
            <Route exact path="/decoradmin" component={DecorAdmin} />
            <Route exact path="/antiqueadmin" component={AntiqueAdmin} />

            <Route exact path="/login" component={LogIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/sign-up" component={SUP} />
            <Route exact path="/logout" component={Logout} />
            <Route
              exact
              path="/login-local"
              render={() => (
                <LoginLocal
                  {...this.props}
                  setUser={this.setUser}
                  user={this.state.user}
                />
              )}
            />
            <Route
              exact
              path="/personal-account"
              render={() => (
                <PersonalAccount
                  {...this.props}
                  setUser={this.setUser}
                  user={this.state.user}
                />
              )}
            />
            <Route
              exact
              path="/photoWidgetUploader"
              component={PhotoWidgetUploader}
            />
            {/* <Route exact path="/apiPhotos" component={ApiPhotos}/> */}
            <Route exact path="/usersDb" component={UsersDb} />
            {window.location.origin === "http://localhost:3000" ? (
              <Route exact path="/auth/google" component={RedirectGoogleAuth} />
            ) : (
              false
            )}
          </Switch>
          {/* <Footer /> */}
        </Container>
      </Router>
    );

    // >>>>>>> f2701a2bbe69aa7c63d63b5a20482f4b18ca9f77
  }
}

export default App;
