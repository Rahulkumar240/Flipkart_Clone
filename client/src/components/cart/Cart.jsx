
import { Grid, Typography, Box, styled, Button } from "@mui/material";
import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import Totalview from "./TotalView";

const Container = styled(Grid)(({ theme }) => ({
    padding: '30px 24px',
    margin: '50px auto',
    width: '100%',
    maxWidth: '1060px',
    boxSizing: 'border-box',
    alignItems: 'flex-start',
    justifyContent: 'center',

    [theme.breakpoints.down('md')]: {
        padding: '20px 16px',
        margin: '20px auto',
    },

    [theme.breakpoints.down('sm')]: {
        padding: '12px 8px',
        margin: '10px auto',
    },
}));

const Header = styled(Box)({
    padding: '15px',
    background: '#fff',
});

const ButtonWrapper = styled(Box)({
    padding: '16px 22px',
    background: '#fff',
    boxShadow: '0 -2px 10px 0 rgba(0, 0, 0, 0.1)',
    borderTop: '1px solid #f0f0f0',
});

const StyledButton = styled(Button)({
    display: 'flex',
    marginLeft: 'auto',
    background: '#fb641b',
    color: '#fff',
    width: '250px',
    maxWidth: '100%',
    height: '51px',
    borderRadius: '2px',
    '&:hover': {
        background: '#e85b16',
    },
});

const LeftComponent = styled(Grid)(({ theme }) => ({
    paddingRight: '15px',
    boxSizing: 'border-box',

    [theme.breakpoints.down('md')]: {
        paddingRight: 0,
        marginBottom: '15px',
    },
}));

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems);

    return (
        <>
            {cartItems?.length ? (
                <Container container>
                    <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                        <Header>
                            <Typography>
                                My Cart ({cartItems.length})
                            </Typography>
                        </Header>

                        {cartItems.map(item => (
                            <CartItem key={item.id} item={item} />
                        ))}

                        <ButtonWrapper>
                            <StyledButton variant="contained">
                                Place Order
                            </StyledButton>
                        </ButtonWrapper>
                    </LeftComponent>

                    <Grid item lg={3} md={3} sm={12} xs={12}>
                        <Totalview cartItems={cartItems} />
                    </Grid>
                </Container>
            ) : (
                <EmptyCart />
            )}
        </>
    );
};

export default Cart;
