import React from 'react';

function Images(props){
   return (
   <div className='div-image'>
        <div className="container fav-images">
            <img src={props.url} className='photos' alt="pics"></img>
            <button  className="image-buton btn btn-sm btn-danger" onClick={()=> props.handleClickDelete(props.url)}>Delete</button>
        </div>
    </div>
       )

}

export default Images;