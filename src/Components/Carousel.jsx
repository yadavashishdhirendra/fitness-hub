import { Button } from '@mui/material';
import React, { Fragment, memo } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Slider = ({ responsive, data }) => {
    return (
        <Fragment>
            <Carousel arrows={false} autoPlay={false} showDots autoPlaySpeed={5000} infinite responsive={responsive}>
                {
                    data && data?.map((i, index) => (
                        <div key={index} className='carousel__img'>
                            <img src={i.uri} alt={index} />
                            <img src={i.responsive_uri} alt={index} />

                            <div className="content__overlay">
                                {
                                    index === 0 ? <>
                                        <h1>Train Hard. Shop Smarter.</h1>
                                        <p>Gear up with top fitness apparel, supplements, and accessories – all in one place.</p>
                                        <Button>Shop Now | 💪 Fuel Your Workout&nbsp; <ArrowRightAltIcon /></Button>
                                    </> : index === 1 ? <>
                                        <h1>Summer Shred Sale – Up <br /> to 40% Off!</h1>
                                        <p>Get your fitness essentials before the heat cools down. Limited stock only!</p>
                                        <Button>Grab the Deal | 🕒 Ends Soon!&nbsp; <ArrowRightAltIcon /></Button>
                                    </> : null
                                }
                            </div>

                        </div>
                    ))
                }
            </Carousel>
        </Fragment>
    )
}

export default memo(Slider)
