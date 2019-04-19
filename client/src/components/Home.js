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
    </div>
    );
  }
}
export default Home;