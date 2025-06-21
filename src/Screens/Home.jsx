import React, { Fragment, useState } from 'react'
import '../Styles/Home.scss'
import Carousel from '../Components/Carousel'
import { Button } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Header from '../Components/Header';
import { ArrowForwardSharp } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import EmailIcon from '../Assets/Icon/email.png'
import MetaTitle from '../Components/MetaTitle';
import safeIcon from '../Assets/Home/safeandsecure.svg'
import FreeShippingIcon from '../Assets/Home/freeshiping.svg'
import AuthencityIcon from '../Assets/Home/authen.svg'
import TimeIcon from '../Assets/Home/time.png'
import Footer from '../Components/Footer';
import Products from '../Components/Products';

const CAROUSEL_ARR = [
    {
        uri: require("../Assets/Home/homeBanner/young.jpg"),
        responsive_uri: require("../Assets/Home/homeBanner/side-view-man-standing-gym.jpg")
    },
    {
        uri: require("../Assets/Home/homeBanner/young-muscular-caucasian-athlete-training-gym-doing-strength-exercises-practicing-work-his.jpg"),
        responsive_uri: require("../Assets/Home/homeBanner/workout-like-beast.jpg")
    }
]

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

//

const CATEGORY_ARR = ["Workout Series", "Tablets", "Protein", "Pre Workout", "Gainers", "Energy Series"]

const PRODUCTS_OFFER_ARR = [
    {
        id: 1,
        offer_img: require('../Assets/Home/categories/img-collection.webp'),
        offer_name: "Clearance🧹",
        offer_title: "Reload Supplements",
        offer_percent: "20% Off",
        color: '#f2cb1f'
    },
    {
        id: 2,
        offer_img: require('../Assets/Home/categories/img-collection-2.webp'),
        offer_name: "What’s hot♨️",
        offer_title: "Best-selling Protein Products",
        offer_percent: "Up to 50% off",
        color: "#2dbcfe"
    },
    {
        id: 3,
        offer_img: require('../Assets/Home/categories/img-collection-3.webp'),
        offer_name: "Available now🫠",
        offer_title: "Gold Standard 100% Whey",
        offer_percent: "From $199.00",
        color: "orange"
    },
]

export const PRODUCTS = [
    {
        id: 1,
        product_uri: require('../Assets/Home/HomeProducts/MARINE-COLLAGEN-300G-OR.PNG'),
        percentage_off: "7% Off",
        product_name: "Marine collagen 300g or",
        wght: "4.4 lb Choco Crispers",
        new_price: "5,099",
        old_price: "5,499",
    },
    {
        id: 3,
        product_uri: require('../Assets/Home/HomeProducts/MULTIVITAMIN.PNG'),
        percentage_off: "7% Off",
        product_name: "Multivitamin",
        wght: "4.4 lb Choco Crispers",
        new_price: "5,099",
        old_price: "5,499",
    },
    {
        id: 5,
        product_uri: require('../Assets/Home/HomeProducts/OMEGA-3.PNG'),
        percentage_off: "7% Off",
        product_name: "Omega 3",
        wght: "4.4 lb Choco Crispers",
        new_price: "5,099",
        old_price: "5,499",
    },
    {
        id: 7,
        product_uri: require('../Assets/Home/HomeProducts/PURE-ISOLATE-2KG-CF.PNG'),
        percentage_off: "7% Off",
        product_name: "Pure isolate 2kg CF",
        wght: "4.4 lb Choco Crispers",
        new_price: "5,099",
        old_price: "5,499",
    },
    {
        id: 8,
        product_uri: require('../Assets/Home/HomeProducts/PURE-ISOLATE-2KG-CH.PNG'),
        percentage_off: "7% Off",
        product_name: "Pure isolate 2kg CH",
        wght: "4.4 lb Choco Crispers",
        new_price: "5,099",
        old_price: "5,499",
    },
    {
        id: 9,
        product_uri: require('../Assets/Home/HomeProducts/PURE-ISOLATE-2KG-MK.PNG'),
        percentage_off: "7% Off",
        product_name: "Pure isolate 2kg MK",
        wght: "4.4 lb Choco Crispers",
        new_price: "5,099",
        old_price: "5,499",
    },
    {
        id: 10,
        product_uri: require('../Assets/Home/HomeProducts/PURE-MASS-GAINER-3KG-CF-(1).PNG'),
        percentage_off: "7% Off",
        product_name: "Pure mass gainer 3kg CF",
        wght: "4.4 lb Choco Crispers",
        new_price: "5,099",
        old_price: "5,499",
    },
    {
        id: 12,
        product_uri: require('../Assets/Home/HomeProducts/PURE-MASS-GAINER-3KG-CH.PNG'),
        percentage_off: "7% Off",
        product_name: "Pure mass gainer 3kg CF",
        wght: "4.4 lb Choco Crispers",
        new_price: "5,099",
        old_price: "5,499",
    },
    {
        id: 13,
        product_uri: require('../Assets/Home/HomeProducts/PURE-MASS-GAINER-3KG-SB.PNG'),
        percentage_off: "7% Off",
        product_name: "Pure mass gainer 3kg SB",
        wght: "4.4 lb Choco Crispers",
        new_price: "5,099",
        old_price: "5,499",
    },
    {
        id: 14,
        product_uri: require('../Assets/Home/HomeProducts/PURE-WHEY-PROTEIN-2KG-CF-(1).PNG'),
        percentage_off: "7% Off",
        product_name: "Pure whey protein 2kg CF",
        wght: "4.4 lb Choco Crispers",
        new_price: "5,099",
        old_price: "5,499",
    },
    {
        id: 16,
        product_uri: require('../Assets/Home/HomeProducts/PURE-WHEY-PROTEIN-2KG-CH.PNG'),
        percentage_off: "7% Off",
        product_name: "Pure whey protein 2kg CH",
        wght: "4.4 lb Choco Crispers",
        new_price: "5,099",
        old_price: "5,499",
    },
    {
        id: 17,
        product_uri: require('../Assets/Home/HomeProducts/PURE-WHEY-PROTEIN-2KG-MK.PNG'),
        percentage_off: "7% Off",
        product_name: "Pure whey protein 2kg MK",
        wght: "4.4 lb Choco Crispers",
        new_price: "5,099",
        old_price: "5,499",
    },
]

export const tablet = [
    {
        id: 1,
        percentage_off: "7% Off",
        product_name: "Biozyme Performance Whey,",
        wght: "4.4 lb Choco Crispers",
        new_price: "5,099",
        old_price: "5,499",
        product_uri: require('../Assets/OurProducts/tab1.png')
    },
    {
        id: 2,
        percentage_off: "36% Off",
        product_name: "Super Gainer XXL Weight Gainer,",
        wght: "6.6 lb Chocolate",
        new_price: "2,749",
        old_price: "4,299",
        product_uri: require('../Assets/OurProducts/tab2.png')
    },
    {
        id: 3,
        percentage_off: "7% Off",
        product_name: "Biozyme Performance Whey,",
        wght: "4.4 lb Choco Crispers",
        new_price: "5,099",
        old_price: "5,499",
        product_uri: require('../Assets/OurProducts/tab3.png')
    },
    {
        id: 4,
        percentage_off: "36% Off",
        product_name: "Super Gainer XXL Weight Gainer,",
        wght: "6.6 lb Chocolate",
        new_price: "2,749",
        old_price: "4,299",
        product_uri: require('../Assets/OurProducts/tab4.png')
    },
    {
        id: 5,
        percentage_off: "7% Off",
        product_name: "Biozyme Performance Whey,",
        wght: "4.4 lb Choco Crispers",
        new_price: "5,099",
        old_price: "5,499",
        product_uri: require('../Assets/OurProducts/tab5.png')
    },
    {
        id: 6,
        percentage_off: "36% Off",
        product_name: "Super Gainer XXL Weight Gainer,",
        wght: "6.6 lb Chocolate",
        new_price: "2,749",
        old_price: "4,299",
        product_uri: require('../Assets/OurProducts/tab6.png')
    },
]

const Home = () => {
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(0)
    return (
        <Fragment>
            <MetaTitle title={`Fitness Hub`} />

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

            <div className='bg__container'>
                <div className="container">
                    {/* Carousel component starts here */}
                    <Carousel responsive={responsive} data={CAROUSEL_ARR} />
                    {/* Carousel component ends here */}

                    {/* offers component starts here */}
                    <div className='offers__container_grid_row'>
                        {
                            PRODUCTS_OFFER_ARR && PRODUCTS_OFFER_ARR?.map((i, index) => (
                                <div key={i.id}>
                                    <img src={i.offer_img} alt="" />
                                    <div className="overlay__img"></div>
                                    <div>
                                        <p>{i.offer_name}</p>
                                        <h3>{i.offer_title}</h3>
                                        <p style={{ color: i.color }}>{i.offer_percent}</p>
                                        <Button>Shop Now&nbsp; <ArrowRightAltIcon /></Button>
                                    </div>
                                </div>
                            ))
                        }
                        <div></div>
                    </div>
                    {/* offers component ends here */}

                    {/* Our Products Header starts here */}
                    <div className='our__products__container'>
                        <p>SHOP OUR NEW RELEASES
                        </p>
                        <h2>Our Products</h2>
                    </div>
                    {/* Our Products Header ends here */}

                    {/* Shop By Category */}
                    <div className='categories__grid__row'>
                        {
                            CATEGORY_ARR && CATEGORY_ARR?.map((i, index) => (
                                <div onClick={() => setActiveIndex(index)} className={`button-92 ${activeIndex === index ? "active__button" : ""}`} key={index}>
                                    <div className='traingle'></div>
                                    <p>{i}</p>
                                </div>
                            ))
                        }
                    </div>
                    {/* Shop By Category */}


                    {/* Products container starts here */}
                    <div className="products__container_grid__row">
                        <Products PRODUCTS_ARR={PRODUCTS} />
                    </div>

                    <div className='all__products'>
                        <Button onClick={() => navigate('/products')}>View all Products &nbsp; <ArrowForwardSharp /></Button>
                    </div>
                    {/* products container ends here */}
                </div>

                {/* Sign Up Component starts here */}
                <div className='sign__up__container'>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#212121" fill-opacity="1" d="M0,64L80,74.7C160,85,320,107,480,106.7C640,107,800,85,960,85.3C1120,85,1280,107,1360,117.3L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg> */}
                    <img src={EmailIcon} alt="" />
                    <h2>70% Off all Whey <br /> Protein products for the next <br /> 02 day only
                    </h2>
                    <p>Be the first to know about our new arrivals ands exclusive offers.</p>

                    <div>
                        <input type="text" />
                        <Button>Subscribe</Button>
                    </div>
                </div>
                {/* Sign Up Component ends here */}


                {/* Delivery Details component starts here */}
                {/* grid row */}
                <div className='delivery-details-grid-row'>
                    <div>
                        <div>
                            <img src={safeIcon} alt="" />
                        </div>
                        <p>100% Safe & Secure Payments
                        </p>
                    </div>
                    <div>
                        <div>
                            <img src={FreeShippingIcon} alt="" />
                        </div>
                        <p>Free Shipping
                        </p>
                    </div>
                    <div>
                        <div>
                            <img className='time-icon' src={TimeIcon} alt="" />
                        </div>
                        <p>
                            Timely Delivery
                        </p>
                    </div>
                    <div>
                        <div>
                            <img src={AuthencityIcon} alt="" />
                        </div>
                        <p>Authenticity Guaranteed
                        </p>
                    </div>
                </div>
                {/* grid row */}
                {/* Delivery Details component ends here */}

            </div>
            {/* Footer Component starts here */}
            <Footer />
            {/* Footer Component ends here */}

        </Fragment>
    )
}

export default Home
