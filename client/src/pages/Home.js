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
            <h2 className="happy">
              {" "}
              {" a design lookbook"}
              <br />
              <Link to="./modern">
                <button className="button btn btn--future">
                  Discover More
                </button>
              </Link>
            </h2>
          </div>

          <div id="box2">
            <h1 className="master">
              Luxury
              <br />
              <h2 className="happy"> {" discover the finest home decor"} </h2>
              <br />
              <Link to="./luxury">
                <button className="button btn btn--future">
                  Discover More
                </button>
              </Link>
            </h1>
          </div>

          <div id="box3">
            <h1 className="master">
              Decor <br />
              <blockquote className="blockquote text-center" style={{textTransform:'lowercase', color: 'pink',}}>
                <p className="mb-0">
                The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with. The new becomes threatening, the old reassuring
                </p>
                <footer className="blockquote-footer">
                  Designer{" Paul Rand "}
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
              <br />
              <Link to="./decor">
                <button className="button btn btn--future">
                  Discover More
                </button>
              </Link>
            </h1>
          </div>

          <div id="box4">
            <h1 className="master">
              Antique
              <br />
              <Link to="./antique">
                <button className="button btn btn--future">
                  Discover More
                </button>
              </Link>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
