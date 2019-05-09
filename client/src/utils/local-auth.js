import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';


let LOCALAPI = {
    signupUser: (data) => {
        return axios.post('/_api/user', data).then(res =>{
            alert("Thank you for Signing Up! \n You can now login to your account.");
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
        return axios.get('/_api/user/logout').then(res =>{
            window.location.href="/";
        });
    }
}

export default LOCALAPI;