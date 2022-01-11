import React from 'react';

// GIF
import spinner from '../../assets/gif/Spinner.gif'
const Loader = () => {
    return (
        <div style={{width: "100%",textAlign:'center'}}>
            <img src={spinner} alt="loading"/>
        </div>
    );
};

export default Loader;