import React, { Fragment } from 'react'
import Loader from '../Assets/Icon/17581694.gif'

const Loading = () => {
    return (
        <Fragment>
            <div className='loading__container'>
                <img src={Loader} alt="" />
            </div>
        </Fragment>
    )
}

export default Loading
