
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
    <div className="App">
      <h1>ModernDesign</h1>

{/* parralax */}
<main className="wrapper">
<section className="section parallax bg3">
    <h1> belonging  <br/>  <button type="button" className="btn  btn-outline-warning   btn-lg">View More</button></h1>
   
    
  </section>
  <section className="section static">
  <blockquote className="blockquote text-center">
  <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
  </section>
  <section className="section parallax bg1">
    <p>MASTERPIECE <br/> <h1>FINEST DESIGNS FOR YOUR HOME</h1></p>
   
  </section>
  <section className="section static">
  <h1 className='elegantshadow'>Modern Design </h1>
  </section>
  <section className="section parallax bg2">
    <h1>Live To Inspire</h1>
  </section>
  <section className="section static">
    <p>hhfjdjd</p>
  </section>

  <section className="section parallax bg5">
    <h1>SO FWUFFY AWWW</h1>
  </section>
</main>
    </div>
    );
  }
}
export default Home;

