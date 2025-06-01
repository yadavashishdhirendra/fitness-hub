import React, { Fragment, useCallback, useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
import Header from '../Components/Header'
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from '@mui/material';
import '../Styles/Home.scss'
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Product.scss'
import { PRODUCTS_ARR } from './Home';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import GrainIcon from '@mui/icons-material/Grain';
import { ArrowForwardSharp } from '@mui/icons-material';
import MetaTitle from '../Components/MetaTitle';
import Footer from '../Components/Footer';

const Products = () => {
    const navigate = useNavigate();
    const textSlides = [
        "Welcome to Our\nPlatform!",
        "Experience the\nBest Services Available.",
        "Join Us and\nGet Started Today,.",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const changeText = useCallback(
        (newIndex) => {
            if (isAnimating) return; // Prevent spam clicks

            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex(newIndex);
                setIsAnimating(false);
            }, 500); // Match with CSS animation
        },
        [isAnimating],
    )

    const nextText = useCallback(
        () => {
            changeText((currentIndex + 1) % textSlides.length);
        },
        [changeText, currentIndex, textSlides.length],
    )


    const prevText = () => {
        changeText((currentIndex - 1 + textSlides.length) % textSlides.length);
    };

    // Auto change every 5 seconds
    useEffect(() => {
        const interval = setInterval(nextText, 5000);

        return () => clearInterval(interval); // Clear on unmount
    }, [currentIndex, nextText]); // Reset interval on text change

    return (
        <Fragment>
            <MetaTitle title={`Our Products`} />
            {/* Marquee Container starts here */}
            {/* <div className='marquee__container__row'>
                <Marquee>
                    💪🔥 Get 50% OFF on Gym Memberships! Limited Period Offer – Buy 1-Year Membership & Get 2 Months FREE! 🏋️‍♂️🎁 Hurry, Join Now! ⏳
                </Marquee>
            </div> */}
            {/* Marquee Container ends here */}

            {/* Navbar Component starts here */}
            <Header />
            {/* Navbar Component ends here */}

            {/* <div className="container"> */}

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
                {/* <Link
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                    >
                        <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        Core
                    </Link> */}
                <Typography
                    fontFamily={'Montserrat'}
                    sx={{ color: 'text.primary', display: 'flex', alignItems: 'center' }}
                >
                    <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Our Products
                </Typography>
            </Breadcrumbs>
            {/* BreadCrumbs Container ends here */}

            <div className="banner-container">
                {/* Overlay */}
                <div className="banner-overlay">
                    <div className="text-box">
                        <div className="text-wrapper">
                            <h1 key={currentIndex} className="banner-text">
                                {textSlides[currentIndex].split("\n").map((line, index) => (
                                    <Fragment key={index}>
                                        {line}
                                        <br />
                                    </Fragment>
                                ))}
                                <Button className='button__shop__now'>Shop Now&nbsp; <ArrowForwardSharp /></Button>
                            </h1>

                        </div>
                    </div>
                </div>

                {/* Navigation Arrows */}
                <button onClick={prevText} className="arrow-button left-arrow">
                    <ChevronLeft size={24} />
                </button>
                <button onClick={nextText} className="arrow-button right-arrow">
                    <ChevronRight size={24} />
                </button>
            </div>


            {/* Products Container Component starts here */}
            <div className="container products-row-content">
                <div className='products__container__row'>
                    <div>
                        <h2>FILTER:</h2>
                        {/* Accordion */}
                        <Accordion className='accordion' defaultExpanded>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography fontFamily={'Montserrat'} fontWeight={500} component="span">AVAILABILITY</Typography>
                            </AccordionSummary>
                            <AccordionDetails>

                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='accordion' defaultExpanded>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography fontFamily={'Montserrat'} fontWeight={500} component="span">PRICE</Typography>
                            </AccordionSummary>
                            <AccordionDetails>

                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='accordion' defaultExpanded>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3-content"
                                id="panel3-header"
                            >
                                <Typography fontFamily={'Montserrat'} fontWeight={500} component="span">PRODUCT TYPE</Typography>
                            </AccordionSummary>
                            <AccordionDetails>

                            </AccordionDetails>
                            <AccordionActions>
                                <Button className='actions__cta'>Cancel</Button>
                                <Button className='actions__cta'>Agree</Button>
                            </AccordionActions>
                        </Accordion>
                        {/* Accordion */}

                    </div>
                    <div>

                        {/* Top Filter Row starts here */}
                        <div className='top__filter__products__row'>
                            <div></div>
                            <div>
                                <p>1 of 10 Total 11</p>
                            </div>
                        </div>
                        {/* Top Filter Row ends here */}

                        {/* Products container starts here */}
                        <div className="products__container_grid__row our__products" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
                            {
                                PRODUCTS_ARR && PRODUCTS_ARR?.map((i, index) => (
                                    <div onClick={() => navigate(`/products/${i.id}/${i.product_name}`)} key={index}>
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

                        <p className='end'>You'hve reached at the end☻</p>
                        {/* products container ends here */}

                    </div>
                </div>
            </div>
            {/* Products Container Component ends here */}

            {/* </div> */}

            {/* Footer Component starts here */}
            <Footer />
            {/* Footer Component ends here */}
        </Fragment>
    )
}

export default Products
