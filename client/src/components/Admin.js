import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
    <div className="App">
      <h1>Project Home</h1>
      {/* Link to List.js */}
      {/* Testing relation between express and React */}
      <Link to='./list'>
        <button variant="raised">
            My List
        </button>
      </Link>

      <Link to='./apiPhotos'>
        <button variant="raised">
            Photos
        </button>
      </Link>

      <Link to='./usersDb'>
        <button variant="raised">
            Users
        </button>
      </Link>

      <Link 
      to='./photoWidgetUploader'
      className={window.location.pathname === "/PhotoWidgetUploader" ? "nav-link active" : "nav-link"}>
        <button variant="raised">
            Photo upload
        </button>
      </Link>
    </div>
    );
  }
}
export default Home;