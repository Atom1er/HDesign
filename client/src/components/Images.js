import React from 'react';
import "./Images.css";

function Images(props) {
    return (

        <div className='image-box' style={{ backgroundImage: `url(${props.url})`, backgroundSize: "cover", height: "200px", width: "300px" }}>
            <span onClick={() => props.handleClick(props.url)}><i className="fas fa-heart pink"></i></span>


            {/* <img src={props.url} className='photos' alt={props.url}></img> */}
            {/* <button className='image-button' onClick={() => props.handleClick(props.url)}>Favorite</button> */}
        </div>

    )
}

export default Images;