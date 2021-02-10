import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

const LoadSpinner = WrappedComponent => ({ isLoading, ...otherProps }) =>{
    return isLoading ?
    <div style={{ display: 'flex', justifyContent:'center', alignItems:'center', width:'100vw', height:'70vh' }}>
        <Spinner animation="border" role="status"> 
            <span className="sr-only">Loading...</span>
        </Spinner>
    </div>
    :
    <WrappedComponent {...otherProps} />
}

export default LoadSpinner;