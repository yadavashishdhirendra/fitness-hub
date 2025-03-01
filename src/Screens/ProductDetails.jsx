import React, { Fragment } from 'react'
import Marquee from 'react-fast-marquee'
import Header from '../Components/Header'
import '../Styles/Home.scss'
import { Link, useNavigate, useParams } from 'react-router-dom';
import '../Styles/Product.scss'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import ProductIcon from '@mui/icons-material/ProductionQuantityLimitsSharp';
import GrainIcon from '@mui/icons-material/Grain';
import SliderImage from "react-zoom-slider";
import { ArrowForwardSharp } from '@mui/icons-material';
import { PRODUCTS_ARR } from './Home';
import { Button } from '@mui/material';

const CAROUSEL_ARR = [
    {
        image: require("../Assets/OurProducts/11_cdb39979-17ad-4c9d-a98d-bbb56a889ad8_576x.webp"),
    },
    {
        image: require("../Assets/OurProducts/12_f99dc65b-1c32-478c-a29d-2c8e814fda1f_576x.webp"),
    },
    {
        image: require("../Assets/OurProducts/13_9cecea00-c8b8-4fd8-a5cd-20c8d64bf410_576x.webp"),
    },
    {
        image: require("../Assets/OurProducts/14_f2993bf7-2788-4adf-82a0-91bdaab03db3_576x.webp"),
    }
]

const ProductDetails = () => {
    const navigate = useNavigate();
    const { id, name } = useParams();
    return (
        <Fragment>
            {/* Marquee Container starts here */}
            <div className='marquee__container__row'>
                <Marquee>
                    💪🔥 Get 50% OFF on Gym Memberships! Limited Period Offer – Buy 1-Year Membership & Get 2 Months FREE! 🏋️‍♂️🎁 Hurry, Join Now! ⏳
                </Marquee>
            </div>
            {/* Marquee Container ends here */}

            {/* Navbar Component starts here */}
            <Header />
            {/* Navbar Component ends here */}

            <div className="container">

                {/* BreadCrumbs Container starts here */}
                <Breadcrumbs aria-label="breadcrumb">
                    <Link
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="inherit"
                        to="/"
                        className='previous'
                    >
                        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        Home
                    </Link>
                    <Link
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="inherit"
                        to="/products"
                        className='previous'
                    >
                        <ProductIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        Our Products
                    </Link>
                    <Typography
                        fontFamily={'Montserrat'}
                        sx={{ color: 'text.primary', display: 'flex', alignItems: 'center' }}
                    >
                        <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        {name}
                    </Typography>
                </Breadcrumbs>
                {/* BreadCrumbs Container ends here */}

                <div className="product__details__container">
                    <div>
                        {/* Carousel component starts here */}
                        <SliderImage
                            data={CAROUSEL_ARR}
                            width="100%"
                            showDescription={false}
                            direction="right"
                        />
                        {/* Carousel component ends here */}
                    </div>
                    <div>
                        <p>#SKU-{id}</p>
                        <h1>{name}</h1>
                    </div>
                </div>


                {/* Similar Products Container starts here */}
                <div className='similar__prod__container'>
                    <h2>You May Also Like</h2>

                    {/* Products container starts here */}
                    <div className="products__container_grid__row">
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
                    </div>

                    <div className='all__products'>
                        <Button onClick={() => navigate('/products')}>View all Products &nbsp; <ArrowForwardSharp /></Button>
                    </div>
                    {/* products container ends here */}
                </div>
                {/* Similar Products Container ends here */}

            </div>
        </Fragment>
    )
}

export default ProductDetails;
