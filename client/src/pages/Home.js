import React, { Component } from "react";
// import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="h">
        <div class="container-fullwidth">
          <div id="box1">
            <h2>
               {/* {" lalalalalal"}  */}
              <span>Modern </span> <span>Design</span>
              {/* {" ggf"} */}
            </h2>
            <h2 className='happy'> {" home is a happy place"}
            
            <br/>
            <button class='button btn btn--future'>Discover More</button>
            </h2>
           
          </div>
          <div id="box2">
            <h1 className='master'>Masterpieces
            <br />
            <h2 className='happy'> {" discover the finest home decor"} </h2>
            
              <button class='button btn btn--future'>Discover More</button>
            </h1>
           
          </div>
          <div id="box3">
          
          <h1 className='master'>Masterpieces <br/>
          
          <blockquote class="blockquote text-center">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
           
              <button class='button btn btn--future'>Discover More</button>
            </h1>
          </div>
          <div id="box4">
          <h1 className='master'>Masterpieces
              <br />
              <button class='button btn btn--future'>Discover More</button>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
