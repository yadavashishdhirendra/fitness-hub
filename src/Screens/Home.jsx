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

const CATEGORY_ARR = ["Beginner", "Intermediate", "Advanced"]

const PRODUCTS_OFFER_ARR = [
    {
        id: 1,
        offer_img: require('../Assets/Home/categories/img-collection.webp'),
        offer_name: "Clearance",
        offer_title: "Reload Supplements",
        offer_percent: "20% Off",
        color: '#f2cb1f'
    },
    {
        id: 2,
        offer_img: require('../Assets/Home/categories/img-collection-2.webp'),
        offer_name: "What’s hot",
        offer_title: "Best-selling Protein Products",
        offer_percent: "Up to 50% off",
        color: "#2dbcfe"
    },
    {
        id: 3,
        offer_img: require('../Assets/Home/categories/img-collection-3.webp'),
        offer_name: "Available now",
        offer_title: "Gold Standard 100% Whey",
        offer_percent: "From $199.00",
        color: "orange"
    },
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
                                    <p>{i.offer_name} -</p>
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

                {/* Our Products starts here */}
                <div>
                    <p></p>
                </div>
                {/* Our Products ends here */}

            </div>
        </Fragment>
    )
}

export default Home
