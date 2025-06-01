import React, { Fragment } from 'react'
import Rating from '@mui/material/Rating';

const Reviews = () => {
    return (
        <Fragment>
            <div className='reviews__grid__row'>
                <div>
                    <div className="review__input__row">
                        <div className='rating_container'>
                            <Rating name="size-large" defaultValue={2} size="large" />
                        </div>
                        <textarea name="" id="" rows={10}></textarea>
                        <div>
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
                <div>
                    {/* Reviews Container */}
                    <h3>No Reviews Yet.</h3>
                    {/* Reviews Container */}
                </div>
            </div>
        </Fragment>
    )
}

export default Reviews
