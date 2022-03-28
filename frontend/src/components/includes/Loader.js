import React, { Fragment } from 'react'

const Loader = (props) => {
    let size = ''
    if(props.size.length > 1)
    {
        size = `spinner-${props.type}-${props.size}`
    }
    return (
        <Fragment>
            <div className={`spinner-${props.type} ${size} text-${props.color}`}></div>
            &nbsp;<span> {props.content} </span>
        </Fragment>
    )
}

export default Loader