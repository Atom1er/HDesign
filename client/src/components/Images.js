import React from 'react';
import "./Images.css";

function Images(props) {
    return (
        <span className="hover-me">
            <div className='image-box hover'
                onClick={() => props.handleClick(props.url)}
                style={{ backgroundImage: `url(${props.url})`, backgroundSize: "cover", height: "200px", width: "300px" }}>
                <span
                    className="heart"
                >&#x2764;</span>


                {/* <img src={props.url} className='photos' alt={props.url}></img> */}
                {/* <button className='image-button' onClick={() => props.handleClick(props.url)}>Favorite</button> */}
            </div>
        </span>
    )
}

export default Images;