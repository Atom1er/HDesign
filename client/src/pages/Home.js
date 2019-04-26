
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <div className="App">
        
        {/* <div className='img1'>nnn</div> */}








        {/* parralax */}
        <main class="wrapper">

          <section class="section parallax bg3">

            <h1> Modern
            <br />
              <Link to="./Modern">
                <button type="button" class="btn  btn-outline-warning   btn-lg">Modern Route</button>
              </Link>
            </h1>

          </section>

          <section class="section static">
            <blockquote class="blockquote text-center">
              <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
            </blockquote>
          </section>

          <section class="section parallax bg1">

            <p>MASTERPIECE <br /> <h1>FINEST DESIGNS FOR YOUR HOME</h1></p>

          </section>

          <section class="section static">
            <h1 class='elegantshadow'>Modern Design </h1>
          </section>

          <section class="section parallax bg2">
            <h1>Live To Inspire</h1>
          </section>

          <section class="section static">
            <p>hhfjdjd</p>
          </section>


          {/* <section class="section parallax bg4">
    <h1>SO FWUFFY AWWW</h1>
  </section> */}

          <section class="section parallax bg5">
            <h1>SO FWUFFY AWWW</h1>
          </section>
        </main>






        {/* <Link to='./list'>
        <button variant="raised">
            My List
        </button>
      </Link> */}
      </div>
    );
  }
}
export default Home;

