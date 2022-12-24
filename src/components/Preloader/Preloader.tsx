import React from 'react';
import './Preloader.scss'
import HashLoader from "react-spinners/HashLoader";

const Preloader = () => {
    return (
        <div className='loading'>
            <HashLoader color={"#6e6ad9"}  size={100} />
        </div>
    )
}

export default Preloader;