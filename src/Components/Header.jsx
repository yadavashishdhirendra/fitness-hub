import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { styled, alpha } from '@mui/material/styles';
import React, { Fragment } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Logo from '../Assets/Icon/logo__arfanutrition.png'
import { ShoppingBagIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Headers = [{
    id: 1,
    name: "Home",
    uri: '/',
}, {
    id: 2,
    name: "Our Products",
    uri: '/products',
}, {
    id: 3,
    name: "My Profile",
    uri: "/profile",
}]


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const Header = () => {
    const location = useLocation();

    console.log(location.pathname)
    return (
        <Fragment>
            <AppBar className='header__wrapper' position="fixed">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className='left__row__header'>

                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            <img src={Logo} alt="" />
                        </Typography>

                        {/* Menu Component starts here */}
                        <div className='menu__container'>
                            <ul>
                                {
                                    Headers?.map((i, index) => (
                                        <li key={index} className={location.pathname === i.uri ? 'active__menu' : ''}>
                                            <Link to={`${i.uri}`}>{i.name}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        {/* Menu Component ends here */}
                    </div>

                    <Button className='cart__icon'>
                        <ShoppingBagIcon size={24} color='white' />
                        <div className='cart__count'>
                            3
                        </div>
                    </Button>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}

export default Header
