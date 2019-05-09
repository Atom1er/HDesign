import React, { Component, Redirect } from 'react';
// import AUTHAPI from '../utils/google-auth';
import axios from 'axios';
import Images from '../components/Images1';
import { Link } from 'react-router-dom';
import Search from './Search';
import PropTypes from 'prop-types';





class Results extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results: [''],
            text: ''
        }
    }
    
    componentDidMount () {
        const value = this.props.location.state.value;
        this.setState({results: value});
    }

    render() {
        // const img = this.props.location.state.value;
        // console.log(img);
        
        // console.log("from resutls value" + );
    
        // const path = "/api/db/favItems/users/";
        // path += this.props.user.email;
        const img = this.state.results;
        // console.log('test!!!!!!!!!!!!!!!!'+ Object.keys(this.props))
        return (
            <div>
                    <div>
                        <h3>Welcome!!!</h3>
                        {img.map(res => (
                            <Images 
                                url={res.url}
                                handleClickDelete={this.handleClickDelete} />
                        ))}
                    </div>
            </div>
        );
    }
}

export default Results;