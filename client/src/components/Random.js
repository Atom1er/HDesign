import React from 'react';
import { Redirect } from 'react-router-dom';

function Random(){

    return(
        <div>
            <Redirect to={"/"} />
            <p>Random test</p>
        </div>
    )
}

export default Random;