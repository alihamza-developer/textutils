import React from 'react'
import PropTypes from 'prop-types';

export default function Alert(props) {
    return (
        <>
            {
                props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible`} role="alert">
                    <div>{props.alert.message}</div>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            }
        </>
    )
}


// Set Prop Types
Alert.propTypes = {
    type: PropTypes.string,
    message: PropTypes.string
}