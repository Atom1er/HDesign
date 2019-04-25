import React, { Component } from 'react';

class List extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of results from the Express app
  getList = () => {
    fetch('/api/getList')
    .then(res => res.json())
    .then(list => this.setState({ list }))
  }

  render() {
    const { list } = this.state;

    return (
      <div className="App">
        <h1>List of results</h1>
        {/* Check to see if any results are found*/}
        {list.length ? (
          <div>
            {/* Render the list of results */}
            {list.map((result) => {
              return(
                <div>
                  {result}
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>No List results Found</h2>
          </div>
        )
      }
      </div>
    );
  }
}

export default List;