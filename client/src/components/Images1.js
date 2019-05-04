import React from 'react';

function Images(props){
   return <div className='div-image'>
       <img src={props.url} className='photos' alt="pics"></img>
       <button className="image-buton" onClick={()=> props.handleClickDelete(props.url)}>Delete</button>
       </div>

}

export default Images;