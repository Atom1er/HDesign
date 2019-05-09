import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';


let LOCALAPI = {
    signupUser: (data) => {
        return axios.post('/_api/user', data).then(res =>{
            window.location.href="/login-local";
        });

    },
    loginUser: (data) => { // email, password
        return axios.post('/_api/user/login', data);
    },
    getUserData: () => {
        return axios.get('/_api/user');
    },
    getLogout: () => {
        return axios.get('/_api/user/logout');
    }
}

export default LOCALAPI;