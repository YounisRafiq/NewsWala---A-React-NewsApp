import React from 'react'
import Spinner from './spinner.gif.gif';

const LoadingSpinner = () =>{
    return (
      <div className='text-center'>
        <img src={Spinner} alt="Loading..." style={{ width: '50px', height: '50px', marginTop: "7rem"}} />
      </div>
    )
}

export default LoadingSpinner

