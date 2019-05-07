import React from 'react';

function Images(props) {
    return <div className='div-image'>
        <div
            style={{
                backgroundImage: `url(${props.url})`,
                backgroundSize: "cover",
                height: "200px",
                width: "300px",
                borderRadius: "20px",
                margin: "10px"
            }}>
        </div>
        <button className='image-button' onClick={() => props.handleClick(props.url)}>Favorite</button>
        <button className="image-buton" onClick={() => props.handleClickDelete(props.url)}>Delete</button>
        <button className="image-buton" onClick={() => props.handleClickCloud(props.id)}>Delete from cloud</button>
    </div>

}

export default Images;