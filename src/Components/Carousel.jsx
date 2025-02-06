import React, { Fragment, memo } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Slider = ({ responsive, data }) => {
    return (
        <Fragment>
            <Carousel autoPlay={false} showDots autoPlaySpeed={5000} infinite responsive={responsive}>
                {
                    data && data?.map((i, index) => (
                        <div key={index} className='carousel__img'>
                            <img src={i.uri} alt={index} />
                        </div>
                    ))
                }
            </Carousel>
        </Fragment>
    )
}

export default memo(Slider)
