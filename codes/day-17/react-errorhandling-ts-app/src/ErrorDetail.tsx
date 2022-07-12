import React from 'react'

type errorPropType = {
    message: string,
    info?: any
}
const ErrorDetail = (props: errorPropType) => {
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

export default ErrorDetail