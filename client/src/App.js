// export default App;
import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';


import SignUp from './components/SignUp';
import SUP from './components/sign-up';
import LogIn from './components/LogIn';
import RedirectGoogleAuth from './components/RedirectGoogleAuth';
import LoginLocal from './components/login-local';
import PersonalAccount from './components/personal-account';
import Logout from './components/logout';
import Users from './components/Users';

import List from './components/List';
import PhotoWidgetUploader from './components/PhotoWidgetUploader';
import UsersDb from './components/UsersDb';


import Admin from './pages/Admin';
import Modern from "./pages/Modern";
import Decor from "./pages/Decor";
import Luxury from "./pages/Luxury";
import Antique from "./pages/Antique";
import Container from "./components/Container";
import "./components/Container.css";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }
  
    
  
  // state = {
  //   user: {}
  // }

  setUser = (user) => {
    this.setState({
      user: user
    });
  }

  render() {
    
    return (
      <Router>
        
        <Container>
          <Navbar />
          <Switch>
            {/* <Route exact path= '/Users' component={Users}/> */}
            <Route exact path='/' component={Home} />
            {/* <Route exact path='/modern' render={()=>(<Modern {...this.props}/>)}  component={Modern} /> */}
            <Route exact path="/modern" render={() => (<Modern {...this.props} setUser={this.setUser} user={this.state.user} />)}/>
            <Route exact path="/decor" component={Decor}/>
            <Route exact path="/luxury" component={Luxury} />
            <Route exact path="/antique" component={Antique} />
            <Route exact path='/admin' component={Admin} />
            <Route path='/list' component={List} />
            <Route exact path='/login' component={LogIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/sign-up' component={SUP} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/login-local" render={() => (<LoginLocal {...this.props} setUser={this.setUser} user={this.state.user} />)}/>
            <Route exact path="/personal-account" render={
              () => (
                <PersonalAccount {...this.props} setUser={this.setUser} user={this.state.user} />
              )
            } />
            <Route exact path="/photoWidgetUploader" component={PhotoWidgetUploader} />
            {/* <Route exact path="/apiPhotos" component={ApiPhotos}/> */}
            <Route exact path="/usersDb" component={UsersDb} />
            {window.location.origin === "http://localhost:3000" ?
              <Route exact path="/auth/google" component={RedirectGoogleAuth} />
              : false}
          </Switch>
          {/* <Footer /> */}
        </Container>
      </Router>

    );
   
  }

}

export default App;
