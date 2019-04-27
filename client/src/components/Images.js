import React from 'react';
import "./Images.css";

function Images(props) {
    return (
    
        <div className='col-xs-12 col-sm-2 col-md-2 col-lg-2'>
            <img src={props.url} className='photos' alt={props.url}></img>
        </div>

    )
}

export default Images;