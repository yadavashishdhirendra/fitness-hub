import React, { Fragment } from 'react'
import Marquee from 'react-fast-marquee'
import Header from '../Components/Header'
import '../Styles/Home.scss'
import { Link, useParams } from 'react-router-dom';
import '../Styles/Product.scss'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import ProductIcon from '@mui/icons-material/ProductionQuantityLimitsSharp';
import GrainIcon from '@mui/icons-material/Grain';

const ProductDetails = () => {
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



            </div>
        </Fragment>
    )
}

export default ProductDetails;
