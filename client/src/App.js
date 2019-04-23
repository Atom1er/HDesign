// export default App;
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import List from './components/List';
import ApiPhotos from './components/ApiPhotos';
import PhotoWidgetUploader from './components/PhotoWidgetUploader';
import UsersDb from './components/UsersDb';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/list' component={List}/>
          <Route exact path='/login' component={LogIn}/>
          <Route path='/signup' component={SignUp}/>
          <Route exact path="/photoWidgetUploader" component={PhotoWidgetUploader}/>
          <Route exact path="/apiPhotos" component={ApiPhotos}/>
          <Route exact path="/usersDb" component={UsersDb}/>
        </Switch>
      </div>
    )

    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;