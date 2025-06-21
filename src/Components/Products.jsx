import { Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Products = ({ PRODUCTS_ARR }) => {
    const navigate = useNavigate();
    return (
        <>
            {
                PRODUCTS_ARR && PRODUCTS_ARR?.map((i, index) => (
                    <div key={index} onClick={() => navigate(`/products/${i.id}/${i.product_name}`)}>
                        <div className='svg__icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50.216" height="68.757" viewBox="0 0 50.216 68.757">
                                <path id="Group_427321710" data-name="Group 427321710" d="M35.389-5H.172V17.683s0,0,0,0V38.563c0,.483.452.918,1.146,1.1a2.653,2.653,0,0,0,2.023-.259l3.938-2.532,3.938,2.532a2.638,2.638,0,0,0,2.625,0l3.938-2.532,3.938,2.532a2.639,2.639,0,0,0,2.625,0l3.938-2.533,3.938,2.533a2.654,2.654,0,0,0,2.023.259c.694-.185,1.146-.62,1.146-1.1V-5Z" transform="translate(-0.172 5)" fill="#23a247" fill-rule="evenodd" />
                            </svg>
                            <p>20% <br /> OFF</p>
                        </div>
                        <img src={i.product_uri} alt="" />
                        <div>
                            <h3>{i.product_name}</h3>
                            <p>{i.wght}</p>
                            <p>
                                ₹{i.new_price} <span className='old__price'>₹{i.old_price}</span>&nbsp;&nbsp; <span className='save__price'>Save ₹{i.percentage_off}</span>
                            </p>
                        </div>
                        <Button>Add To Cart</Button>
                    </div>
                ))
            }
        </>
    )
}

export default Products
