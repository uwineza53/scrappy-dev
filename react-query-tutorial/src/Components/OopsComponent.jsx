import React from 'react'

const OopsComponent = ({error, resetErrorBoundary}) => {
    return (
        <div className='full-center'>
            <b> Something Went Wrong: </b>
            <pre><br />{ error.message }</pre>
        </div>
    )
}

export default OopsComponent