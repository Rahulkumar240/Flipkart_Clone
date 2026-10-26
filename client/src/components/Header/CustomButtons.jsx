
import { useState, useContext } from 'react';
import { Badge, Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ShoppingCart } from '@mui/icons-material';
import LoginDialog from '../login/LoginDialog';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0 3% 0 auto',
    gap: '30px',
    color: '#fff',

    '& > *': {
        fontSize: '16px',
        flexShrink: 0,
    },

    [theme.breakpoints.down('md')]: {
        margin: 0,
        gap: '15px',
    },

    [theme.breakpoints.down('sm')]: {
        gap: '10px',
    },
}));

const Container = styled(Link)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'inherit',
    whiteSpace: 'nowrap',

    [theme.breakpoints.down('md')]: {
        display: 'flex',
    },
}));

const LoginButton = styled(Button)({
    color: '#2874f0',
    background: '#fff',
    textTransform: 'none',
    padding: '5px 40px',
    borderRadius: '2px',
    boxShadow: 'none',
    fontWeight: 600,
    height: '32px',
    minWidth: '110px',

    '&:hover': {
        background: '#f5f5f5',
        boxShadow: 'none',
    },
});

const CustomButtons = () => {
    const [open, setOpen] = useState(false);

    const { account, setAccount } = useContext(DataContext);
    const { cartItems } = useSelector(state => state.cart);

    const openDialog = () => {
        setOpen(true);
    };

    return (
        <Wrapper>
            {account ? (
                <Profile account={account} setAccount={setAccount} />
            ) : (
                <LoginButton
                    variant="contained"
                    onClick={openDialog}
                >
                    Login
                </LoginButton>
            )}

            <Typography
                sx={{
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    fontSize: 16,
                }}
            >
                Become a Seller
            </Typography>

            <Typography
                sx={{
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    fontSize: 16,
                }}
            >
                More
            </Typography>

            <Container to="/cart">
                <Badge
                    badgeContent={cartItems?.length || 0}
                    color="secondary"
                >
                    <ShoppingCart />
                </Badge>

                <Typography sx={{ ml: 1, fontSize: 16 }}>
                    Cart
                </Typography>
            </Container>

            <LoginDialog open={open} setOpen={setOpen} />
        </Wrapper>
    );
};

export default CustomButtons;
