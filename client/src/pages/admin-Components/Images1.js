import React from 'react';

function Images(props){
   return <div className='div-image-admin card'>
       <img src={props.url} className='photos-admin' alt="pics"></img>
       <button className="btn-outline-dark btn-sm btn-delete" onClick={()=> props.handleClickCloud(props.id)}>Delete</button>
       </div>

}

export default Images;