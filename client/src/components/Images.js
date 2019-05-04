import React from 'react';
import "./Images.css";

function Images(props) {
    return (

        <div className='col-xs-12 col-sm-2 col-md-2 col-lg-2' style={{backgroundImage: `url(${props.url})`, backgroundSize: "cover", height: "200px", width: "300px"}}>
            <span onClick={() => props.handleClick(props.url)}><i className="fas fa-heart pink"></i></span>


            {/* <img src={props.url} className='photos' alt={props.url}></img> */}
            {/* <button className='image-button' onClick={() => props.handleClick(props.url)}>Favorite</button> */}
        </div>

    )
}

export default Images;