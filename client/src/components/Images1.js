import React from 'react';

function Images(props) {
    return <div className="wrapper">
        <div
            className="personal-image"
            style={{ backgroundImage: `url(${props.url})`}}>

            <button style={{float: "right"}}
                    className="image-buton" 
                    onClick={() => props.handleClickDelete(props.url)}>X</button>

        </div>


    </div>

}

export default Images;