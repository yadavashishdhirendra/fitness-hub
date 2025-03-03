import React, { Fragment } from 'react'
import Marquee from 'react-fast-marquee'
import Header from '../Components/Header'
import '../Styles/Home.scss'
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Product.scss'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import { ArrowForwardSharp, ShoppingBagOutlined } from '@mui/icons-material';
import '../Styles/Cart.scss'
import { Button } from '@mui/material';

const Cart = () => {
    const navigate = useNavigate();
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
                    <Typography
                        fontFamily={'Montserrat'}
                        sx={{ color: 'text.primary', display: 'flex', alignItems: 'center' }}
                    >
                        <ShoppingBagOutlined sx={{ mr: 0.5 }} fontSize="inherit" />
                        Cart
                    </Typography>
                </Breadcrumbs>
                {/* BreadCrumbs Container ends here */}

                <div className='cart__heading'>
                    <h1>My Cart</h1>
                    <div className='all__products'>
                        <Button onClick={() => navigate('/products')}>Continue Shopping &nbsp; <ArrowForwardSharp /></Button>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default Cart
