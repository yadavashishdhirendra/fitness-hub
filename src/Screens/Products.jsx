import React, { Fragment } from 'react'
import Marquee from 'react-fast-marquee'

const Products = () => {
    return (
        <Fragment>
            {/* Marquee Container starts here */}
            <div className='marquee__container__row'>
                <Marquee>
                    💪🔥 Get 50% OFF on Gym Memberships! Limited Period Offer – Buy 1-Year Membership & Get 2 Months FREE! 🏋️‍♂️🎁 Hurry, Join Now! ⏳
                </Marquee>
            </div>
            {/* Marquee Container ends here */}

            <div className="container">

            </div>
        </Fragment>
    )
}

export default Products
