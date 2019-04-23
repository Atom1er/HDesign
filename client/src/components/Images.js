import React from 'react';

function Images(props){
    return <div className='div-image'>
        <img src={props.url} className='photos'></img>
        </div>
    
}

export default Images;