import React from 'react'

const ErrorInfo = (props) => {
    console.log(props);
    return (
        <>
            <br />
            <br />
            <div>Error Occurred</div>
            <div>
                <b>
                    Message: &nbsp;{props.message}
                </b>
            </div>
            {/* <div>
                Complete Error Details:
                <br />
                <p>
                    {props.info.stack}
                </p>
            </div> */}
        </>
    )
}

export default ErrorInfo