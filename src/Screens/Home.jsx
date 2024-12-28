import React, { Fragment, useState } from 'react'
import '../Styles/Home.scss'
import Carousel from '../Components/Carousel'
import { Button } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const CAROUSEL_ARR = [
    {
        uri: require("../Assets/Home/bnr_3508283_o.webp"),
    },
    {
        uri: require("../Assets/Home/bnr_3593875_o.webp"),
    },
    {
        uri: require("../Assets/Home/bnr_3671613_o.webp"),
    },
    {
        uri: require("../Assets/Home/bnr_3671621_o.webp"),
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

const CATEGORY_ARR = ["Beginner", "Intermediate", "Advanced"]

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

const PRODUCTS_ARR = [
    {
        id: 1,
        percentage_off: "7% Off",
        product_name: "Biozyme Performance Whey,",
        wght: "4.4 lb Choco Crispers",
        new_price: "5,099",
        old_price: "5,499",
        product_uri: require('../Assets/Home/products/pck_3568539_c_m.webp')
    },
    {
        id: 2,
        percentage_off: "36% Off",
        product_name: "Super Gainer XXL Weight Gainer,",
        wght: "6.6 lb Chocolate",
        new_price: "2,749",
        old_price: "4,299",
        product_uri: require('../Assets/Home/products/prd_2989517-MuscleBlaze-High-Protein-Peanut-Butter-1-kg-Dark-Chocolate-Creamy_c_m.webp')
    },
    {
        id: 3,
        percentage_off: "36% Off",
        product_name: "MuscleBlaze Pre Workout WrathX 0.75 lb Cola Frost & Creatine...",
        wght: "",
        new_price: "1,749",
        old_price: "2,748",
        product_uri: require('../Assets/Home/products/prd_3251359-MuscleBlaze-Super-Gainer-XXL-Weight-Gainer-6.webp')
    },
    {
        id: 4,
        percentage_off: "30% Off",
        product_name: "Biozyme 5 in 1 Multivitamin,",
        wght: "90 tablet(s) Unflavoured",
        new_price: "899",
        old_price: "1,299",
        product_uri: require('../Assets/Home/products/prd_3542923-MuscleBlaze-Biozyme-5-in-1-Multivitamin-90-tablets-Unflavoured_c_m.webp')
    },
    {
        id: 5,
        percentage_off: "16% Off",
        product_name: "High Protein Peanut Butter",
        wght: "1 Kg Dark Chocolate Creamy",
        new_price: "625",
        old_price: "749",
        product_uri: require('../Assets/Home/products/prd_3577745-MuscleBlaze-Biozyme-Performance-Whey-4.webp')
    }
]

const Home = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    return (
        <Fragment>
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
                    {
                        PRODUCTS_ARR && PRODUCTS_ARR?.map((i, index) => (
                            <div key={index}>
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
                {/* products container ends here */}


                {/* Gallery Component starts here */}
<div></div>
                {/* Gallery Component ends here */}

            </div>
        </Fragment>
    )
}

export default Home
