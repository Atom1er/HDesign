import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            results: [],
        };


        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    handleSubmit = () => {

        // event.preventDefault();    
        const userSearch = {
            value: this.state.value
        }
        console.log(userSearch.value);
        axios.post('/api/cloud/user/search', userSearch)
            .then(res => {
                console.log(res);
                this.setState({ results: res.data.resources });
            })
    }



    render() {
        // console.log(this.state.value);
        return (

            <div>
                <label>
                    <input type="text" onChange={this.handleChange} />
                </label>
                <button className="nav-hover" onClick={this.handleSubmit}>
                    <Link to={{
                        pathname: "./results",
                        state: { value: this.state.results }
                    }}
                        className="nav-link"
                        style={{ textDecoration: "none", color: "black" }} />
                Go</button>
            </div>
        )
    }
}


export default Search;


