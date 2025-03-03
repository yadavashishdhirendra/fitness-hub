import React, { Fragment, useState } from 'react'
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
import Thumbnail from '../Assets/Home/products/pck_3568539_c_m.webp'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const initialProducts = [
    {
        id: 1,
        name: "Redcon1 Total War Pre-Workout 30...",
        price: 26.26,
        image: "https://via.placeholder.com/50",
        quantity: 1,
    },
    {
        id: 2,
        name: "Optimum Nutrition Gold Standard Whey",
        price: 45.99,
        image: "https://via.placeholder.com/50",
        quantity: 1,
    },
];

const Cart = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState(initialProducts);

    const updateQuantity = (id, change) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === id
                    ? { ...product, quantity: Math.max(1, product.quantity + change) }
                    : product
            )
        );
    };

    const removeProduct = (id) => {
        setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    };
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


                {/* Prdoducts component starts here */}
                <Box sx={{ width: "100%", overflowX: "auto", p: 2 }}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 500 }} aria-label="shopping cart table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><Typography fontWeight="bold">PRODUCT</Typography></TableCell>
                                    <TableCell align="center"><Typography fontWeight="bold">PRICE</Typography></TableCell>
                                    <TableCell align="center"><Typography fontWeight="bold">QUANTITY</Typography></TableCell>
                                    <TableCell align="right"><Typography fontWeight="bold">TOTAL</Typography></TableCell>
                                    <TableCell align="center"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {products.map((product) => (
                                    <TableRow key={product.id}>
                                        <TableCell>
                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                <img
                                                    src={Thumbnail}
                                                    alt="Product"
                                                    style={{ width: 56, height: 56, marginRight: 16 }}
                                                />
                                                <Box>
                                                    <Typography fontFamily={'Montserrat'} fontWeight="bold" mb={0.5}>{product.name}</Typography>
                                                    <Typography fontFamily={'Montserrat'} fontWeight="400" fontSize={14}>${product.price}</Typography>
                                                </Box>
                                            </Box>
                                        </TableCell>
                                        <TableCell align="center" style={{ fontFamily: "Montserrat" }}>${product.price}</TableCell>
                                        <TableCell align="center" style={{ whiteSpace: 'nowrap' }}>
                                            <IconButton onClick={() => updateQuantity(product.id, -1)}>
                                                <RemoveIcon />
                                            </IconButton>
                                            <Typography fontFamily={'Montserrat'} component="span" sx={{ mx: 2 }}>{product.quantity}</Typography>
                                            <IconButton onClick={() => updateQuantity(product.id, 1)}>
                                                <AddIcon />
                                            </IconButton>
                                        </TableCell>
                                        <TableCell style={{ fontFamily: "Montserrat" }} align="right" fontWeight="bold">${(product.quantity * product.price).toFixed(2)}</TableCell>
                                        <TableCell align="center">
                                            <IconButton color="error" onClick={() => removeProduct(product.id)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                {/* Products component ends here */}

            </div>
        </Fragment>
    )
}

export default Cart
