import React from "react";
import axios from "axios";
import "./Home.css";


class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      results: []
    };
  }

  componentDidMount() {

    let results = [];
    

    axios.get(
      "http://api.giphy.com/v1/gifs/search?q=" +
      "Cat" +
      "&api_key=HNd0jyByjbDaZ9OF8DIwoRaJ4Ufw0lSE&limit=10").then(
        res => {

          let response = res.data.data;

          if (res.data) {
            for (let i in response) {
              results[i] = response[i].id;
              console.log(results[i]);
              console.log(res.data.data);
            }
            // console.log(res.data.data[0].url);
            this.setState({
              results: results
            });
          }
        }
      );
  }

  render() {

    // let dataKey = this.state.results.id;
    // console.log("hello " + dataKey);

    return (

      <div>
        {this.state.results.map(result => <p>{result}</p>)}

        {/* <img key={item.id} className="card-img-top image loading img-responsive" style={imgStyle} alt={item.embed_url} width={item.images.fixed_width.width} height={item.images.fixed_width.width} src={item.images.fixed_width.url} /> */}

      </div>

    );
  }
}

export default Home;