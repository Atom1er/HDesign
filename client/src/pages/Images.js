import React from 'react';

function Images(props){
   return <div className='div-image'>
       <img src={props.url} className='photos' alt="pics"></img>
       <button className='image-button' onClick={()=>props.handleClick(props.url)}>Favorite</button>
       <button className="image-buton" onClick={()=> props.handleClickDelete(props.url)}>Delete</button>
       <button className="image-buton" onClick={()=> props.handleClickCloud(props.id)}>Delete from cloud</button>
       </div>

}

export default Images;