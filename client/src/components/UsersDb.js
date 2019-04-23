import React, { Component } from 'react';


class UsersDb extends Component {
    // Initialize the state
    state = {
        usersFav:[]
    }

    // Fetch the list on first mount
    componentDidMount() {
        this.getUsers();
    }

    // Retrieves the list of items from the Express app
    getUsers = () => {
        fetch('/api/users/favorites')
            .then(res => res.json())
            .then(usersFav => this.setState({ usersFav: usersFav[0] }));
       
    }

    render() {
        console.log(this.state.usersFav);
        return <ul>
            <li>{this.state.usersFav.user_name}</li>
            <li>{this.state.usersFav.user_email}</li>
        </ul>
    }
}

export default UsersDb;