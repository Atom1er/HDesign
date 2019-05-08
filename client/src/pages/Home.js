import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {



  render() {
    return (
      <div className="h">
        <div className="container-fullwidth">
          <div id="box1">
            <h2>
              <span>Modern </span> <span>Design</span>
            </h2>
<<<<<<< HEAD
            <h2 className='happy'> {" an interior design lookbook"}
            
            <br/>
            
            <button class='button btn btn--future'>Discover More</button>
=======
            <h2 className='happy'> {" home is a happy place"}

              <br />
              <Link to="./modern">
                <button className='button btn btn--future'>Discover More</button>
              </Link>
>>>>>>> f2701a2bbe69aa7c63d63b5a20482f4b18ca9f77
            </h2>

          </div>

          <div id="box2">
<<<<<<< HEAD
         
            <h1 className='master'>
           
            Decor
            <br />
            <h2 className='happy'> {"  a place for interior design perpective"} </h2>
            
              <button class=' button btn btn--future'>Discover More</button>
            </h1>
           
          </div>

        {/* <div id="box6">
            <h2>
              h
            </h2>
           
          </div> */}

          <div id="box3">
          
          <h1 className='master'> Luxury Goods <br/>
          
          <blockquote class="blockquote text-center" style={{color:'#D8B830'}}>
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
           
              <button class='button btn btn--future'>Discover More</button>
            </h1>
          </div>
         
=======
            <h1 className='master'>Luxury
            <br />
              <h2 className='happy'> {" discover the finest home decor"} </h2>
              <br />
              <Link to="./luxury">
                <button className='button btn btn--future'>Discover More</button>
              </Link>
            </h1>
          </div>

          <div id="box3">
>>>>>>> f2701a2bbe69aa7c63d63b5a20482f4b18ca9f77

            <h1 className='master'>Decor <br />

              <blockquote className="blockquote text-center">
                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
              </blockquote>
              <br />
              <Link to="./decor">
                <button className='button btn btn--future'>Discover More</button>
              </Link>
            </h1 >
          </div >

          <div id="box4">
<<<<<<< HEAD
          <h1 className='master'>
           
           Masterpiece
           <br />
           <h2 className='happy'> {"  erras of beauty"} </h2>
           
             <button class=' button btn btn--future'>Discover More</button>
           </h1>
          </div>
        </div>
      </div>
=======
            <h1 className='master'>Antique
              <br />
              <Link to="./antique">
                <button className='button btn btn--future'>Discover More</button>
              </Link>
            </h1 >
          </div >
        </div >
      </div >
>>>>>>> f2701a2bbe69aa7c63d63b5a20482f4b18ca9f77
    );
  }
}
export default Home;
